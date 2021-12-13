const RiveScript = require('rivescript')
const bot = new RiveScript();


let username = "local-user"; 
let botState = true; 

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

// reference API key key .env file

let bot_token = process.env.BOT_TOKEN;
let id = "hello pokedex";


//load bot
bot.loadFile("brain.rive")
    .then(botInitiated)
    .catch(loadError);

// we have to authenticate
client.login(bot_token); // ultimately we want to hid this in a .env or config gile

//adding an event handler to use a callback to confirm that bot is initiated
client.on('ready', readyDiscord);



client.on('message', message => {
    
    // what your bot will respond to
    
    let input = message.content.toLowerCase();
    let username = message.author.username; 
    
    let tokens = input.split(" ");



    if (message.channel.id == '847195139742892113' && input.startsWith(id)) {
       //let input = input.split('?');
        console.log(message.author.username);        
        bot.reply(username, input.split(id)).then(function(reply) {
            console.log("The bot says: " + reply);
            message.reply(reply);
            
          }
          );
  
	}
    
});
console.log("beep beep!, I am ready. 🤖 ");


function readyDiscord(){
    console.log('💖');
}

function botInitiated(){
    console.log("🧠 initiated!");
    bot.sortReplies();

    //set user name for bot 
    // let username = "local-user"; // what would be the logic to identify and store different users 
    // bot.reply(username, "I am " + username).then(function(reply) {
    //     console.log("The bot says: " + reply);
    //   });

}

function loadError(error, filename, lineno){
    console.error("error initiating bot " + error);
}