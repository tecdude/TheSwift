const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { response } = require('express');
const ping = require('ping');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingserver')
		.setDescription('Ping your server.')
		.addStringOption(option =>
			option
				.setName('domain')
				.setDescription('Enter your IP or Domain to ping.')
				.setRequired(true)),
	async execute(interaction) {
        const ip = interaction.options.getString("domain")
        try {
            const responseTime = await pingServer(ip);
            const pinged = new EmbedBuilder()
            .setColor(0x5c95b5)
            .setTitle(`Pinged ${ip}`)
            .setDescription(`Response time from server: ${responseTime} ms.`)
            .setTimestamp()
            await interaction.reply({ embeds: [pinged] });
          } catch (error) {
            await interaction.reply(error.message);
          }
		console.log('Ping Server command - completed')
	},
};

//function to ping server
function pingServer(ip) {
    return new Promise((resolve, reject) => {
      ping.promise.probe(ip)
        .then(response => {
          if (response.alive) {
            resolve(response.time);
          } else {
            reject(new Error('Server is not responding'));
          }
        })
        .catch(error => reject(error));
    });
  }