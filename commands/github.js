async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 Calyx-MD V2*

*📂 GitHub Repository:*
https://github.com/calyxdrey18/Calyx-MD-V2

*📢 Official Channel:*
https://www.youtube.com/@CalyxDrey

*🔄 Official Telegram Channel*
https://t.me/calyx_drey_hacks

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363301940507195@newsletter',                  
                    newsletterName: 'Calyx-MD V2',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 