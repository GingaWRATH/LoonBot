var dataStore = require('nedb')
    , db = new dataStore({ filename: './database/userData.nosql', autoload: true });

let userDetails = {};

getUserDetails = function (username) {

    var file_content = fs.readFileSync('./users.json');

    var json = JSON.parse(file_content);

    return json[username];
}

insert = function (data) {
    console.log('testInsert');
    console.log(userExists(data));
    if (this.userExists(data)) {
        db.insert({ username: data });
    }

}

userExists = function (data) {

    db.find({ username: data }, function (err, doc) {

        if(doc == "") {
            console.log(data + ' : user Not Found!');
            return false;
        }

        userDetails = doc;
        console.log(data + ' : user Found!');
        return true;
    });

}