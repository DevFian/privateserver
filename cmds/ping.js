const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
let ping = Date.now() - message.createdTimestamp
let embed = new Discord.RichEmbed()
.setTitle(':dragon: Patrick Heard!')
.addField('Signal :signal_strength:',`${ping}ms`, true)
        .setColor("#9A2EFE")
 .setFooter('©Beta | By: Qyto | 2018')
message.channel.send({embed})
}

exports.help = {
  name: "ping"
}
