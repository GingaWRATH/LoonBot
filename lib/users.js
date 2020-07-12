const USER_JSON_FILE = 'database/userData.json';

getUserDetails = function (username) {

    var file_content = fs.readFileSync(USER_JSON_FILE);

    var json = JSON.parse(file_content);

    return json[username];
}

storeUserName = function (username) {

    //check if exists
    if (checkFileIncludes(USER_JSON_FILE, username)) {
        return false;
    }

    const { v4: uuidv4 } = require('uuid');

    let data = {username: username.toString(), _id: uuidv4().toString()};
    return writeFile(USER_JSON_FILE, data);
}