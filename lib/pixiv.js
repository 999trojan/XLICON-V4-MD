//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗫𝗟𝗜𝗖𝗢𝗡-𝗩𝟰-𝗠𝗗  𝐁𝐎𝐓                                                //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//               ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██╗  ██╗                  //              
//                ██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║██║  ██║                  //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║███████║                  // 
//                ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝╚════██║                  // 
//               ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝      ██║                  //
//                ═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝       ╚═╝                  // 
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : XLICON-V4-MD
//  * @author : salmanytofficial
//  * @youtube : https://www.youtube.com/@s4salmanyt
//  * @description : XLICON-V4 ,A Multi-functional whatsapp user bot.
//*
//*
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: ahmmikun
//Telegram: t.me/ahmmitech
//GitHub: @salmanytofficial
//WhatsApp: +923184070915
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2024 XLICON-V3-MD.
// ⛥┌┤
// */
/*
const { URL_REGEX } = require('@whiskeysockets/baileys')
const { Pixiv } = require ( '@ibaraki-douji/pixivts')
const pixiv = new Pixiv()


async function pixivdl(query) {
	if (query.match(URL_REGEX)) {
		if (!/https:\/\/www.pixiv.net\/en\/artworks\/[0-9]+/i.test(query)) throw 'Invalid Pixiv Url'
		query = query.replace(/\D/g, '')
		let res = await pixiv.getIllustByID(query).catch(() => null)
		if (!res) throw `ID "${query}" not found :/`
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	} else {
		let res = await pixiv.getIllustsByTag(query)
		if (!res.length) throw `Tag's "${query}" not found :/`
		res = res[~~(Math.random() * res.length)].id
		res = await pixiv.getIllustByID(res)
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	}
}

module.exports = { pixivdl }
*/
