const { cpfs, ips } = require('./base');

const getAllCPF = cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g);
console.log(getAllCPF);



/* for (let i = 0; i < 300; i ++) {
  const ip = `${i}.${i}.${i}.${i}`;

  console.log(ip.match(/((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g));
} */


console.log(ips.match(/((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g));