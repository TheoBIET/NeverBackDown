module.exports.run = (client, message, args) => {
    message.channel.send(`https://steamcommunity.com/groups/neverbackdownrust`);
}

module.exports.help = {
    name: 'steam',
    aliases: ['steam'],
    description: 'Renvoie la page steam',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}