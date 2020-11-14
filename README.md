# CMS

An extremely basic cms with an admin panel and a main website to prefrom CRUD methods to manage the content built with Sequelize and Express using a mySQL database

## Installation

local installation

```bash
git clone https://github.com/jakescript/cms.git  
cd cms  
npm install
```
configure your database for sequelize within /db/index.js with the conn variable  
control database seeding inside the main server.js file within the init function


## Usage
Access the admin panel using the /admin route from the root url. From there you will have access to basic CRUD methods to control the content on the website

## To Do  
* add image uploading
* make it pretty
