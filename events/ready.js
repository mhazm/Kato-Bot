let discord = require('discord.js');

module.exports = client => {
  console.log('Tersambung.');
  client.user.setStatus('idle');

  function randomStatus() {
    let userTotal = client.guilds.cache.get("781212267236163594").memberCount;
    let status = [
      "Westmanga member",
      "type k!help",
      "Asura sama~",
      `Members : ${userTotal}`,
      'update Tono Kanri'
    ];
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], { type: 'WATCHING' });

  }; setInterval(randomStatus, 15000);

  function pengingat() {
    require('../plugin/pengingat.js')(client);
  } setInterval(pengingat, 60000);

  function mutedDuration() {
    require('../plugin/durationMute.js')(client);
  } setInterval(mutedDuration, 30000);
}