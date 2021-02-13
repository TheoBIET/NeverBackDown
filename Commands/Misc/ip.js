const {
    MessageEmbed
} = require("discord.js")

module.exports.run = (client, message, args) => {

    let embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle('NᎬᏙᎬᎡ ᏴᎪᏟᏦ ᎠᏫᎳN | Help about commands')
        .setURL('https://store.never-back-down.com')
        .setThumbnail('https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .addFields(
            {
                name: '__What is the command for see all server?__',
                value: '1- Solo Only x2 `!solo or !solo2`\n2- Solo/Duo x2 `!duo or !duo2`\n3- Solo/Duo x3 `!duox3 or !duo3`\n4- Duo/Trio x2 `!trio or !trio2`\n5- Duo/Trio x3 `!triox3 or !trio3`'
            }
        )
        .setFooter('Never Back Down', 'https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .setTimestamp()
    message.reply(embed)
}

module.exports.help = {
    name: 'server',
    aliases: ['server', 'ip'],
    description: 'Envoie les informations des serveurs',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}