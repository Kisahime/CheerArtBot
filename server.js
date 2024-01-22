const tmi = require('tmi.js');
const OpenAI = require('openai').default;
const BadWordsFilter = require('bad-words');
require('dotenv').config();

const filter = new BadWordsFilter();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: 'okatsu_arisa',
        password: 'oauth:435ywt4yclvflikdudbe71bfkacign'
    },
    channels: ['okatsu_arisa']
});

client.connect();

client.on('cheer', async (channel, tags, message) => {
  if (!message.startsWith('!createimage')) return;

  const bitsCheered = parseInt(tags.bits, 10);

  const promptText = message.slice('!createimage'.length).trim();

  if (filter.isProfane(promptText)) {
      client.say(channel, `@${tags.username}, please avoid using inappropriate language.`);
      return;
  }

  if (bitsCheered >= 100) {
    const imageUrl = await generateImage(promptText);
    if (imageUrl) {
      client.say(channel, `@${tags.username}, your image has been created: ${imageUrl}`);
    } else {
      client.say(channel, `@${tags.username}, there was an error creating your image.`);
    }
  }

  // if (imageUrl) {
  //   client.say(channel, `@${tags.username}, your image has been created: ${imageUrl}`);
  // } else {
  //   client.say(channel, `@${tags.username}, there was an error creating your image.`);
  // }
});

async function generateImage(promptText) {
    try {
        console.log("Connecting to OpenAI...")
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: promptText,
        n: 1, // Number of images to generate
        size: "1024x1024" // Image size
      });
      // return response.data.data[0].url; // URL of the generated image
      console.log("Response from OpenAI:", response);

      if (response.data && response.data.length > 0) {
        return response.data[0].url;
      } else {
        console.error("No data found in response");
        return null;
      }
    } catch (error) {
      console.error("Error generating image:", error);
      return null;
    }
  }