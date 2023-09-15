CRUD Operation
This is a user management API built using Node.js, Express.js, and MongoDB. CRUD makes up the basic operations of storage management known as CRUD: Create, Read, Update and delete.
On this app we will perform on a user data.

Prerequisites
Before you begin, ensure you have the following installed on your machine:

 Node.js
 MongoDB
The server should be running on http://localhost:5000.

API Endpoints

Create a User
. Endpoint: POST /api
. Request Body:
    {
    "name": "Grace John"
    }

    Response:
    {
        "name": "Grace John",
        "_id": "650421e9c963d8c8d08db860",
        "__v": 0
    }

    Get a specific User

    Endpoint: GET /api/:id
    (the created user-id from the postman)

    Response:
    {
        "_id": "650421e9c963d8c8d08db860",
        "name": "Grace John",
        "__v": 0
    }

    Update a User
    Endpoint: PUT /api/:id
    (the created user-id from the postman)

    Request Body:
    {
        "name" : "Peace Mikey"
    }

    
    Response:
    {
        "_id": "650421e9c963d8c8d08db860",
        "name": "Peace Mikey",
        "__v": 0
    }


    Delete a User

    Endpoint: DELETE /api/:id
    (the created user-id from the postman)

    Response:
    {
        "message": "User was successfully deleted",
        "user": {
            "_id": "650421e9c963d8c8d08db860",
            "name": "Peace Mikey",
            "__v": 0
        }
    }

    Error Handling

    If a user is not found, the API will return a 404 status code with a relevant error message.
If there's a validation error in the request body, the API will return a 400 status code with a validation error message.
Internal server errors will return a 500 status code with an "Internal server error" message.