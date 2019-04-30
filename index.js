const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
    console.log("ready!");
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('531571088149446659').send("Welcome to my home, <@"+ member.id +">. Read up on the <#535339637435006999> for rules, but don't cross the line. Enjoy your stay in the basement. 💔️🔪💔");
    let role = member.guild.roles.find(r => r.name === "Basement Dweller"); 
    member.addRole(role).catch(console.error);
});

client.on('message', (message) => {
    function msw(text) {
        return message.content.startsWith(text);
    }
 
    if (msw("sangwoo is gay")) {
        message.channel.send({
            files: ['./imnotgay.png']
        }).then(console.log).catch(console.error);;
    }
    if (msw("sangwoo isn't gay") || msw("sangwoo isnt gay")) {
        message.channel.send({
            files: ['./imgay.png']
        }).then(console.log).catch(console.error);;
    }
    if (msw("is sangwoo gay")) {
        message.react('🤔').then(console.log).catch(console.error);
    }
 
    if (msw("sang-say") {
        if (message.author.id !== "125727575422009344") return;
        const args = message.content.split(" ").slice(1);
        message.channel.send(args.join(" "));
    }
});

client.login(process.env.BOT_TOKEN);
