const {
    MessageEmbed
} = require("discord.js")

module.exports.run = (client, message, args) => {
    let embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle("NᎬᏙᎬᎡ ᏴᎪᏟᏦ ᎠᏫᎳN | Online Store")
        .setURL('https://store.never-back-down.com')
        .setThumbnail('https://cdn.discordapp.com/attachments/768617869839302667/809976310751297551/JAA4wRe.png')
        .setDescription('Click on the link above to access the NeverBackDown online store\n**https://store.never-back-down.com\nAfter purchase, your rank will be assigned automatically within 5 minutes.**')
        .setFooter('Make by ƊɑѵƊɑѵ#5517')
        .addFields({
                name: '__About :__',
                value: '- By buying this VIP rank you will be able to redeem more gifts in our Daily Gifts system.\n- You will be able to skip queue and get special rank in-game.\n- Allows you to use the Furnacesplitter which automatically splits the ore in even stacks and also adds wood if you have some in your inventory!\n- Allows anti-FlyHack Mini/Scrap .\n- Skins allows you to have all the official skins of the game "/ skin" in the chat to access the interface\n- After 30 minutes of playing you will be able to get: Large Wood Box, Code lock, Sheet Metal Door, Cupboard, Barbeque, Furnace.\n- And more ressource gifts.\n- This needs to be in the format 76561197999227492 and NOT like STEAM_0:0:19480882.\n- We occasionally also accept PaySafeCard, Steam-Giftcards & Skins as a payment method!\n- If you want to buy VIP to support Never Back Down, please use this link:'
            }

        )
        .setImage('https://cdn.discordapp.com/attachments/768617869839302667/810135340085411840/unknown.png.png')
        .setTimestamp()
    message.channel.send('@everyone')
    message.reply(embed)
}

module.exports.help = {
    name: 'shop',
    aliases: ['shop', 'store'],
    description: 'Envoie un embed avec les informations de la boutique',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: true,
    args: false,
}