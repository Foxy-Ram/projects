import eel
import pyautogui as pag
import datetime as dt
import pandas as pd

eel.init('web')

flag = True
df = pd.read_csv("snooker_data.csv")

@eel.expose
def send_data(*args, **kwargs):
    data = list(args)
    data.append(str(dt.datetime.now()))
    
    if flag:
        df.loc[len(df.index)] = data
        df.to_csv("snooker_data.csv",index=False)
    
eel.start('index.html', size=(pag.size()))
