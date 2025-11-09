module.exports = {
    name: 'help',
    description: 'shows a list of help commands',
    execute(message){
        const HelpMessage = 'Here\'s your help';
        message.channel.send(HelpMessage);
    },
};