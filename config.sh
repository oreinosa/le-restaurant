sudo apt-get update -y;
# install dependencies
sudo apt-get install -y nginx curl software-properties-common;

# enable ufw
sudo ufw enable;
sudo systemctl start nginx

# configuring let's encrypt certificate
sudo add-apt-repository ppa:certbot/certbot -y;
sudo apt-get update -y;
sudo apt-get install -y python-certbot-nginx;
# configuring nginx
# configuring domain name
sudo sed -i -e 's/server_name _;/server_name thenewfuturesv.com www.thenewfuturesv.com;/g' /etc/nginx/sites-available/default;
# check syntax
sudo nginx -t;
# reload 
# sudo systemctl reload nginx;
# allow https traffic
sudo ufw allow 'Nginx Full';
# run certbot for nginx configuration with domain name
sudo certbot --nginx -d thenewfuturesv.com -d www.thenewfuturesv.com -m oscar.reinosa96@gmail.com --agree-tos --redirect false;
# /etc/letsencrypt/live/thenewfuturesv.com/fullchain.pem
# /etc/letsencrypt/live/thenewfuturesv.com/privkey.pem
# check certificate renewal
sudo certbot renew --dry-run;

# install node.js
cd ~;
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh;
sudo bash nodesource_setup.sh;
sudo apt-get install -y nodejs;
sudo apt-get install -y build-essential;

# install PM2
sudo npm install -g pm2;
pm2 startup systemd;

sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u oscar_reinosa96 --hp /home/oscar_reinosa96;

#check status
systemctl status pm2-oscar_reinosa96;

# replace location object 
sudo sed -i -e 's/# as directory, then fall back to displaying a 404./proxy_pass http:\/\/localhost:8080;proxy_http_version 1.1;proxy_set_header Upgrade $http_upgrade;proxy_set_header Connection 'upgrade';proxy_set_header Host $host;proxy_cache_bypass $http_upgrade;/g' /etc/nginx/sites-available/default;

# sudo sed -i -e 's/proxy_pass http:\/\/localhost:8080;proxy_http_version 1.1;proxy_set_header Upgrade $http_upgrade;proxy_set_header Connection 'upgrade';proxy_set_header Host $host;proxy_cache_bypass $http_upgrade;//g' /etc/nginx/sites-available/default;

# check syntax
sudo nginx -t;
sudo systemctl restart nginx;

# install mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4;
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list;
sudo apt-get update -y;
sudo apt-get install -y mongodb-org;
sudo service mongod start;


# get project
git clone https://github.com/oreinosa/le-restaurant;
cd le-restaurant;
npm install;

# set run in the background;
pm2 dist/index.js;
