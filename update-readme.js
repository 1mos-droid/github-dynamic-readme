const fs = require('fs');
const axios = require('axios');

async function getRandomQuote() {
  try {
    // You can use any free API. Here's an example for programming quotes:
    const response = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random');
    return `"${response.data.en}" — ${response.data.author}`;
  } catch (error) {
    return `"Keep coding!" — Unknown`;
  }
}

async function updateReadme() {
  const quote = await getRandomQuote();
  const content = `# 🌟 Daily Quote\n\n> ${quote}\n\n*Updated automatically via GitHub Actions*`;
  fs.writeFileSync('README.md', content);
}

updateReadme();
