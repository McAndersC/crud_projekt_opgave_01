
const users = {};

// Globale Stier til filer og mapper.
users.userFile = './data/users.json';

// Get Users - Her henter vi vores brugere fra vores bruger fil.
users.getUsers = (callback) => {

    let data = {'test' : 'get all users'};
    return callback(200, data);

};

module.exports = users;