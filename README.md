"# Full Stack Application" 

<h1> About </h1>

<p> This is a full-stack application that uses the MERN stack - React & material UI on front end and express.js and MongoDB on backend. Authentication & authorization
middleware is run between the request / response cycle. </p>

<p> Mongoose library is used to interact with the backend and provide object document modeling (equivalent to ORM in relational database). </p>

<p> This repo contains two folders: front-end & back-end. </p>

<p> The Material UI templates can be found at: https://mui.com/getting-started/templates/ </p>
<p> React Docs can be found at: https://reactjs.org/docs/getting-started.html </p>
<p> Node.js can be downloaded at: https://nodejs.org/en/download/ </p>
<p> Express.js docs can be found at: https://expressjs.com/ </p>
<p> MongoDB can be downloaded at: https://www.mongodb.com/try/download/community </p>
<p> Mongoose ODM documentation be be viewed at: https://mongoosejs.com/ </p>

<h3> Backend Routes </h3>

The following list shows the resources available for the backend

<h4> Users Endpoint </h4>

<p> CREATE A USER (MUST BE ADMIN USER) - POST -  http://localhost:8080/api/users  </p>
<p> GET ALL USERS (MUST BE ADMIN USER)  - GET -  http://localhost:8080/api/users </p>
<p> GET A USER BY EMAIL (MUST BE ADMIN USER OR OWN ACCOUNT) - GET -  http://localhost:8080/api/users/:email </p>
<p> UPDATE A USER BY EMAIL (MUST BE ADMIN USER OR OWN ACCOUNT) - PATCH -  http://localhost:8080/api/users/:email </p>
<p> DELETE A USER BY EMAIL (MUST BE ADMIN USER OR OWN ACCOUNT) - DELETE -  http://localhost:8080/api/users/:email </p>

<h4> Homes Endpoint </h4>

<p> GET ALL HOMES - GET -  http://localhost:8080/api/homes </p>
<p> CREATE NEW HOME ENTRY - POST -  http://localhost:8080/api/homes </p>

<h4> Auth Endpoint </h4>

<p> AUTHENTICATE A USER - POST - http://localhost:8080/api/auth/token </p>
<p> REGISTER A USER - POST - http://localhost:8080/api/auth/register </p>

<h3> QuickStart Steps </h3>

<ol> 
    <li> Ensure MongoDB is downloaded on local machine </li>
    <li> Ensure Node.js is downloaded on local machine</li>
    <li> Clone This Repo</li>
</ol>

<h4> BackEnd </h4>
<ol> 
    <li> cd into backend/ in a shell</li>
    <li> Run 'npm i' to download all dependencies</li>
    <li> Run 'npm start' to run the server and initialize the model in the database</li>
    <li> stop server by running command ^C</li>
    <li> Run 'npm run seed' to seed the data into the database</li>
    <li> Run 'npm start' again to run the server and now have data</li>
</ol>

<h4> FrontEnd </h4>
<ol> 
    <li> in a separate shell cd into frontend/</li>
    <li> Run npm i to download all dependencies</li>
    <li> Run 'npm start' to run frontend</li>
    <li> Login using the admin account email and password</li>
</ol>

<h4> Logging Into App </h4>

<ol> 
    <li> To log into app ensure the database has been seeded</li>
    <li> Enter 'admin@gmail.com' into email address</li>
    <li> Enter 'password' into password field</li>
</ol>

<h4> Logging Out Of App </h4>
<ol> 
    <li> To log out of the application click the 'H' avatar in the upper right corner of app</li>
</ol>






