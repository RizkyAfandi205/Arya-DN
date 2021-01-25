let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082360533339]
│ • Gopay [082360533339]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282360533339
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler