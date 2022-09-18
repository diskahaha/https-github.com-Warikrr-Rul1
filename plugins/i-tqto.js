/**
* Kalo Eror Tqto nya Perbaiki aja
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { conn, usedPrefix }) => {

    conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
 *BIG THANKS*
Nurutomo: 
https://github.com/Nurutomo
Istikmal: 
https://github.com/BochilGaming
Ariffb: 
https://github.com/Ariffb25
Aguz Familia:
https://github.com/FokusDotId
Amelia Lisa:
https://github.com/Ameliascrf

\`\`\`${conn.user.name}\`\`\`
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: false
      }}}}}}, {})
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
