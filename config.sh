sudo apt-get update -y;
# install dependencies
sudo apt-get install -y ufw nginx curl software-properties-common;

# allow https traffic
sudo ufw allow 'Nginx Full';
sudo ufw allow 22;
# enable ufw
sudo ufw --force enable;
sudo systemctl start nginx;

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

# run certbot for nginx configuration with domain name
sudo certbot --nginx -d thenewfuturesv.com -d www.thenewfuturesv.com -m oscar.reinosa96@gmail.com --agree-tos --redirect --non-interactive;
# /etc/letsencrypt/live/thenewfuturesv.com/fullchain.pem
# /etc/letsencrypt/live/thenewfuturesv.com/privkey.pem
# check certificate renewalr
sudo certbot renew --dry-run;

# configure server -> location blocks to serve static files and reverse proxy to nodejs app
sudo sed -i "46i46 \tlocation \/static/ {\n\t\tautoindex on;\n\t\ttry_files \$uri =404;\n\t}\n\n\tlocation \/api {\n\t\tproxy_pass http:\/\/localhost:8080;\n\t\tproxy_http_version 1.1;\n\t\tproxy_set_header Upgrade \$http_upgrade;\n\t\tproxy_set_header Connection \'upgrade\';\n\t\tproxy_set_header Host \$host;\n\t\tproxy_cache_bypass \$http_upgrade;\n\t}" /etc/nginx/sites-available/default;


# install node.js
cd ~;
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh;
sudo bash nodesource_setup.sh;
sudo apt-get install -y nodejs;
sudo apt-get install -y build-essential;

# install PM2
sudo npm install -g pm2;
pm2 startup systemd;

sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u oscar_reinosa96 --hp /home/oscar_reinosa96;

#check status
systemctl status pm2-oscar_reinosa96;

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
cd ~;
git clone https://github.com/oreinosa/le-restaurant;
cd le-restaurant;
npm install;

# set run in the background;
# sudo pm2 start dist/index.js;
