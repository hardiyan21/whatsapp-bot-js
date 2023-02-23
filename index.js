const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
  // console.log('QR Code', qr);
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Udah siap Masbro!');

  const number = '+6287819354522';
  const text = 'Test bot siap!';
  const chatId = number.substring(1) + '@c.us';

  client.sendMessage(chatId, text);
});

client.on('message', async (message) => {
  if (message.body == 'halo') {
    message.reply('Halo Juga!');
  }
});

client.on('disconnect', (reason) => {
  console.log('disconnect Whatsapp bot', reason);
});

client.initialize();
