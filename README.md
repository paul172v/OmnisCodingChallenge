# Omnis Coding Test


## Requirements
 
 - Requires Node v20+ and (npm usually installed with Node).
 
 - Run `$ npm install` from within this directory, to install the dependencies.



 ## Challenge 1

 Populate `generateNames.js` such that it meets the criteria of the tests (defined in *generateNames.test.js*).

 You can run the tests by executing:
```$ npm run tests```
 from within this directory.

 You will need to read the code to determine what the behaviour should be.


**Note:** Some of the tests will fail due to a missing function. You will need to implement this function yourself.


 ## Challenge 2

 Run the following command, from this directory, to start a simple web server:

 ```$ npm run server```

 You should then be able to load the following URL in your web browser, to render the `omnis.html` page:
 **http://localhost:8000/challenge2/omnis.html**

 Your task is as follows:

1) When the page loads, generate 100 names, using the function you defined in Challenge 1.

2) Display these names in some kind of list format on the page.

3) Add an input field, which you can type into to filter the list of names shown.


### Extra credit

Not required, but if you have time, consider the following:

 - Style the page (*without using any frameworks*, like Bootstrap) to make it look a little nicer.

 - Add a randomly generated phone number to each person, and display this when the user clicks on their name.