import 'babel-polyfill';
import './env';
import TelegramBot from 'node-telegram-bot-api';
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

var chatIds = [{ message_id: 123, chat: { id: 76198769 } },
{ message_id: 234, chat: { id: 112656614 } },
{ message_id: 123, chat: { id: 456 } }];
// Hello Message to 30 person in 1 min
bot.onText(/administrator-command-advertise/, (msg) => {
  console.log(msg.chat.id)
  setInterval(() => {
    chatIds.splice(0, 30).forEach((msg) => {
      const opts = {
        reply_markup: JSON.stringify({
          keyboard: [['send']],
          resize_keyboard: true,
          one_time_keyboard: true
        })
      };
      bot.sendMessage(msg.chat.id, `Hello`, opts);
    });
  }, 60000);
});
//END
//https://github.com/saeedhei
