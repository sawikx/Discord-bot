const Discord = require('discord.js');
const client = new Discord.Client();
const ar = "!"; //prefix e.g. !help, !8ball
var enter="\n";

//version bot 1.0.0
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("your title")
});

client.on("message", (message) => {
const args = message.content.slice(ar.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if (!message.content.startsWith(ar) || message.author.bot) return;
  
 switch (command){
  case '8ball'://8ball 
				var los = Math.floor(Math.random() * 16) + 1;
					switch(los){
						case 1:
              message.channel.send('Yes');
					    break;
						case 2:
              message.channel.send ('No');
							break;
						case 3:
              message.channel.send ('maybe');
							break;
						case 4:
              message.channel.send ('For sure!');
							break;
						case 5:
              message.channel.send('Certainly not!');
							break;
						case 6:
              message.channel.send('You tell me');
							break;
						case 7:
              message.channel.send('Seek the answers in your heart!');
							break;
						case 8: 
              message.channel.send('Without a doubt!');
							break;
						case 9:
              message.channel.send(' As I see it, yes');
              break;
            case 10:
              message.channel.send('It definitely is') 
            break;
            case 11:
              message.channel.send('This is definitely not the case') 
            break;
            case 12:
              message.channel.send('Concentrate, then ask again') 
            break;
            case 13:
              message.channel.send('Only God knows the answer') 
            break;
            case 14:
              message.channel.send('¯/_(ツ)_/¯');
            break;
            case 15:
              message.channel.send('I am a BOT what you expect?')
            break;
            case 16:
              message.channel.send("Signs point to yes");
            break;
            case 17:
              message.channel.send("Cannot predict now");
            break
            case 18:
              message.channel.send("My sources say no")
            break;
          default:
              message.channel.send('Now I will not say!');
							break;
          }
        
	break;
  case 'draw':	//draw a number
        let [liczbamax,liczbamin]=args;
        if(liczbamax == undefined){
			  	var los = Math.floor(Math.random() * 1000) + 0;
           message.channel.send(los);
        }
        else if(liczbamin == undefined){
          var los = Math.floor(Math.random() * liczbamax) + 0;
           message.channel.send(los);
        }
        else{
          liczbamin = parseInt(liczbamin);
          var los = Math.floor(Math.random() * liczbamax) + liczbamin;
          message.channel.send(los);
        }
	break;
  case 'licz': //calculator
        let [war1,znak,war2]=args; //war1,war2 - number / znak - sign
        war1 = parseInt(war1);
        war2 = parseInt(war2);
        if(war1==undefined){
          message.channel.send('enter the number 1');
        }
        else if(znak==undefined){
          message.channel.send('enter the + or - or * or / or ^ or v');
        }
        else if(war2==undefined){
          message.channel.send('enter the number 2');
        }
        else{
          switch(znak){
            case '-':
              var wyn=war1-war2;
              message.channel.send('the result of the subtraction '+war1+' '+znak+' '+war2+' = '+wyn);
              break;
            case '+':
              var wyn=war1+war2;
              message.channel.send('the result of the addition  '+war1+' '+znak+' '+war2+' = '+wyn);
              break;
            case '*':
              var wyn=war1*war2;
              message.channel.send('the result of the multiplication '+war1+' '+znak+' '+war2+' = '+wyn);
              break;
            case '/':
              var wyn=war1/war2;
              var resz=war1%war2;
              message.channel.send('the result of the division '+war1+' '+znak+' '+war2+' = '+wyn+' and residue '+resz);
              break;
            case '^':
              var wyn=Math.pow(war1,war2);
              message.channel.send('power '+war2+' the number '+war1+' is '+wyn)
              break;
            case 'v':
            if(war2 == 1){
                message.channel.send(' the root of '+war2+' the number '+war1+' is '+wynn);
              }
             else  if(war2 == 2){
                var wyn=Math.sqrt(war1);
                message.channel.send('the root of '+war2+' the number '+war1+' is '+wynn);
              }
              else if(war2 <= 3){
                var wynn = Math.pow(war1,1/war2)
                wynn = wynn +0.00000000000001;
                wynn=wynn.toFixed(5);
                message.channel.send('the root of '+war2+' the number '+war1+' is '+wynn);
              }
                break;
          }
        }
  break;
  case 'wyb': //random selection of items
          let[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9]=args;
          var rzecz=[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9];
          var k=0;
          for(var i=0;i<10;i++){
            if(rzecz[i]!=undefined){
              k++;
              }
            }
          var liczba1=Math.floor(Math.random() * k) + 0;
          switch (liczba1){
            case 0:
              message.channel.send(a0);
            break;
            case 1:
              message.channel.send(a1);
            break;
            case 2:
              message.channel.send(a2);
            break;
            case 3:
              message.channel.send(a3);
            break;
            case 4:
              message.channel.send(a4);
            break;
            case 5:
              message.channel.send(a5);
            break;
            case 6:
              message.channel.send(a6);
            break;
            case 7:
              message.channel.send(a7);
            break;
            case 8:
              message.channel.send(a8);
            break;
            case 9:
              message.channel.send(a9);
            break;
          }
  break;
  case 'help'://information about commands
          var he1="```";
          var css="fix"
          message.channel.send(he1+css+enter+'!command - options - what it does'+enter+""+enter+'!8ball - - answer your question'+enter+'!los - number of max, number of min (draw range) - creates random numbers'+enter+'!wyb (a b ...)- ten items max - choose one of the items'+enter+'!licz (44 + 44) -| + add | - subtracts | * multiplies | / divides | v square root | ^ power | - calculator '+enter+he1);
  break;
   }
});

client.login("Your token");
