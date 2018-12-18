const discord = require("discord.js");
const randomWord = require("random-words")

const TOKEN = ['NDYzMTE2NTk2NDI5MTkzMjM2.DhrucQ.W66njw5hXdrUb5g9AMbCLh9Wd5c'
,'NDYzMTE3MTUzMjAyMDc3Njk2.Dhru9g.LYQeGv8C_ke2fuF12_soYoPwtFc'
,'NDYzOTczMTczMTE3ODQ1NTE0.Dh4MMQ.TajoceKeYlmBLfTNAHrsRp6_ZpY'
,'NTIyNTE1NjU5MzYwNDM2MjM0.DvVwGQ.nsoFgd3oxPBiAZtjDHNtEPKnu1k'
,'NTIzMTgwNTcxMzg0MzQ4NzEy.DvWB_w.MuB0v_3ez_KVylLHddXgSXXHkbI'
,'NDc1ODIyMjc3Nzc1MzI3MjUy.DpgmSQ.JxF49XpVY8UWdNWZhhSwnDxoN_0'
,'NTEzNjA4MDUyMDY3MjcwNjg2.DtTSnQ.LbBbYozRTWaKkKC9dlrXdsPYk5s'
,'MzQwMjI3MTIxNTc2MTQ4OTk0.DtTbRg.-dOo8ZUk4CfpKfEZVYLblsS217g'
,'put your token here']; // Tokens go here, separate them with commas(,) and make sure they are within double quotes or single quotes("" / '')

var bots = [];
var i = 0;

console.log("Created by InfamousJuice and EssianTheGreat")
console.log()
console.log("Here are the commands !join {Invite}, .start and .stop")
console.log("-----------------------------------------------------------")

TOKEN.forEach(()=>{
    var bot = new discord.Client();
    bots.push(bot);
});

var spam = [];

var phrases = ["thing1","another one","keep adding more","there's no limit"];

function startspam()
{
    console.log("Spam Attack Starting");
    bots.forEach(bot=>{
        var server = bot.guilds.get("put the serevr id here"); // Server ID
        var chan = new discord.TextChannel(server,{"id":"put the channel id here"}); //Channel ID
        spam.push(bot.setInterval(()=>
        {
            chan.send(randomWord()).then(msg=>{ // Sticking with randomwords.
                console.log(msg.content);
            });
 
        },500));
    });
}


function stopspam()
{
    i = 0;
    bots.forEach(bot=>{
        bot.clearTimeout(spam[i]);
        i++
    });

    console.log("Spam Attack Stopped")
}

bots.forEach(bot=>{
    bot.on("ready",()=>{
        console.log("Bot joined,");
    });
});

bots.forEach(bot=>{
    bot.on("message",msg=>{
        if(msg.author.id == bot.user.id)
        {
            if(msg.content.toLowerCase() == ".start")
            {
                startspam()
            }
            else if(msg.content.toLowerCase() == ".stop")
            {
                stopspam()
            }
        }
    });
});

i = 0;
bots.forEach(bot=>{
    bot.login(TOKEN[i]);
    i++;
});
