require('dotenv').config();
const {REST, Routes,} = require('discord.js');

const commands = [
    {
      name: 'hey',
      description: 'replies with hey!',  
    },
    {
        name: 'ping',
        description: 'pong!',  
      },
];

const rest = new REST({ version: `10` }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log(`Registrering slash commands...`);
        await rest.put( 
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID
            ),
            { body: commands }
        );
        
        console.log('Slash commands were registered successfully! ');
    }   catch (error) {
        console.log(`il y a une erreur: ${error}`);
    }
})();