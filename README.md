

The Web appication has been developed using ASP.NET CORE MVC (BackEnd) and Angular (FrontEnd)

Unit Test Cases written on MSTest (Backend) and Karma-Jasmine (FrontEnd) - Only sample test cases added.

**Prerequisite to run the application**

  1. Visual Studio IDE
  2. NPM install - Angular has been added as part of ASP.NET Project

**Procedure to Run the application**

  1. Download the code from GitHub (master) - https://github.com/msbabu89/DOTNETCOREWithAngular/tree/master
  2. NPM Install and resolve the dependencies
  3. Build the project
  4. Run the application in any preferred browser

**UI walkthrough and Flow**

  1. Application launch will take us to Movies dashboard where list of movies will be displayed to the user
  2. Search filter option provided to search with movie title
  3. Table can be sorted on Title column
  4. Dedicated filter is provided for the movies by Language or Location (dropdown list)
  5. Click on any movie row displayed in the table to view movie details
  6. User will be redirected to Movie details page with Back & Book ticket option available
  7. Movie can be booked by clicking the button provided on the right top corner (session storage is used to save the booking details)
  8. Movie title has been highlighted in the main page movie list once the movie is booked
  9. We cannot book more than one movie
