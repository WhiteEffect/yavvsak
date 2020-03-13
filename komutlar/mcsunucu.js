const Discord = require('discord.js');
const request = require('request');
const moment = require('moment');
var mcPort = 25565
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if (!message.member.roles.find('name', 'Kurucu')) return message.channel.send('Üzgünüm Kurucu Olman Lazım.');
      var url = `http://mcapi.tc/?`+ args[0] + `/json`;
        let reason = args.slice(0).join(' ');
               const mca = new Discord.RichEmbed()
                .setThumbnail('https://icon-library.net/images/minecraft-icon-images/minecraft-icon-images-15.jpg')
                .setTitle(`🌀 **MC SUNUCU REKLAMI** 🌀`)
                .addField(`:interrobang:**Hata**`, `Lütfen bir IP adresi giriniz.`, true)
                .setFooter(`${message.author.username} | Tarafından kontrol ediliyor...`, message.author.avatarURL)
                .setColor("RANDOM");
    if (!args[0]) return message.channel.send(mca);
        request(url, function (err, response, body) {
            if (err) {
                console.log(err);
                const sws = new Discord.RichEmbed()
                .setThumbnail('https://media0.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif')
                .setDescription(`Sunucu bilgileri alınırken beklenmedik bir hatayla karşılaştık.`)
                .setAuthor("Hata!")
                .setFooter(`${message.author.username} | Tarafından kontrol ediliyor...`, message.author.avatarURL)
                .setColor("RANDOM");
          message.channel.send(sws)
            }
                  body = JSON.parse(body);
               var sw = new Discord.RichEmbed()
                .setThumbnail('https://icon-library.net/images/minecraft-icon-images/minecraft-icon-images-15.jpg')
                .setTitle(`🌀 **MC SUNUCU REKLAMI** 🌀`)
                  .addField(`🔮** IP Adresi**`, `${reason}`, true)
                .addField(`⚗️** Sonuç**`, `IP adresi yanlış veya sunucu kapalı!`, true)
                .setFooter(`${message.author.username} | Tarafından kontrol ediliyor...`, message.author.avatarURL)
                .setColor("RANDOM");
          if (!body.version) return message.channel.send(sw);

          if (body.version) {
                  const sw = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`🌀 MC SUNUCU REKLAMI 🌀`)
  .addField(`🔮** IP Adresi**:`, `${reason}`, true)
  .addField(`📡** Port**:`, `» ${body.port}`, true)
  .addField(`🤹** Çevrimiçi**:`, `» ${body.players}/${body.max_players}`, true)
  .addField(`📍** Versiyon**:`, `» ${body.version}`, true)
  .addField(`🎚** Protocol**:`, `» ${body.protocol}`, true)
  .addField(`🔸** Ping**:`, `» ${body.ping}`, true)
  .addField("🏄** Reklamcı**:", `» ${message.author.username}`, true)  
  .addField("🍟** Discord**:", `» Bilinmiyor.`, true)                   
  .addField("🍵** Tarih**:", `» ${moment().format("DD/MM/YYYY")}`, true)                
  .setThumbnail('https://eu.mc-api.net/v3/server/favicon/'+ reason)
  .setFooter(`${message.author.username} | Tarafından kontrol ediliyor...`, message.author.avatarURL)
  .setImage(`http://status.mclive.eu/Sunucu%20Durumu/`+ reason +`/25565/banner.png`);    
    message.channel.send(sw)
  }        
});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcsunucu', 'sunucu', 'mc'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'Minecraft sunucu bilgisini verir.',
  usage: 'sunucu <sunucu IP>'
};
   