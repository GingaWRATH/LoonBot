require('../../helpers/bbys');

twitchBby = function(commandName) {

    if (commandName.match(/^!bby(girl|boy|wrath)\s+(.*)/g)) {
        let regexp = /^!bby(girl|boy|wrath)\s+(.*)/g;

        const commandDetails = commandName.matchAll(regexp);

        for (const match of commandDetails) {
            bbyGen = match[1];
            redeemUser = match[2];
        }

        // Store User to userData if not exist
        storeUserName(redeemUser.toLowerCase());

        switch (bbyGen) {
            case 'girl':
                genderChoice = 'Girl';
                break;
            case 'boy':
                genderChoice = 'Boy';
                break;
            default:
                genders = ['Boy', 'Girl'];
                genderChoice = genders[Math.floor(Math.random() * genders.length)];
        }

        const name = babyWRATH(genderChoice);

        const { v4: uuidv4 } = require('uuid');

        let storeData = { username: redeemUser, gender: genderChoice.toLowerCase(), babyName: name.trim(), _id: uuidv4().toString() };

        writeFile('database/bbyNames.json', storeData);
        //bbyDetails(redeemUser);
        return ['`Congrats! ' + redeemUser +' & Ginga have had a Baby ' + genderChoice + ' named ' + name + '!!`'];
    }
    return false;
}
