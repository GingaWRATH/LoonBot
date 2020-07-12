readTextFile = function (file) {
    let text = fs.readFileSync("database/" + file.toLowerCase() + ".txt");
    let textToArray = text.toString().split(',');
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

/* check if JSON includes KEY / Value */
checkFileIncludes = function (file, term) {
   res = fs.readFileSync(file, 'utf8');
   return res.includes(term.toLowerCase())
}

/* Session Handling */
writeSession = function (data) {
    writeFile('database/sessions.json', data, function (err) {
        if (err) return false;
    });

    return true;
}

writeFile = function (path, data) {
    // is file empty? If so make empty array
    fs.readFile(path, function (err, response) {
        if (response == '') {
            fs.writeFile(path, '[' + JSON.stringify(data, null, 2) + ']', function (err) {
                if (err) return false;
            });
        }
    });

    fs.readFile(path, function (err, allResults) {
        if (err) return false;

        if (allResults != '') {
            response = JSON.parse(allResults);
            response = JSON.stringify(response, null, 2)
            response = response.replace("[", '');
            response = response.replace("]", '');

            allData = [response, JSON.stringify(data, null, 2)];

            // Wrap it all up
            fs.writeFile(path, '[' + allData + ']', function (err) {
                if (err) return false;
            });
        }

    });
    return true;
}