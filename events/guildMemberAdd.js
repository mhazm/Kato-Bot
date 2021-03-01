module.exports = (client, member) => {
    if (member.guild.id === "781212267236163594") {
        client.channels.cache.get('781212267236163598').send(
            `Hai ${member.user}, Selamat Datang di Server ${member.guild.name}`
        )
    }


}