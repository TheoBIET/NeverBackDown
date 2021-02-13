module.exports.run = (client, message, args) => {
    message.channel.send(`**For your steam id https://never-back-down.com/SteamID**`);
}

module.exports.help = {
    name: 'steamid',
    aliases: ['steam64', 'id', '64'],
    description: 'Tuto steam id 64',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}