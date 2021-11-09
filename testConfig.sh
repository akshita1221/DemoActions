slack_token=$1;

protractor conf.js
python3 htmlToPdfConversion.py
python3 slackIntegration.py $slack_token
