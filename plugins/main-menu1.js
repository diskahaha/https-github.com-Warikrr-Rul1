let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.sendButtonDoc(m.chat, 'ʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ 𝕭𝖔𝖙 • Andii ༢࿔ྀ,ᴀᴋᴜ ᴅɪ ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴏʟᴇʜ ꜱᴇꜱᴇᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ 𝕭𝖔𝖙 • Andii ༢࿔ྀ,ʙᴇʟɪᴀᴜ ᴍᴀꜱɪʜ ᴘᴇᴍᴜʟᴀ ᴅᴀɴ ᴍᴀꜱɪʜ ʙᴇʟᴀᴊᴀʀ ʙᴀɴʏᴀᴋ ʜᴀʟ,ᴅᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ ʜᴀɴʏᴀ ɪɴɢɪɴ ᴛᴀᴜ ʙᴇʀʙᴀɢᴀɪ ʜᴀʟ ʏᴀɴɢ ᴀᴅᴀ ᴅɪᴅᴜɴɪᴀ ʙᴏᴛ,ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜰɪᴛᴜʀ ʙᴏᴛ,ꜱɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪʙᴀᴡᴀʜ\n\nɴᴏᴛᴇ: ʜᴀʀᴀᴘ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ꜱᴇᴄᴀʀᴀ ʙɪᴊᴀᴋ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴅɪꜱᴘᴀᴍ', data.namabot, 'ʟɪꜱᴛᴍᴇɴᴜ', '.m', fake, { contextInfo: {
externalAdReply :{
    showAdAttribution: false,
    mediaUrl: data.sc,
    mediaType: 2,
    sourceUrl: data.sc,
    title: 'Grup Bot',
    body: wm,
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


