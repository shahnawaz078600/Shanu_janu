module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝕊𝕙𝕒𝕙𝕟𝕒𝕨𝕒𝕫 𝕤𝕚𝕕𝕕",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100083214197291", "100083214197291"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For Priyansh", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}
