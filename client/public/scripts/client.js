const client = {};

client.setupNavBar = () => {

    console.log('Implementér Dynamisk NavBar');

    let navBar = document.querySelector('.nav-bar');

    console.log(navBar);

}

client.init = () => {

    client.setupNavBar();

}

client.init();