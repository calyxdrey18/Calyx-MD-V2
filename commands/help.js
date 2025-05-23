const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || 'Calyx-MD V2'}*  
   Version: *${settings.version || '2.0.0'}*
   by ${settings.botOwner || 'CALYX DREY'}
   YT : ${global.ytch}
╚═══════════════════╝

*Available Commands:*

╔═══════════════════╗
🌐 *General Commands*:
║ ➽ .menu
║ ➽ .ping
║ ➽ .alive
║ ➽ .tts <text>
║ ➽ .owner
║ ➽ .joke
║ ➽ .quote
║ ➽ .fact
║ ➽ .weather <city>
║ ➽ .news
║ ➽ .attp <text>
║ ➽ .lyrics <song_title>
║ ➽ .8ball <question>
║ ➽ .groupinfo
║ ➽ .staff
║ ➽ .vv <reply to view-once>
║ ➽ .pair
║ ➽ .trt <text> <lang>
║ ➽ .ss <link>
╚═══════════════════╝ 

╔═══════════════════╗
👮‍ *Grp Admin Commands*:
║ ➽ .ban @user
║ ➽ .promote @user
║ ➽ .demote @user
║ ➽ .mute <minutes>
║ ➽ .unmute
║ ➽ .del
║ ➽ .kick @user
║ ➽ .warnings @user
║ ➽ .warn @user
║ ➽ .antilink
║ ➽ .antibadword
║ ➽ .clear
║ ➽ .tag <message>
║ ➽ .tagall
║ ➽ .chatbot
║ ➽ .resetlink
╚═══════════════════╝

╔═══════════════════╗
👑 *Càlyx's Commands*:
║ ➽ .mode
║ ➽ .autostatus
║ ➽ .clearsession
║ ➽ .antidelete
║ ➽ .cleartmp
║ ➽ .setpp <reply to image>
║ ➽ .autoreact
╚═══════════════════╝

╔═══════════════════╗
🎨 *Image/Sticker Commands*:
║ ➽ .blur <image>
║ ➽ .simage <reply to sticker>
║ ➽ .sticker <reply to image>
║ ➽ .tgsticker <Link>
║ ➽ .meme
║ ➽ .take <packname> 
║ ➽ .emojimix <emj1>+<emj2>
╚═══════════════════╝  

╔═══════════════════╗
🎮 *Game Commands*:
║ ➽ .tictactoe @user
║ ➽ .hangman
║ ➽ .guess <letter>
║ ➽ .trivia
║ ➽ .answer <answer>
║ ➽ .truth
║ ➽ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI Commands*:
║ ➽ .gpt <question>
║ ➽ .gemini <question>
╚═══════════════════╝

╔═══════════════════╗
🎯 *Fun Commands*:
║ ➽ .compliment @user
║ ➽ .insult @user
║ ➽ .flirt 
║ ➽ .shayari
║ ➽ .goodnight
║ ➽ .roseday
║ ➽ .character @user
║ ➽ .wasted @user
║ ➽ .ship @user
║ ➽ .simp @user
║ ➽ .stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
🔤 *Textmaker*:
║ ➽ .metallic <text>
║ ➽ .ice <text>
║ ➽ .snow <text>
║ ➽ .impressive <text>
║ ➽ .matrix <text>
║ ➽ .light <text>
║ ➽ .neon <text>
║ ➽ .devil <text>
║ ➽ .purple <text>
║ ➽ .thunder <text>
║ ➽ .leaves <text>
║ ➽ .1917 <text>
║ ➽ .arena <text>
║ ➽ .hacker <text>
║ ➽ .sand <text>
║ ➽ .blackpink <text>
║ ➽ .glitch <text>
║ ➽ .fire <text>
╚═══════════════════╝

╔═══════════════════╗
📥 *Downloader*:
║ ➽ .play <song_name>
║ ➽ .song <song_name>
║ ➽ .instagram <link>
║ ➽ .facebook <link>
║ ➽ .tiktok <link>
╚═══════════════════╝

╔═══════════════════╗
💻 *Github Commands:*
║ ➽ .git
║ ➽ .github
║ ➽ .sc
║ ➽ .script
║ ➽ .repo
╚═══════════════════╝

Join our channel for daily updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'Calyx-MD V2',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'Calyx-MD V2',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
