This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Host this react application on Apache server
## Step 1 : Create app/clone app
$ npm install -g create-react-app 
$ create-react-app my-app
## Step 2 : Build it for production
$ cd my-app
$ npm run build
## Step 3 : deploy
copy and paste everything in build folder to your server
edit /etc/httpd/conf/httpd.conf
<Directory "/var/www/html">
    ...
    AllowOverride All
    ...
</Directory>
create a “.htaccess” file in html directory and add this snippet :
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
or edit /etc/httpd/conf/httpd.conf

<Directory "/var/www/html">
    #
    # Possible values for the Options directive are "None", "All",
    # or any combination of:
    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that "MultiViews" must be named *explicitly* --- "Options All"
    # doesn't give it to you.
    #
    # The Options directive is both complicated and important.  Please see
    # http://httpd.apache.org/docs/2.4/mod/core.html#options
    # for more information.
    #
    Options Indexes FollowSymLinks

    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be "All", "None", or any combination of the keywords:
    #   Options FileInfo AuthConfig Limit
    #
    AllowOverride All

    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]

    #
    # Controls who can get stuff from this server.
    #
    Require all granted
</Directory>


# Reja-Dashboard Application
This is an application that graphs data based on the summary of transactions collected.

## Authors
* [Alex Omaset](https://github.com/alexomaset/)


#### Behaviour Driven Development(BDD)
| Behaviour  |    Input      | Output |
|----------|:-------------:|------:|
| Sign into application | click sigin button | logged into the index page |
| View Dashboard | Click on the different transactions navbar  | see posted summary of the data|
| See various transactions | Click on Days dropdowns and select buttons | see various data on the graph  |



### Project Setup instructions
Use the following commands to use this project.
- git clone 
- install `React`
- cd Dashboard
- `atom .`  //For those using atom text editor.
- `code .`  //For those using Visual Studio editor.

### Install dependancies
Install dependancies that will create an environment for the app to run `npm install`

### Run the application
```
CREATE DATABASE <preferred name>
- Run yarn start
- Access the application on this localhost address  [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
### Technologies used
The different technologies that were used to develop this program include:
```
1. React 
2. Bootstrap
3. HTML
4. CSS
5. Axios
6. ChartJs

```

### Link to live site
Here is a link to the live site 

### Contact Me
If you have any suggestions, additions or modifications on this project you can contact me via email.
### License  & Copyright information
Copyright (c) 2020
[MIT License](./LICENSE)