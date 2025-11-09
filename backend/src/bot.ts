import { Telegraf, Context } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.BOT_TOKEN;
const webAppUrl = process.env.WEBAPP_URL || 'https://your-vue-app.vercel.app';

if (!token) {
  throw new Error('BOT_TOKEN is required in .env');
}

export const bot = new Telegraf<Context>(token);

bot.start(async (ctx) => {
  await ctx.reply('Добро пожаловать в систему бронирования!', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Открыть приложение',
            web_app: { url: webAppUrl },
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

bot.launch().then(async () => {
  console.log('🤖 Telegram bot started');
});
