const Discord = require("discord.js");
const loglar = require("../loglar.json");
const request = require('request');
const moment = require('moment');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("KOMUTLAR LİSTESİ")
    .setColor('YELLOW')
    .addField(`👾** Sunucu Durumu:**`, '`a!mcsunucu IP`')          
    .addField('🎳** Eğlence Komutları:**', '`a!espri`, `a!rip`, `a!kralol`, `a!1vs1`, `a!wasted`, `a!yazı-tura`, `a!doğrulukcesaret`, `a!alkış`, `a!dcdekiyıkık`, `a!tutuklandın`, `a!tkm`, `a!sigarayak`, `a!aşkölçer`, `a!mesajdöndür`, `a!balıktut`, `a!spoiler`, `a!stresçarkı`, `a!manzara`, `a!atasözü`, `a!steam`, `a!ateşle`')
    .addField('🌻** Otorol Komutları:**', '`a!otorol`, `a!otorol-kanal`')
    .addField('🍀** Müzik Komutları:**', '`a!çal`')
    .addField('🍯** Yedek Komutları:**', '`a!yedek-al`, `a!yedek-yükle`')
    .addField('🎱** Davet Komutları:**', '`a!davetim`, `a!davet-giriş-kanal`, `a!davet-çıkış-kanal`, `a!davet-giriş-mesaj`, `a!davet-çıkış-mesaj`, `a!davet-ekle`, `a!davet-rol`, `a!davet-sil`')
    .addField('🌊** Seviye Komutları:**', '`a!seviye`, `a!seviye-aç`, `a!seviye-kapat`, `a!seviye-log`, `a!seviye-rol`, `a!seviye-xp`')
    .addField('🍓** Sayaç Komutları:**', '`a!sayaç-ayarla`, `a!sayaç-sıfırla`')
    .addField('🐚** Kayıt Komutları:**', '`a!kayıt`, `a!kayıt-rol`, `a!kayıt-log`, `a!kayıt-kanal`')
    .addField('🧀** Moderasyon Komutları:**', '`a!kick`, `a!oylama`, `a!reboot`, `a!ban`, `a!banlist`, `a!duyuru`, `a!çekiliş`, `a!isim`, `a!fakemesaj`, `a!uyarı`, `a!sabitle`, `a!partner`, `a!botkontrol`, `a!otorol-sistemi`, `a!sayaç-sistemi`, `a!kayıt-sistemi`, `a!seviye-sistemi`, `a!sunucu-sistemi`, `a!herkesten-rol-al`, `a!herkese-rol-ver`, `a!unbanall`, `a!serverpanel`, `a!serverpanelkaldır`, `a!ses-kanal-aç`, `a!kanal-açıklama`, `a!rol-liste`, `a!temizle`, `a!yaz`, `a!mesajat`, `a!güvenlik`, `a!rol-koruma`, `a!kanal-koruma`, `a!hgbbkanalayarla`, `a!reklam-engelleme`')
    .addField('🌍** Kullanıcı Komutları:**', '`a!hastebin` ,`a!havadurumu`, `a!report`, `a!yapımcım`, `a!ping`, `a!instagram`, `a!rastgeleşifre`, `a!ilginçbilgi`, `a!burç`, `a!emojiyükle`, `a!ping`, `a!avatar`, `a!kullanıcı-bilgi`, `a!beşiktaş`, `a!fenerbahçe`, `a!galatasaray`, `a!spotify`, `a!youtube`')
    .setThumbnail('https://i.hizliresim.com/NGb86O.png')
  
    .setFooter(`${message.author.username} | Tarafından kontrol ediliyor...`, message.author.avatarURL)
    .setImage(`http://status.mclive.eu/Sunucu%20Durumu/play.atinanw.com/25565/banner.png`); 

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
