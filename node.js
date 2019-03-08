console.log('start')

setTimeout(function() {
    console.log('setTimeout3');
    Promise.resolve().then(function() {
        console.log('promise3')
      })
}, 0)
setTimeout(function() {
    console.log('setTimeout1');
}, 0)
setTimeout(function() {
    console.log('setTimeout2');
}, 0)



Promise.resolve().then(function() {
  console.log('promise1')
}).then(function() {
  console.log('promise2')
})

process.nextTick(() => {
    console.log('nexttick');
});

setImmediate(() => {
    console.log('immediate');
})

console.log('end')
