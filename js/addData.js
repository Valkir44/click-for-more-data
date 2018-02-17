let addCounter = 1;
let dataContainer = document.getElementById('info');

let btn = document.getElementById('btn');
btn.addEventListener('click', function () {

    let ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + addCounter +'.json');

    ourRequest.onload = function () {

        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            let ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log('error connection');
        }

    };

    ourRequest.send();
    addCounter++;
    if (addCounter > 3) {
        btn.classList.add('hide');
    }
});

function renderHTML(data) {

    let htmlStr = '';

    for (let i = 0; i < data.length; i++) {
        htmlStr += "<p>" + data[i].name + ' ' + data[i].species + "that likes to eat ";
        for (let x = 0; x < data[i].foods.likes.length; x++) {
            if (x == 0) {
                htmlStr += data[i].foods.likes[x];
            }else {
                htmlStr += " and " + data[i].foods.likes[x];
            }
        }

        htmlStr += ' and dislikes ';

        for (let x = 0; x < data[i].foods.dislikes.length; x++) {
            if (x == 0) {
                htmlStr += data[i].foods.dislikes[x];
            }else {
                htmlStr += " and " + data[i].foods.dislikes[x];
            }
        }

        htmlStr += '</p>';
    }

    dataContainer.insertAdjacentHTML('beforeend', htmlStr);

}


