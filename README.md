<p align="center"><a href="https://nodei.co/npm/discord-spam-protect"><img src="https://nodei.co/npm/discord-spam-protect.png"></a></p>

<p align="center"><img src="https://img.shields.io/npm/v/discord-spam-protect?style=for-the-badge"> <img src="https://img.shields.io/github/repo-size/CsYBot/discord-spam-protect?style=for-the-badge"> <img src="https://img.shields.io/npm/l/discord-spam-protect?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/discord-spam-protect?style=for-the-badge"> <img src="https://img.shields.io/github/contributors/CsYBot/discord-spam-protect?style=for-the-badge"> <a href="https://discord.gg/gkmwaAZQBu" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/CsYBot%20Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a></p>

# discord-spam-protect

**Javascript:**

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

Message Edit Spam Protect;
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
