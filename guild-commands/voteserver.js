const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

//define embed
const voteEmbed = new EmbedBuilder()
	.setColor(0x265420)
	.setTitle('Vote')
	.setDescription('Thanks for supporting the server!')
	.setTimestamp()

// define links in embed
const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setURL('https://top.gg/servers/918166237652062228/vote')
            .setLabel('Top.gg')
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setLabel('Discords.com')
            .setURL('https://discords.com/servers/swift-den/upvote')
            .setStyle(ButtonStyle.Link),
    );

module.exports = {
	data: new SlashCommandBuilder()
		.setName('voteserver')
		.setDescription('Vote for the Swift Den server'),
	async execute(interaction) {
        //send embed and buttons for links
		await interaction.reply({ embeds: [voteEmbed], components: [row] });
        console.log('Vote Server command - completed')
	},
};