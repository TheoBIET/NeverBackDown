const {
    MessageEmbed
} = require("discord.js")

module.exports.run = (client, message, args) => {
    let embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle("NᎬᏙᎬᎡ ᏴᎪᏟᏦ ᎠᏫᎳN | Discord Boost")
        .setURL('https://store.never-back-down.com')
        .setThumbnail('https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .setDescription('Get access to /discord by boosting our Discord server!\n**Boosting our Discord server!**')
        .addFields({
            name: 'How to unlock the rewards',
            value: '1. Boost the server!\n2. Claim your rewards!\n3. Send your steam id to admin\n\n**Boost Rewards** include VIP (15 DAYS) and 4 Coffins for increased storage and a 1 Airdrop every 24 hours!.'
        }, )
        .setImage("https://cdn.discordapp.com/attachments/768617869839302667/810116073118629898/fnjPIn5.png")
        .setFooter('Make by ƊɑѵƊɑѵ#5517')
        .setTimestamp()
    message.channel.send('@everyone')
    message.reply(embed)
}

module.exports.help = {
    name: 'boost',
    aliases: ['nitro', 'boost', 'helpnitro'],
    description: 'Envoie un embed avec les informations concernant Discord Booster',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: true,
    args: false,
}