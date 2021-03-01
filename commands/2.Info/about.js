const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (client.config.discord.channels.includes(message.channel.id)) return;
  try {
    let bicon = client.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
      .setColor(client.warna.kato)
      .setThumbnail(bicon)
      .addField("Nama", "Kosuke")
      .addField("Gender", "Male")
      .addField("Pemilik", "Asura")
      .addField("Bahasa", "Discord.JS dengan NodeJS")
      .addField("Motto", "Eue everytime")
      .addField("Terima Kasih Kepada", "Karen-Araragi-Master dan Kato Megumi Fanbase Server")
      .addField("Tim Pengembang", "The OwO Family dan Bot Commander Kato Megumi Fanbase")
      .setFooter("Stable Release | ManLord#3143")
      .setAuthor(message.guild.name, message.guild.iconURL())
    return message.channel.send(botembed);
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ["kosuke"],
  cooldown: 5
}

exports.help = {
  name: 'about',
  description: 'melihat tentang Kosuke',
  usage: 'k!about',
  example: 'k!about'
}