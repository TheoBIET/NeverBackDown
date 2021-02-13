const {
    MessageEmbed
} = require("discord.js")

module.exports.run = (client, message, args) => {

    let embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle('NᎬᏙᎬᎡ ᏴᎪᏟᏦ ᎠᏫᎳN | Ꮪꭼꭱꮩꭼꭱ Ꮪꭼꭲꭲꮖnꮐ & Ꮃꮖꮲꭼ Ꮯꭹꮯꮮꭼ')
        .setURL('https://store.never-back-down.com')
        .setThumbnail('https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .addFields(
            {
                name: '__Settings__',
                value: '- 5 minutes of night \n- 2x Components/Scrap/Ressources\n- Loot Plus x3 \n- No TP - No Kits - No Homes - No Remove\n- No Pay To Win\n- Skinbox\n- Craft x2\n- Team Limit Autodetection\n- Discord Reward\n- Discord Reward\n - Steam Reward\n- Reboot every morning 6 a.m CET __(Server Optimisation)__\n- High DDOS protection __(No lags, No crash)__'
            },
            {
                name: '__Solo Only x2 | `client.connect 164.132.203.218:28021`__',
                value: '**Tuesday** - FULL wipe at 17:00 (5 pm) CET (ex on forced wipes)\n**Saturday** - MAP wipe at 17:00 (5 pm) CET\nhttps://www.battlemetrics.com/servers/rust/7016456'
            }, {
                name: '__Solo/Duo x2 | `client.connect 164.132.203.218:28015`__',
                value: '**Thursday** - FULL wipe at 19:00 (7 pm) CET (ex on forced wipes)\n**Monday** - MAP wipe at 19:00 (7 pm) CET\nhttps://www.battlemetrics.com/servers/rust/7015086'
            },
            {
                name: '__Solo/Duo x3 | `client.connect 149.202.88.37:28017`__',
                value: '**Monday** - FULL wipe at 18:00 (6 pm) CET (ex on forced wipes)\n**Friday** - MAP wipe at 18:00 (6 pm) CET\nhttps://www.battlemetrics.com/servers/rust/9563569'
            },
            {
                name: '__Duo/Trio x2 | `client.connect 164.132.203.218:28017`__',
                value: '**Wednesday** - FULL wipe at 19:00 (7 pm) CET (ex on forced wipes)\n**Sunday** - MAP wipe at 19:00 (7 pm) CET\nhttps://www.battlemetrics.com/servers/rust/7016474'
            },
            {
                name: '__Duo/Trio x3 | `client.connect 164.132.203.218:28015`__',
                value: '**Tuesday** - FULL wipe at 19:00 (7 pm) CET (ex on forced wipes)\n**Saturday** - MAP wipe at 19:00 (7 pm) CET\nhttps://www.battlemetrics.com/servers/rust/9564394'
            },
            
        )
        .setFooter('Never Back Down', 'https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .setTimestamp()
    message.reply(embed)
}

module.exports.help = {
    name: 'wipeset',
    aliases: ['setwipe'],
    description: 'Envoie les informations de WIPE',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: true,
    args: false,
}