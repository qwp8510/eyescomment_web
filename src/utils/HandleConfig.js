
// function jsonReader(path, cb) {
//   fs.readFile(path, (err, fileData) => {
//     if (err) {
//       return cb & cb(err)
//     }
//     try {
//       const object = JSON.parse(fileData)
//       return cb && cb(null, object)
//     } catch(err) {
//       return cb && cb(err)
//     }
//   })
// }

export function configContent(path) {
  var fs = require('fs')
  var data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data)
}