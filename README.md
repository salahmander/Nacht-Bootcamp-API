# Nacht Bootcamp 
Nacht Bootcamp (Night Bootcamp) is a backend API project, a bootcamp directory app. Allowing users to search for development bootcamps or allow publishers to post new bootcamps to share with aspiring engineers. The purpose of this project was to further advance my knowledge and master Node.js, express and mongodb. What I’ve learned from this project was how to construct a real world backend RESTful API, solidify my understanding of the HTTP fundamentals, use advanced mongoose queries, implement json web tokens/ cookies authentication, take advantage of the express & mongoose middleware, gain a better understanding of API security and learn how to create documentation using postman. 

### Tech Stack
Developed using Node.js, Express and MongoDB (mongoose).
Deployed with Heroku.
Documentation created using postman and docgen.


## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

The API is live at [nacht-bootcamp](https://nacht-boocamp.herokuapp.com/)

Extensive documentation with examples [here](https://documenter.getpostman.com/view/6010540/Tz5jfgVG)
