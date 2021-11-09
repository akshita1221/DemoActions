apt-get update
DEBIAN_FRONTEND=noninteractive
#Install pip
apt-get install -y python3-pip
pip3 install requests
#Install display manager
apt-get install lightdm-y
#Installing pdfkit and wkhtmltopdf for converting html file to pdf
pip3 install pdfkit
apt-get install -y wkhtmltopdf
apt-get install -y xvfb
pip3 install pyvirtualdisplay
#Install curl, gnupg
apt-get install -y curl
apt-get install -y gnupg
#Install node.js
curl -sL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs
#Install google chrome
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
&& echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
apt-get update && apt-get -y install google-chrome-stable_92.0.4515.131
#Install protractor
npm install -g protractor
webdriver-manager update --versions.chrome 95.0.4638.69
npm install
