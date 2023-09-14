# HNG-Task 2- CRUD Operation

CRUD is the acronym for CREATE, READ, UPDATE and DELETE.
CRUD OPERATION	    HTTP REQUEST METHOD
Create=            POST
Read=	            GET
Update=	            PUT or PATCH
Delete=	            DELETE
## Step 1 – Create Node Express js App

1. create a project foledr 
and 
# Clone this repository
{github}(http)


3. In the intergrated terminal run npm install, this will install the modules and packages file in the root folder.
4. ``Run: npm start``


# Endpoint used include

# Create a User
`POST METHOD`
* Create a new user with name and test on post
~ it return 
http://localhost:5000/api

# Get a User
`GET METHOD`
http://localhost:5000/api/:id

# Update a User
`PUT METHOD`
http://localhost:5000/api/:id

# Delete a User
`DELETE METHOD`
http://localhost:5000/api/:id


# deployment

To deploy this API in a Production Environment, 
you can use render, heroku, AWS, but for this project i use Render.

then update the database connection URL in production environment.
App was hosted on render
* link to URL-

# Testing
ThunderClient was used to test the functionality of the CRUD operation 
# for Create:
* Go to localhost:5000/api
* under then body- jSON formate input
{
    "name": "John"
} then 
send

# for get:
* Go to localhost:5000/api/{User_id}
* under thenbody- jSON formate input
* copy the object id from the ThunderClient and add to the URL
then
send

# for Put
* Go to localhost:5000/api/{User_id}
* under the body- jSON formate input
* using the same object id from the ThunderClient and add to the URL
then
send

# for delete
* Go to localhost:5000/api/{User_id}
* under the body- jSON formate input
* using the same object id from the ThunderClient and add to the URL
then
send





