# Feed Reader Testing
This project contains a page that loads RSS feeds using the Google feed reader API. According to the documentation provided by Udacity, the page also uses the Handlebars templating library and jQuery. The Google API facilitates grabbing the feeds as a JSON object. In addition, the project contains a Jasmine spec file that is used for JavaScript unit testing to ensure that the page behaves as intended. 

## Table of Contents
- Getting Started
- Using the Page
- Built with
- Modified By

### Getting Started
To access the page, the `index.html` file can be opened in any browser.

### Using the page
- The bottom part of the page shows the results of the Jasmine spec tests. 
- Opening the page runs those tests, which shows that the page behaves as intended since there are no failures.
- The page contains a hamburger menu that is used to navigate the page. 
- There are four lists in the menu. 
- The user can click on any list, which will result in showing a number of article entreis. 
- The user can then click on any article to access it. 
 
### Built with
 - The initial HTML, CSS, and JavaScript file are provided by Udacity FEND nanodegree program. 
 - The majority of the Jasmine spec file `feedreader.js` as written by: Eyad Alshubber.
 
### Modified by
- The `app.js` file was lightly modified to be consistent with the `feedreader.js` file. 