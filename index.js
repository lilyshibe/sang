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
 
 

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

if(msw("sang-eval")) {
 if (message.author.id !== "125727575422009344") return;
 try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}
 
 if (message.content.startsWith("sang-kick")) {
  if (message.author.id !== "125727575422009344") return;
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
 
 if(msw("sang-ban")) {
   if (message.author.id !== "125727575422009344") return;
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("fuck lol");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "no reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
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
 
    if (msw("sang-say")) {
        if (message.author.id !== "125727575422009344") return;
        const args = message.content.split(" ").slice(1);
        message.channel.send(args.join(" "));
    }
});

client.login(process.env.BOT_TOKEN);
