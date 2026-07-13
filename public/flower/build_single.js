const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

let out = html.replace('<link rel="stylesheet" href="style.css">', `<style>\n${css}\n</style>`);
out = out.replace('<script src="script.js"></script>', `<script>\n${js}\n</script>`);

// Write to the source homepage directory
fs.writeFileSync('../../homepage/index_single.html', out);
// Also save a copy here just in case
fs.writeFileSync('index_single.html', out);

console.log('Successfully bundled into index_single.html');
