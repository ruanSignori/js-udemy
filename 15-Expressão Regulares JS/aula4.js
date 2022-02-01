//                  <.+\/?>.+(<\/.+>)?

const { html} = require('./base');

const greedy = /<.+>.+<\/.+>/g;   // greedy
const non_greedy = /<.+?\/?>(.+?<\/.+?>)?/g;  // non-greed

console.log(html.match(greedy))
console.log(html.match(non_greedy));