const Discord = require('discord.js');
const scathach = require('scathach-api')
const { nsfw } = new scathach()

exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return;
  try {
    rhentai = await nsfw.jav()
    let embed = new Discord.MessageEmbed()
      .setTitle('CROTT')
      .setColor('#985ce7')
      .setImage(rhentai.url)

    message.channel.send(embed)
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: [],
  cooldown: 1
}

exports.help = {
  name: 'jav',
  description: 'Gets a random jav pic',
  usage: 'k!jav',
  example: 'k!jav',
  hide: true
}