const { Client, GatewayIntentBits, WebhookClient, MessageAttachment, Partials, MessageCollector, MessageEmbed } = require('discord.js');
const fs = require('fs');
const { JsonDatabase } = require("wio.db");
const path = require('path');
const chalk = require('chalk');
const axios = require('axios');
const db = new JsonDatabase({ databasePath: "./database.json" });
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
    ],
    'partials': [Partials.Channel]
});

Partials.Channel; // 1


let kasa = db.get("kasa") || 0;
let para = db.get("para") || 0;

let newusername = "undefined";
let newuserpass = "undefined";
let newmafile = "undefined";
let newauthor = "undefined";

let accountarray = fs.readFileSync('accounts.txt', 'utf-8').split('\n').filter(Boolean);

client.on('ready', () => {
    console.log("Aktif!");
	setInterval(function () {
    var liste = ['WCK ❤️ Farm', '📦 Düşürülen Kasa: ' + kasa, '💸 Kazanç: $' + para.toFixed(2), '👤 Hesap: ' + accountarray.length];
    var random = Math.floor(Math.random() * liste.length);
    client.user.setActivity(liste[random], "");
    db.set("kasa", kasa);
    db.set("para", para);
}, 5 * 1000);
});

let rarecaseimage = "https://media.discordapp.net/attachments/1104397926870040617/1104396132416770098/questionmark.png"
let revolutioncaseimage = "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U/256fx198f"
let nightmarecaseimage = "https://images-ext-1.discordapp.net/external/PS3XRk6I-0QzC5GBIbEhvmrr56wEyD7MFusGTHjZqas/https/steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_30.c471a3f74a254c80754f7deec19adaf0df266e23.png"
let snakebitecaseimage = "https://images-ext-1.discordapp.net/external/3Q6jpa9l7tiUpFqy1r7hNZWs3BbFnN_PF574vuXWvSs/https/steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_28.1f6e656d8fc297c9f2b65f2c05b8552d1cc63082.png"
let recoilcaseimage = "https://images-ext-1.discordapp.net/external/Rh8hNsTcSf7RV15Quw0kQubcGmlh6aQbMsM6ErAT86c/https/steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_31.440b43f4ad3fcfe344ce63b5d8cf59cd8034ba1a.png"
let fracturecaseimage = "https://images-ext-1.discordapp.net/external/lfyLUZdULPAWN1aWXTs_m928tuZdWXDuOs-IPfzRN4w/https/steamcdn-a.akamaihd.net/apps/730/icons/econ/weapon_cases/crate_community_26.b25098af5a4285004052786e261be43dec5b89cf.png"
let wckdropfarmimage = "https://media.discordapp.net/attachments/1104382729539297300/1104386254172327967/logo.png?width=676&height=676"

let hesapismi = "undefined"
let yenihesapsayisi = "undefined"
let hesabiekleyen = "undefined"
let hesapalert = "undefined"

// drop alert

client.on('messageCreate', async message => {

    async function revolutiondropalert() {

        const dropembed = {
            title: hesapalert + ' kasa düşürdü!',
            url: "https://steamcommunity.com/market/listings/730/Revolution%20Case",
            description: '**🔰 Sahip:** <@1095093670564331731>' + '\n\n**📦 Kasa:** ' + foundcase + "\n **💵 Fiyat:** $" + foundprice,
            color: 0xb90a9d,

            thumbnail: {
                url: revolutioncaseimage,
            },

            footer: {
                text: 'wck © 2023'
            },
            timestamp: new Date()
        };

        let dropchannel = "1106973099485823007";

        client.channels.cache.get(dropchannel).send({ embeds: [dropembed] });

    }

    async function nightmaredropalert() {

        const dropembed = {
            title: hesapalert + ' kasa düşürdü!',
            url: "https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case",
            description: '**🔰 Sahip:** <@1095093670564331731>' + '\n\n**📦 Kasa:** ' + foundcase + "\n **💵 Fiyat:** $" + foundprice,
            color: 0xb90a9d,

            thumbnail: {
                url: nightmarecaseimage,
            },

            footer: {
                text: 'wck © 2023'
            },
            timestamp: new Date()
        };

        let dropchannel = "1106973099485823007";

        client.channels.cache.get(dropchannel).send({ embeds: [dropembed] });

    }

    async function snakebitedropalert() {

        const dropembed = {
            title: hesapalert + ' kasa düşürdü!',
            url: "https://steamcommunity.com/market/listings/730/Snakebite%20Case",
            description: '**🔰 Sahip:** <@1095093670564331731>' + '\n\n**📦 Kasa:** ' + foundcase + "\n **💵 Fiyat:** $" + foundprice,
            color: 0xb90a9d,

            thumbnail: {
                url: snakebitecaseimage,
            },

            footer: {
                text: 'wck © 2023'
            },
            timestamp: new Date()
        };

        let dropchannel = "1106973099485823007";

        client.channels.cache.get(dropchannel).send({ embeds: [dropembed] });

    }

    async function recoildropalert() {

        const dropembed = {
            title: hesapalert + ' kasa düşürdü!',
            url: "https://steamcommunity.com/market/listings/730/Recoil%20Case",
            description: '**🔰 Sahip:** <@1095093670564331731>' + '\n\n**📦 Kasa:** ' + foundcase + "\n **💵 Fiyat:** $" + foundprice,
            color: 0xb90a9d,

            thumbnail: {
                url: recoilcaseimage,
            },

            footer: {
                text: 'wck © 2023'
            },
            timestamp: new Date()
        };

        let dropchannel = "1106973099485823007";

        client.channels.cache.get(dropchannel).send({ embeds: [dropembed] });

    }

    async function fracturedropalert() {

        const dropembed = {
            title: hesapalert + ' kasa düşürdü!',
            url: "https://steamcommunity.com/market/listings/730/Fracture%20Case",
            description: '**🔰 Sahip:** <@1095093670564331731>' + '\n\n**📦 Kasa:** ' + foundcase + "\n **💵 Fiyat:** $" + foundprice,
            color: 0xb90a9d,

            thumbnail: {
                url: fracturecaseimage,
            },

            footer: {
                text: 'wck © 2023'
            },
            timestamp: new Date()
        };

        let dropchannel = "1106973099485823007";

        client.channels.cache.get(dropchannel).send({ embeds: [dropembed] });

    }

    async function raredropalert() {

        const dropembed = {
            title: hesapalert + ' rare kasa düşürdü!',
            description: '**🔰 Sahip:** <@1095093670564331731>' + '\n\n**📦 Kasa:** ' + foundcase + "\n **💵 Fiyat:** $" + foundprice,
            color: 0xb90a9d,

            thumbnail: {
                url: rarecaseimage,
            },

            footer: {
                text: 'wck © 2023'
            },
            timestamp: new Date()
        };

        let dropchannel = "1106973099485823007";

        client.channels.cache.get(dropchannel).send({ embeds: [dropembed] });

    }

    const priceRegex = /\*\*Price:\*\* \$([\d.]+)/;

    let foundprice = "undefined"

    if (message?.embeds[0]?.description?.match(priceRegex)) {
        console.log("detected");
        const embedfoundprice = message.embeds[0].description.match(priceRegex)[1];
        console.log("Detected price: $", embedfoundprice);
        foundprice = parseFloat(embedfoundprice);
        para = para + foundprice;
    }

    let foundaccount = accountarray.find(item => message?.embeds[0]?.title?.startsWith("[" + item + "]"));

    const channelfilter = '1102646828933066863';

    if (message.channel.id === channelfilter) {
        console.log("Account detected: " + foundaccount);
        hesapalert = foundaccount
    }


    const casearray = [

        // active drops
        "Revolution", "Dreams & Nightmares", "Snakebite", "Recoil", "Fracture",

        //rare drops
        "Prisma 2", "CS20", "Prisma", "Danger Zone", "Horizon", "Clutch", "Spectrum 2", "Operation Hydra", "Spectrum",
        "Glove", "Gamma 2", "Gamma", "Chroma 3", "Operation Wildfire", "Revolver", "Shadow", "Falchion", "Chroma 2", "Chroma",
        "Operation Vanguard Weapon", "Operation Breakout Weapon", "Huntsman Weapon", "Operation Phoenix Weapon", "Weapon Case 3",
        "Winter Offensive Weapon", "CS:GO Weapon Case 2", "Operation Bravo Case", "Weapon Case"
    ]

    const foundcase = casearray.find(item => message?.embeds[0]?.title?.includes(item));

    if (foundcase) {
        console.log("Detected case:", foundcase);
        kasa = kasa + 1;
        if (foundcase === "Revolution") {
            revolutiondropalert();
        } else if (foundcase === "Dreams & Nightmares") {
            nightmaredropalert();
        } else if (foundcase === "Snakebite") {
            snakebitedropalert();
        } else if (foundcase === "Recoil") {
            recoildropalert();
        } else if (foundcase === "Fracture") {
            fracturedropalert();
        } else {
            raredropalert();
        }
    }

    if (message.content === "testembed") {
        channelsettings();
    }

    async function channelsettings() {

        const testembed = {
            title: '[marblepsmn1] got Revolution Case',
            description: '**Price:** $2.31',
            color: 0xCC7A00,
            footer: {
                text: 'Eternity © 2023'
            },
            timestamp: new Date()
        };

        let kanal = "1102646828933066863";

        client.channels.cache.get(kanal).send({ embeds: [testembed] });
    }
	
	    if (message.content === "testembed2") {
        channelsettings2();
    }

    async function channelsettings2() {

        const testembed2 = {
            title: '[marblepsmn3] got Revolution Case',
            description: '**Price:** $2.31',
            color: 0xCC7A00,
            footer: {
                text: 'Eternity © 2023'
            },
            timestamp: new Date()
        };

        let kanal = "1102646828933066863";

        client.channels.cache.get(kanal).send({ embeds: [testembed2] });
    }

});

// acc add req

let teslim_alma = false;

const codes = fs.readFileSync('codes.txt', 'utf-8').split('\r\n').filter(Boolean);

async function authorizealert() {

    const authorizeembeed = {
        title: 'Yeni bir hesap ekleme isteği var.',
        description: '**🔰 Founder:** ' + newauthor + '\n' + '**🔰 MAFILE:** ' + newmafile + '\n\n**🔰 Username:** ' + newusername + "\n **🔰 Pass:** " + newuserpass,
        color: 0xb90a9d,

        footer: {
            text: 'wck © 2023'
        },
        timestamp: new Date()
    };

    let authorizechannel = "1104466918770999296";

    client.channels.cache.get(authorizechannel).send({ embeds: [authorizeembeed] });

}

client.on('messageCreate', async message => {

    if (!message.guild) {

        if (message.content === "w!hesapekle") {

            newauthor = message.author.username;

            if (teslim_alma === true) { 
                message.channel.send("Şu anda bir hesap ekleme işlemi zaten gerçekleştiriliyor. Lütfen bekleyin.");
                return;
            }
            teslim_alma = true;
            console.log(chalk.rgb(51, 119, 255)("[BOT] ") + chalk.rgb(230, 184, 0)(`Used w!hesapekle command`) + chalk.green(' [+]'));
            message.channel.send("**·** Doğrulama kodu satın aldın mı? | `evet/hayır`");
            const filter = (response) => {
                return ['evet', 'hayır'].includes(response.content.toLowerCase()) && response.author.id === message.author.id;
            };

            const collector = message.channel.createMessageCollector({ filter, time: 15000, max: 1 });
            collector.on('collect', (m) => {
                if (m.content === 'evet') {
                    message.channel.send("**·** Hesap eklemek için sana teslim edilen doğrulama kodunu yazmalısın.");

                    const confirmationcodecollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    confirmationcodecollector.on('collect', (confirmationcodecode) => {
                        if (codes.includes(confirmationcodecode.content)) {
                            console.log(chalk.rgb(51, 119, 255)("[BOT] ") + chalk.rgb(230, 184, 0)(`Doğrulama Kodu doğrulama işlemi`) + chalk.green(' [+]'));
                            message.channel.send("**·** Doğrulama kodun geçerli. \n**·** Bana hesabın kullanıcı adını göndermeni istiyorum.");

                            

                            const usernamecollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 60000, max: 1 });

                            usernamecollector.on('collect', (username) => {
                                console.log('Kullanıcı Adı: ' + username.content); 
                                message.channel.send("**·** Kullanıcı adınız, **" + username.content + "** olarak alındı.");
                                message.channel.send("**·** Bana hesabın şifresini göndermeni istiyorum.");
                                
                                newusername = username.content;

                                const passwordcollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 60000, max: 1 });

                                passwordcollector.on('collect', (password) => {
                                    console.log('Şifre: ' + password.content);
                                    message.channel.send("**·** Şifreniz, **" + password.content + "** olarak alındı.");
                                    message.channel.send("**·** Son olarak ise bana **mafile** dosyasını göndermeni istiyorum.");
                                   
                                    newuserpass = password.content;

                                    const mafilecollector = message.channel.createMessageCollector({
                                        filter: (response) => response.author.id === message.author.id && response.attachments.size > 0,
                                        time: 60000,
                                        max: 1
                                    });

                                    mafilecollector.on('collect', (mafile) => {

                                        

                                        const attachment = mafile.attachments.first();
                                        if (!attachment) {
                                            return console.log('Mesajda herhangi bir dosya ekli değil.');
                                        }

                                        const klasorYolu = path.resolve(__dirname, 'mafiles');
                                        const dosyaYolu = path.join(klasorYolu, attachment.name);

                                        axios({
                                            url: attachment.url,
                                            responseType: 'stream',
                                        }).then(response => {
                                            response.data.pipe(fs.createWriteStream(dosyaYolu));
                                        }).then(() => {
                                            console.log(`Dosya başarıyla indirildi ve kaydedildi: ${attachment.name}`);
                                            newmafile = attachment.name;
                                            message.channel.send("**·** Dosya başarıyla indirildi ve kaydedildi.")
                                            message.channel.send("**·** Yetkililerimiz tarafından hesap işlemi onaylandığında bir bildirim alacaksın.")

                                            authorizealert();

                                            teslim_alma = false;
                                            
                                            const index = codes.indexOf(confirmationcodecode.content);
                                            if (index > -1) {
                                                codes.splice(index, 1);
                                                fs.writeFileSync('codes.txt', codes.join('\r\n'));
                                                console.log(chalk.rgb(51, 119, 255)("[BOT] ") + chalk.rgb(230, 184, 0)(`Doğrulama kodunu kaldırma işlemi`) + chalk.green(' [+]'));
                                            }
                                        }).catch(error => {
                                            console.error('Dosya indirilirken bir hata oluştu:', error);
                                        });

                                    });

                                    mafilecollector.on('end', (collected) => {
                                        if (collected.size === 0) {
                                            message.channel.send('**·** Hesap mafile giriş eylemi zaman aşımına uğradı.\n**·** Tekrardan istek oluşturabilirsin.');
                                            teslim_alma = false;
                                        }
                                    });

                                });

                                passwordcollector.on('end', (collected) => {
                                    if (collected.size === 0) {
                                        message.channel.send('**·** Hesap şifre giriş eylemi zaman aşımına uğradı.\n**·** Tekrardan istek oluşturabilirsin.');
                                        teslim_alma = false;
                                    }
                                });

                            });

                            usernamecollector.on('end', (collected) => {
                                if (collected.size === 0) {
                                    message.channel.send('**·** Hesap kullanıcı adı giriş eylemi zaman aşımına uğradı.\n**·** Tekrardan istek oluşturabilirsin.');
                                    teslim_alma = false;
                                }
                            });

                        } else {
                            message.channel.send("**·** Ürün kodun yanlış gözüküyor. Bir sorun olduğunu düşünüyorsan yetkililere ulaşabilirsin.");
                            
                            teslim_alma = false;
                        }

                    });

                    confirmationcodecollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Hesap ekleme isteğin zaman aşımına uğradı.');
                            
                            teslim_alma = false;
                        }
                    });

                } else if (m.content === 'hayır') {

                    message.channel.send("**·** Doğrulama kodu satın almak için <@1095093670564331731> 'a ulaşabilirsin.");
                    teslim_alma = false;

                }

            });

            collector.on('end', (collected) => {
                if (collected.size === 0) {
                    message.channel.send('**·** Hesap ekleme isteğin zaman aşımına uğradı.');
                    
                    teslim_alma = false;
                }
            });
        }

    }

});

let authorizedUser = "undefined";

// acc auth
client.on('messageCreate', async message => {
    if (message.content.startsWith("w!hesapyetkilendir") && message.author.id === "1095093670564331731") { 
        hesabiekleyen = message.content.split(" ")[1]; 
        hesapismi = message.content.split(" ")[2]; 
        yenihesapsayisi = message.content.split(" ")[3]; /
        fs.appendFileSync('accounts.txt', "\n" + hesapismi, 'utf-8');
        accountarray = fs.readFileSync('accounts.txt', 'utf-8').split('\r\n').filter(Boolean);
        let accountlogschannelid = "1106973020414803998";
        let accountlogschannel = client.channels.cache.get(accountlogschannelid);
        accountlogschannel.send("<a:add:1106945674827808860> **" + hesabiekleyen + ",** yeni hesap ekledi! Toplam hesap sayısı **" + yenihesapsayisi + "** oldu**!**");
    }
});

// drop time calc
async function timeoutembedolustur() {

    const timeoutembed = {
        title: hesapismi + ' Hesabının Drop Tarihi',
        description: 'Son Drop Tarihi • ' + new Date().toLocaleString() + '\n\n Bir Sonraki Tahmini Drop Tarihi • ***' + new Date(Date.now() + (7 * 24 * 60 * 60 * 1000) + (6 * 60 * 60 * 1000)).toLocaleString() + "***\n",
        color: 0xb90a9d,
        thumbnail: {
            url: "https://media.discordapp.net/attachments/1104160260228395140/1105155725535219822/clock.png",
        },
        footer: {
            text: 'wck © 2023'
        }
    };

    
    const channel = client.channels.cache.get("1106972934599360566");
    const sentMessage = await channel.send({ embeds: [timeoutembed] });

    setTimeout(() => {

        try {
            sentMessage.delete();
        } catch (error) {
            console.error('Mesaj silinirken bir hata oluştu:', error);
        }
    }, (7 * 24 * 60 * 60 * 1000) + (6 * 60 * 60 * 1000));

}

client.login("x")