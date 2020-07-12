babyWRATH = function (gender) {
    let names = readTextFile(gender);
    return names[Math.floor(Math.random() * names.length)];
}

bbyDetails = function (parentName) {

    try {
        const data = fs.readFileSync('database/bbyNames.json');
        const lines = data.toString().split(/\r?\n/);
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