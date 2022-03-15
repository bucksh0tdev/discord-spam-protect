'use strict';
let data = [];
module.exports = function (message, details) {

return new Promise((resolve, reject) => {

if(details.bypass_users.includes(message.author.id)) return;

    if (data[message.author.id] === undefined) {
      data[message.author.id] = { MesssageNumber: 0 };
      setTimeout(() => {
          delete data[message.author.id];
      }, details.reset_timeout);
    }
    data[message.author.id].MesssageNumber += 1;

// Max Message
    if (data[message.author.id].MesssageNumber == details.max_number) {
      if (message.deletable) message.delete().catch(err => err + "1");
        message.channel.send(details.max_message);
        if(details.message_delete == true) {
            message.channel.bulkDelete(`${details.max_number + 1}`).catch(err => err + "1");
        }
        if(details.mute_open == true) {
            if(details.discordjs_version == "v12") {
                message.channel.createOverwrite(message.author, { SEND_MESSAGES: false });
            } else {
                message.channel.permissionOverwrites.create(message.author, { SEND_MESSAGES: false });
            }
        }
        delete data[message.author.id];
      return;
    }
// Max Message

/* Warning! */
    if (data[message.author.id].MesssageNumber == details.warning_number) {
      message.channel.send(details.warning_message).then(msgggg => {
          setTimeout(() => {
              msgggg.delete().catch(err => err + "1");
          }, 3000);

      })
    }

/* Warning! */





});
}
