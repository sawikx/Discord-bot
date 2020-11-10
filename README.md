# Discord-bot

This is my Discord bot which i made. 
To make the bot work you need node.js and discord.js

The following commands are available:

!help  - shows information about commands on discord

!8ball - answers questions

!draw - draws random numbers

!licz - calculator

!wyb - selects one of the ten written options e.g. "!wyb cat dog hamster" and bot choose one of the animals

!role - Users can add or delete himself from selected roles 

Update 1.1.0

Add new command !role

For it to work properly, the following data should be changed in the file:
File - RESTMethods.js
line 560 change from 10e3 to 1000 (or less)
line 586 change from 10e3 to 1000 (or less)

Update 1.1.1

fix error
