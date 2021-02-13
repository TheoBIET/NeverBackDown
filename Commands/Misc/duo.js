const {
    MessageEmbed
} = require("discord.js")

module.exports.run = (client, message, args) => {

    let embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle('NᎬᏙᎬᎡ ᏴᎪᏟᏦ ᎠᏫᎳN | Solo/Duo x2')
        .setURL('https://store.never-back-down.com')
        .setDescription('`client.connect 164.132.203.218:28015`')
        .addFields({
                name: '__When the server wipe?__',
                value: '**Thursday** - FULL wipe at 19:00 (7 pm) CET (except on forced wipes)\n**Monday** - MAP wipe at 19:00 (7 pm) CET'
            }, {
                name: '__Informations about the server__',
                value: '**https://www.battlemetrics.com/servers/rust/7015086**\n**https://just-wiped.net/rust_servers/961814**'
            },

        )
        .setFooter('Never Back Down', 'https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .setTimestamp()
    message.reply(embed)
}

module.exports.help = {
    name: 'duo',
    aliases: ['duo', 'duo2'],
    description: 'Envoie l\'IP du serveur duo x2',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}