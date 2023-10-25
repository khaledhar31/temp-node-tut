// started operating system process
const { log } = require("console");

log('first')
setTimeout(() => {
  log('second')
},0)
log('third')
// completed and exited operating system process