## CRUD Operation
    This is a user management API built using Node.js, Express.js, and MongoDB. CRUD makes up the basic operations of storage management known as CRUD: Create, Read, Update and delete.
    On this app we will perform on a user data.

# Prerequisites
    Before you begin, ensure you have the following installed on your machine:

* Node.js
* MongoDB
The server should be running on http://localhost:5000.

# API Endpoints

## the hosted endpoint is 
https://hng-task-2-rycz.onrender.com/api


# Create a User
* Endpoint: POST /api
* Request Body:

    {
    "name": "Grace John"
    }

* Response:

    {
        "message": "User was created successfully",
        "newUser": {
            "name": "Grace John",
            "_id": "650424abd7079b4531a56d86",
            "__v": 0
        }
    }
    
# Get a specific User

* Endpoint: GET /api/:id
    (the created user-id from the postman)

* Response:

    {
        "message": "User fetched successfully ",
        "users": {
            "_id": "650424abd7079b4531a56d86",
            "name": "Grace John",
            "__v": 0
        }
    }

# Update a User
* Endpoint: PUT /api/:id
    (the created user-id from the postman)

*    Request Body:

    {
        "name" : "Peace Mikey"
    }

    
*    Response:
    {
        "message": "User was successfully updated",
        "updatedUser": {
            "_id": "650424abd7079b4531a56d86",
            "name": "Peace Mikey",
            "__v": 0
        }
    }

#    Delete a User

* Endpoint: DELETE /api/:id
    (the created user-id from the postman)

*    Response:
    {
        "message": "User was successfully deleted",
        "user": {
            "_id": "650424abd7079b4531a56d86",
            "name": "Peace Mikey",
            "__v": 0
        }
    }
    

#    Error Handling

-    If a user is not found, the API will return a 404 status code with a relevant error message.
-    If there's a validation error in the request body, the API will return a 400 status code with a validation error message.
-   Internal server errors will return a 500 status code with an "Internal server error" message.

* for user not found
get request
* for get user after user with that particular id was deltetd

* 
{
    "message": "the user does not exist"
}