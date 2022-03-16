const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Gives the credits of the bot.'),
    async execute(interaction, client) {
        const embed = new client.discord.MessageEmbed()
            .setColor('6d6ee8')
            .setDescription('Developed with the 💜 by GENERALL-CORE`')
            .setFooter(client.user.tag, client.user.avatarURL())
            .setTimestamp();
        await interaction.reply({
            embeds: [embed]
        });
    },
};