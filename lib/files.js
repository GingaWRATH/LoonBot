const fs = require('fs');

readFile = function (file) {
    let text = fs.readFileSync("./" + file.toLowerCase() + ".txt", "utf-8");
    let textToArray = text.split(',');
    return shuffleArray(textToArray);
}

shuffleArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}


storeName = function (data) {
    // STEP 1: Reading JSON file
    fs.appendFile('bbyNames.txt', JSON.stringify(data) + '\r\n', function (err) {
        if (err) throw err;
    });
    return true;
}

greetSession = function (data) {
    fs.appendFile('greetSession.txt', JSON.stringify(data.toLowerCase()), function (err) {
        if (err) throw err;
    });
    return true;
}

checkFileIncludes = function (file, term) {
    fs.readFile(file, function (err, data) {
        if (err) throw err;
        if (data.includes(term.toLowerCase())) {

            console.log('checkFile ' + term.toLowerCase());
            return true;
        }
    })
}