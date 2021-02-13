module.exports.run = (client, message, args) => {
    message.channel.send(`**𝑪𝒂𝒏 𝑰 𝒂𝒑𝒑𝒆𝒂𝒍 𝒂 𝒃𝒂𝒏 𝒇𝒐𝒓 𝒓𝒂𝒄𝒊𝒔𝒎?\n𝑵𝒐! - 𝒃𝒂𝒏𝒔 𝒂𝒓𝒆 𝒇𝒊𝒏𝒂𝒍.**`);
}

module.exports.help = {
    name: 'racism',
    aliases: ['racism', 'racist'],
    description: 'Renvoie la page steam',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}