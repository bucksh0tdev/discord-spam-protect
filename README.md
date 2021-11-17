# discord-spam-protect
In short, you provide spam control in messages.

**Examples:**

Message Send Spam Protect;
```js
const spam = require("discord-spam-protect");

client.on("messageCreate", (message) => {
    new spam(message, {
        max_number: 5,
        warning_number: 3,
        mute_open: true,
        message_delete: true,
        reset_timeout: 4000,
        discordjs_version: "v13", // You Can v12
        warning_message: { content: "warning message" },
        max_message: { content: "You Muted" },
        bypass_users: [] // User Not Affected
    });
});
```

Message Edit Soam Protect;
```js
const spam = require("discord-spam-protect");

client.on("messageUpdate", (oldmessage, newmessage) => {
    new spam(newmessage, {
        max_number: 5,
        warning_number: 3,
        mute_open: true,
        message_delete: true,
        reset_timeout: 4000,
        discordjs_version: "v13", // You Can v12
        warning_message: { content: "warning message" },
        max_message: { content: "You Muted" },
        bypass_users: [] // User Not Affected
    });
});
```

Join My Server: https://discord.gg/gkmwaAZQBu
