# backend/main.py
from fastapi import FastAPI, Form, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import uvicorn, swisseph as swe, pandas as pd, os
from datetime import datetime

app = FastAPI()
app.mount("/static", StaticFiles(directory="frontend"), name="static")

# 星历文件第一次运行时自动下载到 ./data
os.makedirs("data", exist_ok=True)
swe.set_ephe_path("data")

# 解释表（没有就留空）
EXCEL = "backend/astrology.xlsx"
df = pd.read_excel(EXCEL) if os.path.exists(EXCEL) else pd.DataFrame()

# 工具函数 --------------------------------------------------
def lon_to_sign(lon: float) -> str:
    return ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"][int(lon//30)]

def calc_chart(year, month, day, hour, minute, lat, lon):
    jd = swe.julday(year, month, day, hour + minute/60.0)
    swe.set_sid_mode(swe.SIDM_LAHIRI)           # 恒星宫
    # 计算宫位
    cusps, ascmc = swe.houses_ex(jd, lat, lon, b'P')
    asc = ascmc[0]
    houses = {i+1: c for i, c in enumerate(cusps)}
    # 行星
    planets = ['Sun','Moon','Mercury','Venus','Mars',
               'Jupiter','Saturn','Uranus','Neptune','Pluto']
    result = {}
    for p in planets:
        p_id = getattr(swe, p.upper())
        lon, lat, dist, speed, rflag = swe.calc_ut(jd, p_id)
        house = next(h for h in range(1,13)
                     if cusps[h-1] <= lon < cusps[h%12]) if lon < cusps[11] else 12
        result[p] = {"lon": lon, "sign": lon_to_sign(lon), "house": house}
    return result, asc

def aspects(natal, transit):
    planets = list(natal.keys())
    res = []
    for p in planets:
        a = abs(natal[p]["lon"] - transit[p]["lon"])
        if a > 180: a = 360 - a
        name = {0:"合相",60:"六合",90:"刑相",120:"三合",180:"对冲"}.get(int(round(a/30)*30),"")
        if name:
            res.append({"planet":p,"angle":int(round(a)),"aspect":name})
    return res

# API ------------------------------------------------------
@app.post("/api/full_report")
async def report(
    year:int=Form(...), month:int=Form(...), day:int=Form(...),
    hour:int=Form(...), minute:int=Form(...),
    lat:float=Form(...), lon:float=Form(...),
    tyear:int=Form(...), tmonth:int=Form(...), tday:int=Form(...),
    thour:int=Form(...), tminute:int=Form(...)
):
    natal, _ = calc_chart(year, month, day, hour, minute, lat, lon)
    transit, _ = calc_chart(tyear, tmonth, tday, thour, tminute, lat, lon)
    asp = aspects(natal, transit)
    # 简单解释（无 Excel 时返回空）
    inter = df[(df['行星']=='Sun') & (df['相位']==0)]['解释'].tolist() if not df.empty else []
    return {"natal":natal,"transit":transit,"aspects":asp,"interpretations":inter}

# 静态页面
@app.get("/", response_class=HTMLResponse)
def index(): return HTMLResponse(open("frontend/index.html").read())
@app.get("/report", response_class=HTMLResponse)
def report(): return HTMLResponse(open("frontend/report.html").read())

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
