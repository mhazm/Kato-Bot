const Discord = require('discord.js');
const neko = require('nekos.life')
const { nsfw } = new neko()

exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return;
  try {
    const genre = [nsfw.bJ(), nsfw.blowJob()]
    const random = genre[Math.floor(Math.random() * genre.length)];
    rhentai = await random
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
  aliases: ["bj"],
  cooldown: 1
}

exports.help = {
  name: 'blowjob',
  description: 'Gets a NSFW URL of bj(blowjob) image/gif',
  usage: 'k!blowjob',
  example: 'k!blowjob'
}