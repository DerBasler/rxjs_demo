// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.2/rxjs.umd.js
// no more obserable
// const Rx = rxjs;

// const observable = Rx.Observable.create( observer => {
//     observer.next( 'hello' )
//     observer.next( 'world' )
// })

// observable.subscribe(val => print(val))


// //anything
// const mashup = Rx.Observable.of('anything', ['you', 'want'], 23, true, {cool: 'stuff'})
// mashup.subscribe(val => console.log( val ))



// //from the dom
// const clicks = Rx.Observable.fromEvent(document, 'click')
// clicks.subscribe(click => console.log(click))


// //promise
// const promise = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         resolve('resolved!')
//     }, 1000)
// }); 
// const obsvPromise = Rx.Observable.fromPromise(promise)
// obsvPromise.subscribe(result => print(result) ) 


// //timer
// const timer = Rx.Observable.timer(1000)
// timer.subscribe(done => print('ding!!!'))


// //inerval
// const interval = Rx.Observable.interval(1000)
// interval.subscribe(i => print( i ))




// //UNSUB

// //finite
// const timer = Rx.Observable.timer(1000);
// timer
//   .finally(() => print('All done!'))
//   .subscribe()


// //infinit
// const interval = Rx.Observable.interval(1000);
// interval
//   .finally(()  => print('All done!'))
//   .subscribe(x => print(x))
// //   const subscription = interval.subscribe()
// //   subscription.unsubscribe()





// // HOT & COLD
// // Cold Observables start emitting or creating values only when the subscription starts, like a typical YouTube video. Each subscriber will see the same sequence (or pattern) of events from start to finish.
// // Hot Observables are always being updated with new values, like a live stream on YouTube. When you subscribe you start with the most recent value and only see future changes.


// //Cold
// const cold = Rx.Observable.create( (observer) => {
//     observer.next( Math.random() )
// });

// cold.subscribe(a => print(`Subscriber A: ${a}`))
// cold.subscribe(b => print(`Subscriber B: ${b}`))


// //hot
// const x = Math.random()

// const hot = Rx.Observable.create( observer => {
//   observer.next( x )
// });

// hot.subscribe(a => print(`Subscriber A: ${a}`))
// hot.subscribe(b => print(`Subscriber B: ${b}`))


// //cold -> hot
// const cold = Rx.Observable.create( (observer) => {
//     observer.next( Math.random() )
// })
// const hot = cold.publish()
// hot.subscribe(a => print(`Subscriber A: {a}`))
// hot.subscribe(b => print(`Subscriber B: {b}`))
// hot.connect()





// //ARRAY STUFF

// //map
// const numbers = Rx.Observable.from([10, 100, 1000]);
// numbers
//   .map(num => num*2 )
//   .subscribe(x => print(x))

// //do -- debugg 
// const names = Rx.Observable.of('James', 'Bond')
// names
//   .do(name  => print('original value', name) )
//   .map(name => name.toUpperCase() )
//   .do(name  => print('uppercase value', name) )
//   .subscribe()



//   //filter
//   const tweet = Rx.Observable.of(['@asdf','@fg','@asdf2'])
//   tweet
//     .filter(tweet => tweet == '@fg' )
//     .subscribe()

//     //others
//     // .first()
//     // .last()
//     //Scan == reduce

// //Debounce  & Throttle 
// const mouseEvents = Rx.Observable.fromEvent(document, 'mousemove')
// // Throttle - Give me the first value, then wait X time.
// mouseEvents
//   .throttleTime(1000)
//   .subscribe()


// //   Debounce - Wait X time, then give me the last value.
// mouseEvents
//   .debounceTime(1000)
//   .subscribe()


//SwitchMap - Get value from Observable A, then emit Observable B
const clicks = Rx.Observable.fromEvent(document, 'click')

clicks.switchMap(click => {
    return Rx.Observable.interval(500)
})
.subscribe(i => print(i))












function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}