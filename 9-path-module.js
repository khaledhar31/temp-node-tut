const { log } = require('console')
const path = require('path')
log(path.sep)

const filePath = path.join('/contect','subfolder','text.txt')
log(filePath)

const base = path.basename(filePath)
log(base)

const abolute = path.resolve(__dirname,'content','subfolder','text.txt')
log(abolute)