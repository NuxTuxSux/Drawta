var getPixels = require("get-pixels")

let data

getPixels("lena.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  data = pixels
})

// capire come ottenere le "colonne"

console.log(data.shape)

data.get(400,300,1)

//////////////////////////////////////////


var zeros = require("zeros")
var savePixels = require("save-pixels")
 
//Create an image
var x = zeros([32, 32])
x.set(16, 16, 255)
 
//Save to a file
savePixels(x, "png").pipe(process.stdout)

//////////////////////////////////////////

readtar = fs.createReadStream('prova.tar')
readtar.pipe(tar.t({onentry: entry=>{console.log(entry)}}))

/////////////////////////////////////////

b = new Buffer('€').toJSON().data

c = new Buffer(b).toString('utf8')    // utf8 opzionale

Buffer.byteLenght('€','utf8')         // idem

l = [1,2,3]
l.concat([4,5,6])
