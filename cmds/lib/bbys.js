require('../../helpers/bbys');

twitchBby = function(commandName) {
    if (commandName.match(/^!bby(girl|boy|wrath)\s+(.*)/g)) {
        let regexp = /^!bby(girl|boy|wrath)\s+(.*)/g;

        const commandDetails = commandName.matchAll(regexp);

        for (const match of commandDetails) {
            bbyGen = match[1];
            redeemUser = match[2];
        }

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

        let storeData = {name: redeemUser, gender: genderChoice.toLowerCase(), babyName: name.trim()};

        storeName(storeData);
        bbyDetails(redeemUser);
        return ['`Congrats! ' + redeemUser +' & Ginga have had a Baby ' + genderChoice + ' named ' + name + '!!`'];
    }
    return false;
}
