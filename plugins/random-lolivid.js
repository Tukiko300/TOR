let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://api.zacros.my.id/asupan/loli"
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolΓ­vid)$/i
export default handler
