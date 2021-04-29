# Weather App 
An easy to use weather app to quickly get to know the outside weather by city or zip code. 

## Current Use cases 

 Select a city from available cities or search for any US cities by name or zipcode and it will get the current weather details.

![Alt text](/public/current-state-apr26.png?raw=true "Optional Title")


## High Level Design

1. App is the root component and houses Search, Current Weather, HourlyWeather components.
2. The data retrieval and transformations are handled by Service and DataTransform utility classes 
3. A dedicated RESTClient util acts as transport layer to handle the AJAX communication and handle the errors. 
4. Dummy models are stored in data/ for testing; 
4. The Service can be extended as we scale 
5. Additional utilities can be bridged for other formatting needs 
6. Using only App.css for simplicity but ideally each component styling can be added in their respective CSS files 
7. Added both testing-library and Jest test cases as sample but can be improved to cover additional test scenarios. 
8. US Cities are obtained from official USPS database.


## Roadmap 

1. Cache the data for the hour 
3. Default the city based on user location 
4. Can host this site to firebase 
5. Show hourly predictions 
6. Show 10 days ahead predictions 
7. Display breaking news 
8. Display weather icons based on the current state of the weather (rain, cloud,sunny)
9. Change Fahrenheit to Celcius vice-versa 
10. Show the map of the current city cirle with latitude and longitude ranges 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Thanks 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This uses the data from https://openweathermap.org/ 