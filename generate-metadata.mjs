import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
// Function to generate metadata for HTML based on user input
export async function generateMetadata() {
  const rl = readline.createInterface({ input, output });
  try {
    const title = await rl.question('Enter the title of your HTML page: ');
    const description = await rl.question('Enter the description: ');
    const keywords = await rl.question('Enter the keywords (comma separated): ');
    const author = await rl.question('Enter the author: ');
    const robots = await rl.question('Enter robot instructions (e.g., "index, follow"): ');
    const ogTitle = title; // Same as title
    const ogDescription = description; // Same as description
    const ogImage = await rl.question('Enter the URL of the og:image: ');
    const ogUrl = await rl.question('Enter the URL of the page: ');
    const metaTags = `
      <meta name="description" content="${description}">
      <meta name="keywords" content="${keywords}">
      <meta name="author" content="${author}">
      <meta name="robots" content="${robots}">
      <meta property="og:title" content="${ogTitle}">
      <meta property="og:description" content="${ogDescription}">
      <meta property="og:image" content="${ogImage}">
      <meta property="og:url" content="${ogUrl}">
      <title>${title}</title>
    `;
    console.log(metaTags);
  } catch (err) {
    console.error('Error reading input:', err);
  } finally {
    rl.close();
  }
}
// Check if the module is being executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateMetadata();
}