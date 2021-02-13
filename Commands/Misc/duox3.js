const {
    MessageEmbed
} = require("discord.js")

module.exports.run = (client, message, args) => {

    let embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle('NᎬᏙᎬᎡ ᏴᎪᏟᏦ ᎠᏫᎳN | Solo/Duo x3')
        .setURL('https://store.never-back-down.com')
        .setDescription('`client.connect 149.202.88.37:28017`')
        .addFields({
                name: '__When the server wipe?__',
                value: '**Monday** - FULL wipe at 18:00 (6 pm) CET (except on forced wipes)\n**Friday** - MAP wipe at 18:00 (6 pm) CET'
            }, {
                name: '__Informations about the server__',
                value: '**https://www.battlemetrics.com/servers/rust/9563569**\n**https://just-wiped.net/rust_servers/1235855**'
            },

        )
        .setFooter('Never Back Down', 'https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .setTimestamp()
    message.reply(embed)
}

module.exports.help = {
    name: 'duox3',
    aliases: ['duo3', ],
    description: 'Envoie l\'IP du serveur duo x3',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}