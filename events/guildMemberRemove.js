module.exports = (client, member) => {
    if (member.guild.id === "781212267236163594") {
        client.channels.cache.get('795999851158306816').send(
            `${member.user}, Telah keluar dari Server ${member.guild.name}`
        )
    }






}