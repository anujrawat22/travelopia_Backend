# Travelopia_Backend

## Deployed Link :- https://travelopiabackend.onrender.com/

# Dependencies 
* "cors": "^2.8.5",
* "dotenv": "^16.0.3",
* "express": "^4.18.2",
* "mongoose": "^7.0.3",
* "nodemon": "^2.0.22"

# Endpoints 

* POST - /data

* GET - /data


## POST - /data

* Endpoint to add data to the Database 
> Headers.body - { name , email , destination , number_of_travellers , budget_Per_person } 
>  * name - String
>  * email - String
>  * destination - String
>  * number_of_travellers - Number
>  * budget_Per_person - Number

> Returns : res.status(201).send({ message: "Data saved sucessfully" });

> Adds data to MongoDb atlas

## GET - /data

* Endpoint to get all data from the Database 

> Returns : res.status(201).send({ message: "Form Data", Data });

> Data - All the form data from MongoDb Database

