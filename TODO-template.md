TODO
[] branch to new feature

[] create a images, scripts, styles, vendors folders w/n public
    [] add in JQ to the public/vendors folder from Desktop

[]HTML SETUP
    [] Create the input for 2 seperate values(numbers) in a form
    [] create a input b/t the two for + - / * math functions
    [] create a submit button as '='
    [] create h2 that will have the answer appended to it
    [] create a ul that will have past equations appended to it 

[]Set up server.js
    [] npm install body-parser, express, nodemon
    [] create "start" script for nodemon
    [] create .gitignore file and add node_modules/
    [] create empty array where app.post will send to
        [] call mathNums = []
    [] set up express app
        [] add app and port listener/express.static
    []create app.post that will take the object from the client and push it to an array in the server
        [] run through the array and break down the object so I can do the math it is asking foor
            [] create a function which does that math, call it in app.post
        

[] setup client.js
    [] on ready for JQ
    [] add the input values from index.html into a new object in the client
        create a POST that sends the object to the server and runs the GET function
    [] Create a GET function that grabs the math back from the server 
        [] have function call to append to DOM  

[] Update the README.md with specific information