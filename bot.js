const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.login(process.env.TOKEN)

const choixRoles = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('À quels salons souhaites-tu avoir accès ?')
    .setDescription('Choisi en réagissant à ce message !')
    .setDescription('🐘  =>  Planet Zoo\n⚔️  =>  League of Legends\n👨‍🚀  =>  Among Us')

bot.on('guildMemberAdd', member => {
    bot.channels.fetch("772518742516957184")
            .then(channel => {
                channel.send(`<@${member.user.id}>, bienvenu(e) sur le serveur!`),
                channel.send(choixRoles)
                    .then(reaction => {
                        reaction.react('🐘'),
                        reaction.react('⚔️'),
                        reaction.react('👨‍🚀')

                        bot.on('messageReactionAdd', reaction => {
                            if(!reaction.users.cache.last().bot){
                                if(reaction.emoji.name === '🐘'){
                                    let userID = reaction.users.cache.last().id
                                    reaction.message.channel.guild.members.fetch(userID).then(membre =>{
                                        if(member.roles.cache.find(role => role.id === '772736160622444555')){
                                            reaction.message.channel.send(`<@${userID}>, vous avez déjà ce rôle.`)
                                        }
                                        else{
                                            membre.roles.add(['772736160622444555','772519024092774420'])
                                            reaction.message.channel.send(`<@${userID}>, vous avez maintenant accès aux salons Planet Zoo.`)
                                        }
                                    })
                                }
                                else if(reaction.emoji.name === '⚔️'){
                                    let userID = reaction.users.cache.last().id
                                    reaction.message.channel.guild.members.fetch(userID).then(membre =>{
                                        if(member.roles.cache.find(role => role.id === '772736183763206165')){
                                            reaction.message.channel.send(`<@${userID}>, vous avez déjà ce rôle.`)
                                        }
                                        else {
                                            membre.roles.add(['772736183763206165','772519024092774420'])
                                            reaction.message.channel.send(`<@${userID}>, vous avez maintenant accès aux salons League of Legends.`)
                                        }
                                    })
                                }
                                else if(reaction.emoji.name === '👨‍🚀'){
                                    let userID = reaction.users.cache.last().id
                                    reaction.message.channel.guild.members.fetch(userID).then(membre =>{
                                        if(member.roles.cache.find(role => role.id === '772736213068021781')){
                                            reaction.message.channel.send(`<@${userID}>, vous avez déjà ce rôle.`)
                                        }
                                        else{
                                            membre.roles.add(['772736213068021781','772519024092774420'])
                                            reaction.message.channel.send(`<@${userID}>, vous avez maintenant accès aux salons Among Us.`)
                                        }
                                    })
                                }
                            }
                        })
                    })
                setTimeout(function(){ 
                    if(member.roles.cache.find(role => role.id === '772735613501571074')){
                        member.roles.remove('772735613501571074')
                    }
                }, 15000);
                })
            .catch(console.error)
        .catch(console.error)
})

bot.on('message', message => {
    if (message.content === '!test') {
        let member = message.member
        bot.channels.fetch("772518742516957184")
            .then(channel => {
                message.reply('bienvenu(e) sur le serveur!'),
                channel.send(choixRoles)
                    .then(reaction => {
                        reaction.react('🐘'),
                        reaction.react('⚔️'),
                        reaction.react('👨‍🚀')

                        bot.on('messageReactionAdd', reaction => {
                            if(!reaction.users.cache.last().bot){
                                if(reaction.emoji.name === '🐘'){
                                    let userID = reaction.users.cache.last().id
                                    reaction.message.channel.guild.members.fetch(userID).then(membre =>{
                                        if(member.roles.cache.find(role => role.id === '772736160622444555')){
                                            reaction.message.channel.send(`<@${userID}>, vous avez déjà ce rôle.`)
                                        }
                                        else{
                                            membre.roles.add(['772736160622444555','772519024092774420'])
                                            reaction.message.channel.send(`<@${userID}>, vous avez maintenant accès aux salons Planet Zoo.`)
                                        }
                                    })
                                }
                                else if(reaction.emoji.name === '⚔️'){
                                    let userID = reaction.users.cache.last().id
                                    reaction.message.channel.guild.members.fetch(userID).then(membre =>{
                                        if(member.roles.cache.find(role => role.id === '772736183763206165')){
                                            reaction.message.channel.send(`<@${userID}>, vous avez déjà ce rôle.`)
                                        }
                                        else {
                                            membre.roles.add(['772736183763206165','772519024092774420'])
                                            reaction.message.channel.send(`<@${userID}>, vous avez maintenant accès aux salons League of Legends.`)
                                        }
                                    })
                                }
                                else if(reaction.emoji.name === '👨‍🚀'){
                                    let userID = reaction.users.cache.last().id
                                    reaction.message.channel.guild.members.fetch(userID).then(membre =>{
                                        if(member.roles.cache.find(role => role.id === '772736213068021781')){
                                            reaction.message.channel.send(`<@${userID}>, vous avez déjà ce rôle.`)
                                        }
                                        else{
                                            membre.roles.add(['772736213068021781','772519024092774420'])
                                            reaction.message.channel.send(`<@${userID}>, vous avez maintenant accès aux salons Among Us.`)
                                        }
                                    })
                                }
                            }
                        })
                    })
                setTimeout(function(){
                    if(member.roles.cache.find(role => role.id === '772735613501571074')){
                        member.roles.remove('772735613501571074')
                    }
                }, 15000);
                })
            .catch(console.error)
        .catch(console.error)
    }
})

/*function giveRoles(message){
    message.channel.send(choixRoles).then(reaction => {
        reaction.react('🐘'),
        reaction.react('⚔️'),
        reaction.react('👨‍🚀')

        const filter = (reaction, user) => {
            return ['🐘', '⚔️', '👨‍🚀'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        reaction.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                const user = message.member;

                const myGuild = bot.guilds.cache.get('714403367262355467');
                
                if (reaction.emoji.name === '🐘') {
                    const myRole = myGuild.roles.cache.find(role => role.id === '770913768724234261');
                    user.roles.add(myRole);
                    message.reply('vous avez maintenant accès aux salons Planet Zoo.');
                } else if (reaction.emoji.name === '⚔️') {
                    const myRole = myGuild.roles.cache.find(role => role.id === '771036815724642314');
                    user.roles.add(myRole);
                    message.reply('vous avez maintenant accès aux salons League of Legends.');
                } else if (reaction.emoji.name === '👨‍🚀') {
                    const myRole = myGuild.roles.cache.find(role => role.id === '771036817339711488');
                    user.roles.add(myRole);
                    message.reply('vous avez maintenant accès aux salons Among Us.');
                }
            })
            .catch(err => console.log(err));
    })
}*/

/*bot.on('message', message => {
    if (message.content === '!test') {
        message.reply('Hello !');
    }
    else if (message.content === '!perm') {
        giveRoles(message);
    }
});*/
