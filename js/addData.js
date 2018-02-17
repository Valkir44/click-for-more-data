// counter variable for change url with data
let addCounter = 1;

// my container to display data
let dataContainer = document.getElementById('info');

// put a listener to my button
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {

    // variable that contain XMLHttpRequest
    let ourRequest = new XMLHttpRequest();

    //now our XMLHttpRequest must something to do - open (1. what we want to receive(GET) or post(POST) data; 2. url)
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + addCounter + '.json');

    // now we have to make something than data is load
    ourRequest.onload = function () {

        // simple test to check
        if (ourRequest.status >= 200 && ourRequest.status < 400) {

            // parse data got from URL
            let ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log('error connection');
        }

    };
    // now we send our request to server
    ourRequest.send();
    addCounter++;
    if (addCounter > 3) {
        btn.classList.add('hide');
    }
});

// function to add HTML to the page

function renderHTML(data) {

    let htmlStr = '';

    // loops through data and we get all obj from array
    for (let i = 0; i < data.length; i++) {
        htmlStr += "<p>" + data[i].name + ' ' + data[i].species + "that likes to eat ";

        // loops obj and search keys
        for (let x = 0; x < data[i].foods.likes.length; x++) {
            if (x == 0) {
                htmlStr += data[i].foods.likes[x];
            } else {
                htmlStr += " and " + data[i].foods.likes[x];
            }
        }

        htmlStr += ' and dislikes ';

        // loops obj and search keys
        for (let x = 0; x < data[i].foods.dislikes.length; x++) {
            if (x == 0) {
                htmlStr += data[i].foods.dislikes[x];
            } else {
                htmlStr += " and " + data[i].foods.dislikes[x];
            }
        }

        htmlStr += '</p>';
    }
    // The insertAdjacentHTML method allows us to insert random HTML anywhere in the document, including between nodes!
    // The first argument tells were we want to put a text, second what content we add
    dataContainer.insertAdjacentHTML('beforeend', htmlStr);

}


