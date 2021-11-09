import json
from os import read
import requests
import sys

token_var = sys.argv[1]
fileName = "DemoActions.pdf"
filePath = "./"+fileName

def send_report_to_slack(filePath,fileName):
    url = "https://slack.com/api/files.upload"

    #reading file in binary form
    with open(filePath, "rb") as f:
        read_data = f.read()

    data = {
        "token": token_var,
        "channels": "#practice",
        "content": read_data,
        "filename": fileName,
        "title": "Demo test Actions slack test result: "+fileName,
        "initial_comment": "Demo Actions testing report",
    }

    requests.post(
        url=url, data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded"}
    )

if token_var != "":
    send_report_to_slack(filePath,fileName)
else:
    print("slack token value is required")
    raise Exception
