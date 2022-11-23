const Discord = require('discord.js')
const myBot = new Discord.Client({fetchAllMembers: true, partials: ['MESSAGE', 'REACTION']});
const config = require("./config.json")
const fs = require('fs')
const fivereborn = require('fivereborn-query')

myBot.commandes = new Discord.Collection();


myBot.on("message", async message => { if(message.author.bot) return;  

  if(message.channel.id !== config.channelDarkChat) return;

    let messageArray = message.content.split(" ");
    let args = messageArray.slice(0);

    message.delete();

    let EmbedDark = new Discord.MessageEmbed()

    .setColor('#0000')
    .setAuthor('Message anonyme', config.imgDarkChat)
    .setDescription(`**${args.join(" ")}**`)
    .setThumbnail(config.imgDarkChat2)
    .setFooter("Darkchat")

    message.channel.send(EmbedDark).then(m => {})
    message.guild.channels.cache.get(config.logsIdChannel).send(`🔐 → **${message.author.username}** viens de post le message darknet suivant : **${message}**`)

});

myBot.on("message", async message => { if(message.author.bot) return;  

  if(message.channel.id !== config.channelLbc) return;

    let messageArray = message.content.split(" ");
    let args = messageArray.slice(0);

    message.delete();

    let embedLbc = new Discord.MessageEmbed()

    .setColor('#e28743')
    .setAuthor('Le bon coin', config.imgLeBonCoin)
    .setDescription(args.join(" "))
    .setFooter(`Annonce créé par ${message.author.username}`)

    message.channel.send(embedLbc).then(m => {})
});

myBot.on("message", async message => { if(message.author.bot) return;  

  if(message.channel.id !== config.channelTwitter) return;

    let messageArray = message.content.split(" ");
    let args = messageArray.slice(0);

    message.delete();

    let embedTwitter = new Discord.MessageEmbed()

    .setColor('#00acee')
    .setAuthor('Twitter', config.imgTwitter)
    .setDescription(args.join(" "))
    .setFooter(`Post created by ${message.author.username}`)

    message.channel.send(embedTwitter).then(m => {
      m.react('❤️')
      m.react('🔁')
    })
});

myBot.on("message", async message => { if(message.author.bot) return;  

  if(message.channel.id !== config.channelSuggestion) return;

    let messageArray = message.content.split(" ");
    let args = messageArray.slice(0);

    message.delete();

    let EmbedSugg = new Discord.MessageEmbed()

    .setColor('#00BCE3')
    .setAuthor(`📀 Suggestion`)
    .setDescription(`**${args.join(" ")}**`)
    .setFooter(`Suggestion créé par ${message.author.username}`)

    message.channel.send(EmbedSugg).then(m => {

      const arrow_up = message.guild.emojis.cache.find(emoji => emoji.name === config.reactionUp);
      const arrow_down = message.guild.emojis.cache.find(emoji => emoji.name === config.reactionDown);

      m.react(arrow_up)
      m.react(arrow_down)
    })
});



myBot.on('ready', () => {
  console.log(`${myBot.user.tag} Opérationnel`)
  
  myBot.user.setActivity(config.activity, {type: 'WATCHING'})
});

myBot.login(config.token)