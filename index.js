fetch('https://bash20211017.herokuapp.com/')
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {

            var x = document.createElement('li');
            x.className = "list-group-item";
            x.innerHTML = element.username;
            document.getElementById('id1').appendChild(x);


        });
    })