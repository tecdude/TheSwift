const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check if the bot is online'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		sent
		interaction.editReply(`Pong! :ping_pong:\n**Roundtrip latency:** ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
		//await interaction.reply({ embeds: [pingEmbed] });
	},
};
