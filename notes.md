can use .val() to get the value of a button.

client is always talking to the browser, and server is always talking to the terminal, w/ console.log at least

can use a switch/case statement in place of a switch statement that looks a lot better
   ie: const calculate = (num1, num2, operator) => {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            (etc cont through all operators)
            default:
                return 0;
        }
    }

- can also use req.body.keyName to access parts of the sent over object right away without breaking down the object first or sending it to a new array