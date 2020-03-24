# ExchangeRates

To run this application, execute the following commands:

  1. Navigate to the project root folder and run npm install to install the node modules

    ```
    $ npm install
    ```
  2. Navigate to server folder and run npm start which builds all files and starts the server

    ```
    $ npm start
    ```
  3. Open http://localhost:8102 

 At this point, you should be able to see the Demo application home page which shows the following,
  
  a. Last Updated Time(timestamp indicating the time when the rates were published by the openexchangerates api)
  b. Current USD/CAD conversion rate.
  c. Search text box which accepts currency code and filters the  table data based on it.
  d. Refresh button to fetch the latest data(https://openexchangerates.org/api/latest.json updates are for     every hour).
  e. Table view which shows the data fetched from api.
