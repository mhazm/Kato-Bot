const Discord = require('discord.js');
const neko = require('nekos.life')
const { nsfw } = new neko()

exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return;
  try {
    rhentai = await nsfw.futanari()
    let embed = new Discord.MessageEmbed()
      .setTitle('( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)')
      .setColor('#985ce7')
      .setImage(rhentai.url)

    message.channel.send(embed)
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ['futa'],
  cooldown: 1
}

exports.help = {
  name: 'futanari',
  description: 'Gets a NSFW URL of an/a image/gif of futa',
  usage: 'k!futanari',
  example: 'k!futanari'
}