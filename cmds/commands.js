require('./lib/bbys');

adminCommands = function(commandName) {
    commandName = commandName.trim();

    return twitchBby(commandName);

}
