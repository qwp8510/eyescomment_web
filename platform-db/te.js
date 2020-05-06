const link = ['a','b','c','d','e','f','g','h','i'];
const length = Math.ceil(link.length/4);
function *cal() {
    for (let i=0; i<length; i++) {
        console.log(link.slice(0, 4))
        // console.log(Math.ceil(link.length/4))
        link.splice(0, 4)
        yield i;
    }
}
console.log(cal())