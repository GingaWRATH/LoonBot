babyWRATH = function (gender) {
    let names = readFile(gender);
    return names[Math.floor(Math.random() * names.length)];
}

bbyDetails = function (parentName) {
    const fs = require('fs');
    try {
        const data = fs.readFileSync('database/bbyNames.txt', 'UTF-8');
        const lines = data.split(/\r?\n/);
        bbys = [];
        bbyBoys = [];
        // print all lines
        lines.forEach((line) => {
            if (line.includes(parentName)) {
                parentData = JSON.parse(line);
                bbys.push(parentData.babyName);
            }
        });

        return true;
    } catch (err) {
        console.error(err);
    }

}