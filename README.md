# Angular Node MySQL CRUD application

## Connect MVC Node Express API to Angular application for CRUD operations

1. Setup MySQL, Node, and Angular
2. Create backend/config/config.json and change the password to your MySQL password.


```json
{
  "host": "localhost",
  "user": "root",
  "database": "image_db",
  "password": "<password>"
}
```
3. Run the schema to import data into MySQL database in the backend folder named task4.sql 

Note: For development purposes the host is localhost but this will need to be updated if you decide to deploy the application. By Default, MySQL gives the user 'root' with all privileges. You can simply change this to another user if desired. In this application we named our database 'image_db', however, if you went with a different name this will need to be changed.

2. cd backend
3. npm install && npm start
4. cd ../frontend
5. npm install && npm start
