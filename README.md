## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

1) Make the HTML
    1) make a form where users can choose numbers from 1-10
    1) make 3 forms
        1) forms should themselves have 9 options
            1) make a form for charge (1-9)
            1) make a form for mood (1-9)
            1) make a form for favorite pokemon (1-9)
    1) make one button where people can submit their choices
    1) make a name input
    1) make space for reception of the result of the three forms/button click


1) Write the JS
    1) grab element for forms
    1) grab element for placeholders
    1) grab element for input
    1) grab element for button
    


1) Style with CSS