# Botyscaphe-TG

This is yet another implimentation of Telegram Bot API. It can be used inside
JavaScript/TypeScript application, or from command line.

## How to start

Install dependency with `npm i botyscaphe-tg` command (or using package manager of your choice).

## How to use in TypeScript/JavaScript

1. Initialize bot using your bot token and secret string, if it exists

```TypeScript
import { Bot } from 'botyscaphe-tg';

const tgBot = new Bot({
  token: 'yourbottoken:1234567',
  secret: 'optional string provided as secret to BotFather',
});
```

2. Send commands and messages

```TypeScript
// Send data to Bot API.
tgBot.useMethod('sendMessage', { chat_id: <chat-id>, text: 'Hello, world!' });

```

If you use TypeScript, helpers for both arguments should be accessible, just use TypeScript
features to investigate. Also if method does not require data to send (like `getMe` or `logOut`),
second argument should be omitted.

If this library is outdated, and required method is not yet implemented, you can use this method,
but, obviously, type helpers won't work.

```TypeScript
tgBot.sendRaw('notImplementedMethod', '{"some": "data to send"}');
```

3. Listen to updates on server

```TypeScript
import http from 'https';

https.createServer(function (request, response) {
  tgBot.getFromRequest(request).then((update) => {
    // Do something with received update
    console.log(update);

    // Do not forget to send back a response
    response.writeHead(204);
    response.end();
  }).catch(console.error)
}).listen(8080);
```

## How to use from command line

1. In order to use command line tool, create and edit `.bot.json` file that should look like this:
```json
{
  "token": "yourbottoken:1234567"
}
```
Consider your token privacy by .gitignore-ing this file.

2. Run `npx botyscaphe-launch <method> [<data>]` command

```shell
$ npx botyscaphe-launch getMe
{
  .......
}

$ npx botyscaphe-launch sendMessage '{"chat_id":0,"text":"Hello, world!"}'
{
  .......
}
```

Note that data should be wrapped in single or double quotes, so similar quotes inside data must be escaped.

Either response or error from Bot API will be displayed.
