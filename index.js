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
        var msg = message.content.toLowercase();
        return msg.startsWith(text);
    }
 
    if (msw("sangwoo is gay")) {
        message.channel.send({
            files: ['./imnotgay.png']
        });
    }
    if (msw("sangwoo isn't gay") || msw("sangwoo isnt gay")) {
        message.channel.send({
            files: ['./imgay.png']
        });
    }
});

client.login(process.env.BOT_TOKEN);
