TODO
[x] branch to new feature

[x] create a images, scripts, styles, vendors folders w/n public
    [x] add in JQ to the public/vendors folder from Desktop

[x] HTML SETUP
    [x] connect the public files to the html page
    [x] create the input for 2 seperate values(numbers) in a form
    [x] create a input b/t the two for + - / * math functions
    [x] create a submit button as '='
    [x] create h2 that will have the answer appended to it
    [x] create a ul that will have past equations appended to it 
    [x] add clear button to get rid of old answers

[x] setup client.js
    [x] on ready for JQ
    [x] add the input values from index.html into a new object in the client
        [x] create a POST that sends the object to the server and runs the GET function
    [x] Create a GET function that grabs the math back from the server 
        [x] have function call to append to DOM the equations and answers
    [x]attach clear button to a new ajax post that will clear the array

[x]Set up server.js
    [x] npm install body-parser, express, nodemon
    [x] create "start" script for nodemon
    [x] create .gitignore file and add node_modules/
    [x] create empty array where app.post will send to
        [x] call mathNums = []
    [x] set up express app
        [x] add app and port listener/express.static
    [x]create app.post that will take the object from the client and push it to an array in the server
        [x] run through the array and break down the object so I can do the math it is asking foor
            [x] create a function which does that math, call it in app.post
        [x] past answers stored in a seperate array that is not cleared when page is reloaded
    [x] create a app.post to clear storage array and ul where they are appended to         

[] Update the README.md with specific information

[] check stretch goals