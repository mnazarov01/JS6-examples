console.log('Start');
console.log('Start2');

window.setTimeout(function() {
    console.log('Inside timeout, after 0 seconds')
}, 0);

//setTimeout(() => console.log('insert timeout, after 5 seconds'), 5000)

console.log('End')

let t = 0
for (let i = 0; i < 100000000; i++) {
    t = i + t

}

console.log(t)

/// http://latentflip.com/
/// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif