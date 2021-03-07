# Nacht Bootcamp 
Backend API for Nacht Bootcamp application, which is a bootcamp directory website

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
