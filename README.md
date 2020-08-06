# Recipe-App-Backend
This RESTful API is built with nodejs, express and mongoDB. It powers project like https://github.com/EBEREGIT/Recipt-App-Frontend

## Dependencies
- [body-parser]()
- [dotenv]()
- [express]()
- [mongoose]()
- [nodemon]()

## Installation
- Clone the repo ``git clone https://github.com/EBEREGIT/Recipe-App-Backend``
- Open the project in a terminal
- Run ``npm install``
- In the ``app.js``, enter your mongoDB Atlas DB URI
- In the terminal, run ``nodemon server``

## Using Docker
- Clone the repo ``git clone https://github.com/EBEREGIT/Recipe-App-Backend``
- Open the project in a terminal
- Build the app ``docker build -t docker-node-mongo .``
- Run the app ``docker run -it -p 5000:3000 docker-node-mongo``

## Routes
- Retrieve all recipes 
> GET ``http://localhost:5000/api/recipes``

- Retrieve one recipe
> GET ``http://localhost:5000/api/recipes``

- Add a recipe
> POST ``http://localhost:5000/api/recipes``

- Update a recipe
> PUT ``http://localhost:5000/api/recipes/:id``

- Delete a recipe
> DELETE ``http://localhost:5000/api/recipes/:id``
