# Command Center v.0.1

## Index

1. [Dev enviroment](https://github.com/GDoval/CommandCenter_node/blob/master/README.md#dev-enviroment)
2. [Trello](https://github.com/GDoval/CommandCenter_node/blob/master/README.md#trello)
3. [Enable Compass](https://github.com/GDoval/CommandCenter_node/blob/master/README.md#enable-compass)

## Dev enviroment

1. Clone the repo into a directory
2. Run `npm init -y`
3. Install Expressjs framework by running `npm install express --save`
4. Install Sass by running `npm install -g sass`
5. Setup Babel for JSX: `npm install babel-cli@6 babel-preset-react-app@3`. To run the watcher use
`npx babel --watch [SOURCE] --out-dir . --presets [PATH/TO/SCRIPTS]`
6. Run `npm install terser` to minify JS files as per this [guide](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3) 
7. Add the scripts tags to the main HTML file to enable [React](https://reactjs.org/docs/add-react-to-a-website.html)
8. Start the server by running `node index.js`

## Trello

https://trello.com/b/OhmIAuBd/command-center


## Enable Compass

Some of the features of the app are based on Ruby Compass. Several steps were needed when I tried to install it in WSL, so for future reference here they are:

1. In order to install Ruby first we need to disable IPv6 in Ubuntu. For that, we need to sudo edit the file `/etc/gai.conf` and uncomment the line `# For sites which prefer IPv4 connections change the last line to
#precedence ::ffff:0:0/96 100` as discussed in this [SO response](https://askubuntu.com/questions/32298/prefer-a-ipv4-dns-lookups-before-aaaaipv6-lookups/38468#38468)
2. Next, we need to install Ruby `$ gem update --system` and perhaps also run `sudo gem rubygems-update`
3. Then we install Compass by running `sudo apt-get install ruby-compass`
4. The Sass files are stored in the directory future. Inside this directory we create the Sass files and then run `compass compile`to generate the CSS files that are to be included in the HTML page.
