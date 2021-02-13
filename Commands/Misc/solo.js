const {
    MessageEmbed
} = require("discord.js")

module.exports.run = (client, message, args) => {

    let embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle('NᎬᏙᎬᎡ ᏴᎪᏟᏦ ᎠᏫᎳN | Solo x2')
        .setURL('https://store.never-back-down.com')
        .setDescription('`client.connect:164.132.203.218:28021`')
        .addFields({
                name: '__When the server wipe?__',
                value: '**Tuesday** - FULL wipe at 17:00 (5 pm) CET (except on forced wipes)\n**Saturday** - MAP wipe at 17:00 (5 pm) CET'
            }, {
                name: '__Informations about the server__',
                value: '**https://www.battlemetrics.com/servers/rust/7016456**\n**https://just-wiped.net/rust_servers/962033**'
            },

        )
        .setFooter('Never Back Down', 'https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .setTimestamp()
    message.reply(embed)
}

module.exports.help = {
    name: 'solo',
    aliases: ['solo', 'solo2'],
    description: 'Envoie l\'IP du serveur solo',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}