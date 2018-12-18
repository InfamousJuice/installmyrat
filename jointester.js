const request = require('request');

const Discord = require ('discord.js');

const Client = new Discord.Client();

const Tokens = ['NDYzMTE2NTk2NDI5MTkzMjM2.DhrucQ.W66njw5hXdrUb5g9AMbCLh9Wd5c'
,'NDYzMTE3MTUzMjAyMDc3Njk2.Dhru9g.LYQeGv8C_ke2fuF12_soYoPwtFc'
,'NDYzOTczMTczMTE3ODQ1NTE0.Dh4MMQ.TajoceKeYlmBLfTNAHrsRp6_ZpY'
,'NTIyNTE1NjU5MzYwNDM2MjM0.DvVwGQ.nsoFgd3oxPBiAZtjDHNtEPKnu1k'
,'NTIzMTgwNTcxMzg0MzQ4NzEy.DvWB_w.MuB0v_3ez_KVylLHddXgSXXHkbI'
,'NDc1ODIyMjc3Nzc1MzI3MjUy.DpgmSQ.JxF49XpVY8UWdNWZhhSwnDxoN_0'
,'NTEzNjA4MDUyMDY3MjcwNjg2.DtTSnQ.LbBbYozRTWaKkKC9dlrXdsPYk5s'
,'MzQwMjI3MTIxNTc2MTQ4OTk0.DtTbRg.-dOo8ZUk4CfpKfEZVYLblsS217g'];

Client.on('ready', () => console.log('Here are the commands !join {Invite}'));
console.log("Created by InfamousJuice and EssianTheGreat,")
console.log()
console.log("------------------------------------------------")

function Send(invite, token)
{

    this.invite = invite;
    this.token = token;

        request ({ 
            method: "POST",
            url: `https://discordapp.com/api/v7/invite/${this.invite}`,
            json: false,
            headers: {

                authorization: this.token
            }
        })


};


Client.on('message', async (msg) => {
if (msg.author.id !== `put your id here`) return;

let prefix = "!";



let messageArray = msg.content.split(/\s+/g);
let command = messageArray[0].toLowerCase();
let args = messageArray.slice(1);

if (msg.content.startsWith(prefix + "join"))
{

for (let i =0; i < Tokens.length; i++)
{

Send(`${args[0]}`, `${Tokens[i]}`);

}
}

});


Client.login("put your token here");
