module.exports.run = (client, message, args) => {
    message.channel.send(`**__𝑺𝒘𝒊𝒕𝒄𝒉𝒊𝒏𝒈 𝒕𝒆𝒂𝒎𝒎𝒂𝒕𝒆𝒔:__** \n 𝑨 𝒕𝒆𝒂𝒎 𝒎𝒂𝒚 𝒔𝒘𝒂𝒑 𝒕𝒉𝒆𝒊𝒓 𝒎𝒆𝒎𝒃𝒆𝒓𝒔 𝒐𝒏𝒍𝒚 𝒂𝒇𝒕𝒆𝒓: 𝒓𝒆𝒎𝒐𝒗𝒊𝒏𝒈 𝒕𝒉𝒆 𝒐𝒍𝒅 𝒎𝒆𝒎𝒃𝒆𝒓'𝒔 𝒃𝒂𝒈 / 𝒄𝒍𝒆𝒂𝒓𝒊𝒏𝒈 𝒕𝒉𝒆 𝒕𝒐𝒐𝒍 𝒄𝒖𝒑𝒃𝒐𝒂𝒓𝒅 / 𝒄𝒐𝒅𝒆 𝒍𝒐𝒄𝒌𝒔 𝒂𝒓𝒆 𝒓𝒆𝒔𝒆𝒕 𝒂𝒏𝒅 𝒕𝒉𝒆 𝒐𝒍𝒅 𝒎𝒆𝒎𝒃𝒆𝒓 𝒊𝒔 𝒓𝒆𝒎𝒐𝒗𝒆𝒅 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒆𝒍𝒚. 𝒀𝒐𝒖 𝒄𝒂𝒏𝒏𝒐𝒕 𝒕𝒆𝒂𝒎 / 𝒂𝒍𝒍𝒚 𝒘𝒊𝒕𝒉 𝒐𝒕𝒉𝒆𝒓 𝒈𝒓𝒐𝒖𝒑𝒔. 𝑰𝒇 𝒚𝒐𝒖 𝒂𝒓𝒆 𝒄𝒂𝒖𝒈𝒉𝒕 𝒕𝒆𝒂𝒎𝒊𝒏𝒈 𝒊𝒏 𝒂 𝒈𝒓𝒐𝒖𝒑 𝒍𝒂𝒓𝒈𝒆𝒓 𝒕𝒉𝒂𝒕 𝒕𝒉𝒆 𝒔𝒆𝒕 𝒍𝒊𝒎𝒊𝒕 𝒐𝒇 𝒕𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒓 𝒚𝒐𝒖 𝒂𝒓𝒆 𝒑𝒍𝒂𝒚𝒊𝒏𝒈 𝒐𝒏, 𝒚𝒐𝒖 𝒘𝒊𝒍𝒍 𝒃𝒆 𝒃𝒂𝒏𝒏𝒆𝒅 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒂𝒏𝒚 𝒑𝒓𝒆𝒗𝒊𝒐𝒖𝒔 𝒘𝒂𝒓𝒏𝒊𝒏𝒈.`);
}

module.exports.help = {
    name: 'team',
    aliases: ['teammates', 'teamup'],
    description: 'Renvoie la page steam',
    cooldown: 30,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false,
}