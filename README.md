"# hearth" 

<h1> About </h1>

This is a full-stack application that uses the MERN stack - React & material UI on front end and express.js and MongoDB on backend. Authentication & authorization
middleware is run between the request / response cycle.

This repo contains two folders: front-end & back-end.

<h3> Backend Routes </h3>

The following list shows the resources available for the backend

<h4> Users Endpoint </h4>

<p> CREATE A USER (MUST BE ADMIN USER) - POST -  http://localhost:8080/api/users  </p>
<p> GET ALL USERS (MUST BE ADMIN USER)  - GET -  http://localhost:8080/api/users </p>
<p> GET A USER BY EMAIL (MUST BE ADMIN USER OR OWN ACCOUNT) - GET -  http://localhost:8080/api/users/:email </p>
<p> UPDATE A USER BY EMAIL (MUST BE ADMIN USER OR OWN ACCOUNT) - PATCH -  http://localhost:8080/api/users/:email </p>
<p> DELETE A USER BY EMAIL (MUST BE ADMIN USER OR OWN ACCOUNT) - DELETE -  http://localhost:8080/api/users/:email </p>

<h4> Homes Endpoint </h4>

GET ALL HOMES - GET -  http://localhost:8080/api/homes
CREATE NEW HOME ENTRY - POST -  http://localhost:8080/api/homes

<h4> Auth Endpoint </h4>

AUTHENTICATE A USER - POST - http://localhost:8080/api/auth/token
REGISTER A USER - POST - http://localhost:8080/api/auth/register

<h3> QuickStart Steps </h3>

<ol> 
    <li> Ensure MongoDB is downloaded on local machine </li>
    <li> Ensure Node.js is downloaded on local machine</li>
    <li> Clone This Repo</li>
</ol>

<h4> BackEnd </h4>
<ol> 
    <li> cd into backend/</li>
    <li> Run 'npm i' to download all dependencies</li>
    <li> Run 'node seed.js' to seed the data into the database</li>
    <li> Run 'npm start' to run the server</li>
</ol>

<h4> FrontEnd </h4>
<ol> 
    <li> cd into frontend/</li>
    <li> Run npm i to download all dependencies</li>
    <li> Run 'npm start' to run frontend</li>
    <li> Login User the Test account email and password</li>
</ol>





