const a = '```'

exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
╭▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╮
┃ ❥─┯─SOBRE USUÁRIO──╝
┃ □╭╯ v6.0
┃ □┊✧ུNome : *${pushname}*
┃ □┊✧ུNúmero : *wa.me/${sender.split("@")[0]}*
┃ □┊✧ུDinheiro : R$ *${uangku}*
┃ □┊✧ུXP : *${getLevelingXp(sender)}/${reqXp}*
┃ □┊✧ུLevel : *{getLevelingLevel(sender)}*
┃ □┊✧ུPatente : *${role}*
╰▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔❁ཻུ۪۪⸙͎


 ----🔰 ${a}❏MENU CRIADOR${a} 🔰-----
●┊➳ ${a}╿•${prefix}sticker${a}
●┊➳ ${a}╿•${prefix}quotemaker${a}
●┊➳ ${a}╿•${prefix}qrcode${a}
●┊➳ ${a}╰•${prefix}ttp${a}
 -----🔰 ${a}❏FUN MENU${a} 🔰-----
●┊➳ ${a}╿•${prefix}lirik${a}
●┊➳ ${a}╿•${prefix}artinama${a}
●┊➳ ${a}╿•${prefix}chord${a}
●┊➳ ${a}╿•${prefix}bisakah${a}
●┊➳ ${a}╿•${prefix}kapankah${a}
●┊➳ ${a}╿•${prefix}apakah${a}
●┊➳ ${a}╿•${prefix}rate${a}
●┊➳ ${a}╿•${prefix}slap${a}
●┊➳ ${a}╿•${prefix}tampar${a}
●┊➳ ${a}╿•${prefix}moddroid${a} *[VIP]*
●┊➳ ${a}╰•${prefix}happymod${a} *[VIP]*
 -----🔰 ${a}❏MEDIA MENU${a} 🔰-----
●┊➳ ${a}╿•${prefix}brainly${a} *[VIP]*
●┊➳ ${a}╿•${prefix}pinterest${a}
●┊➳ ${a}╿•${prefix}resepmasakan${a}
●┊➳ ${a}╿•${prefix}igstalk${a}
●┊➳ ${a}╿•${prefix}bitly${a}
●┊➳ ${a}╿•${prefix}tiktokstalk${a} *[VIP]*
●┊➳ ${a}╿•${prefix}ssweb${a}
●┊➳ ${a}╰•${prefix}kbbi${a}
 -----🔰 ${a}❏DOWNLOAD${a} 🔰-----
 ${a}╰•${prefix}joox${a} *[VIP]*
 -----🔰 ${a}❏NSFW${a} 🔰-----
●┊➳ ${a}╿•${prefix}anjing${a}
●┊➳ ${a}╿•${prefix}blowjob${a}
●┊➳ ${a}╿•${prefix}nekonime${a}
●┊➳ ${a}╿•${prefix}pokemon${a}
●┊➳ ${a}╿•${prefix}husbu${a}
●┊➳ ${a}╿•${prefix}nangis${a}
●┊➳ ${a}╿•${prefix}cium${a}
●┊➳ ${a}╿•${prefix}peluk${a}
●┊➳ ${a}╰•${prefix}ranime${a}
 -----🔰 ${a}❏LIMIT & DINHEIRO${a} 🔰-----
●┊➳ ${a}╿•${prefix}limit${a}
●┊➳ ${a}╿•${prefix}buylimit${a}
●┊➳ ${a}╿•${prefix}transfer${a}
●┊➳ ${a}╿•${prefix}dompet${a}
●┊➳ ${a}╿•${prefix}level${a}
●┊➳ ${a}╰•${prefix}giftlimit${a}
 -----🔰 ${a}❏MENU GRUPO${a} 🔰-----
●┊➳ ${a}╿•${prefix}delete${a}
●┊➳ ${a}╿•${prefix}hidetag${a}
●┊➳ ${a}╿•${prefix}blocklist${a}
●┊➳ ${a}╿•${prefix}grouplist${a}
●┊➳ ${a}╿•${prefix}level${a}
●┊➳ ${a}╿•${prefix}linkgc${a}
●┊➳ ${a}╿•${prefix}tagall${a}
●┊➳ ${a}╿•${prefix}setpp${a}
●┊➳ ${a}╿•${prefix}add${a}
●┊➳ ${a}╿•${prefix}kick${a}
●┊➳ ${a}╿•${prefix}setname${a}
●┊➳ ${a}╿•${prefix}setdesc${a}
●┊➳ ${a}╿•${prefix}demote${a}
●┊➳ ${a}╿•${prefix}promote${a}
●┊➳ ${a}╿•${prefix}listadmin${a}
●┊➳ ${a}╿•${prefix}group [buka/tutup]${a}
●┊➳ ${a}╿•${prefix}leveling [enable/disable]${a}
●┊➳ ${a}╿•${prefix}nsfw [1/0]${a}
●┊➳ ${a}╿•${prefix}simih [1/0]${a}
●┊➳ ${a}╿•${prefix}welcome [1/0]${a}
●┊➳ ${a}╿•${prefix}antilink [1/0]${a}
●┊➳ ${a}╰•${prefix}nobadword [enable/disable]${a}
 -----🔰 ${a}❏CLOUD STORAGE${a} 🔰-----
●┊➳ ${a}╿•${prefix}addsticker${a}
●┊➳ ${a}╿•${prefix}getsticker${a}
●┊➳ ${a}╿•${prefix}stickerlist${a}
●┊➳ ${a}╿•${prefix}addvideo${a}
●┊➳ ${a}╿•${prefix}getvideo${a}
●┊➳ ${a}╿•${prefix}videolist${a}
●┊➳ ${a}╿•${prefix}getimage${a}
●┊➳ ${a}╿•${prefix}addImage${a}
●┊➳ ${a}╿•${prefix}imagelist${a}
●┊➳ ${a}╿•${prefix}addaudio${a}
●┊➳ ${a}╿•${prefix}getaudio${a}
●┊➳ ${a}╰•${prefix}audiolist${a}
 -----🔰 ${a}❏PROPRIETÁRIO${a} 🔰-----
●┊➳ ${a}╿•${prefix}bc${a}
●┊➳ ${a}╿•${prefix}addbadword${a}
●┊➳ ${a}╿•${prefix}delbadword${a}
●┊➳ ${a}╿•${prefix}bcgc${a}
●┊➳ ${a}╿•${prefix}kickall${a}
●┊➳ ${a}╿•${prefix}setreply${a}
●┊➳ ${a}╿•${prefix}setprefix${a}
●┊➳ ${a}╿•${prefix}clearall${a}
●┊➳ ${a}╿•${prefix}block${a}
●┊➳ ${a}╿•${prefix}unblock${a}
●┊➳ ${a}╿•${prefix}leave${a}
●┊➳ ${a}╿•${prefix}event [1/0]${a}
●┊➳ ${a}╿•${prefix}clone${a}
●┊➳ ${a}╰•${prefix}setppbot${a}
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}

