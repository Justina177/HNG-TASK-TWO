## Step 1 – Create Node Express js App

1. create a project foledr and called 
 backend.

 2. create a file called server.js,  which is the entry point to our server.

3. In the backend folder in the intergrated terminal run npm init, this will create a package.json file in the root folder.

Step 2 – Install Packages which include
A. npm install express

B. npm install mongoose

c. npm install nodemon

D. npm install dotenv

* Create a .env 
(a dotenv is used to store “environment variables” AKA variables we need to configure our code environment. This can include information like is our project running in “production” mode or “developer” mode but most importantly, API and database keys. )

* Add PORT 5000,
    MONGODB=mongodb url for the project

    `PORT`: The port on which the API will run (in this case default PORT is 5000).
    `MONGODB`: the Database connection string.
# Run server
     npm start
     The Server is running locally at `http://localhost:5000`.


# Create a .gitignore file. 
This file specifies intentionally untracked files that Git should ignore. it will prevent uploading the node-module and env file to the github. 

~ Include the .env file and the node_modules in the gitignore

# Step 3 – Create a route/ Add API Endpoint

# Create a User
`POST /api`

# Get a User
`GET /api/:id`

# Update a User
`PUT /api/:id`

# Delete a User
`DELETE /api/:id`



