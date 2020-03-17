console.log('Request data ... ');


/*
// implement with callback
setTimeout(() => {

    console.log('implement with callback');

    console.log('Preparing data ...')

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() => {
        backendData.modified = true
        console.log('Data received', backendData);
    })

}, 2000);
*/

/*
// implement with Promise
promise = new Promise((resolve, reject) => {

    console.log('implement with Promise');
    setTimeout(() => {
        console.log('Preparing data ...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData);

    })
})

promise.then((data) => {

    promiseModifing = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000);
    })
    promiseModifing.then(clientData => {
        console.log('Data received', clientData);
    })


})
*/

// or simple version of promise 

promise = new Promise((resolve, reject) => {

    console.log('implement with Promise');
    setTimeout(() => {
        console.log('Preparing data ...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData);
    })
}).then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000);
    })
}).then(clientData => {
    clientData.fromPromise = true;
    return clientData;
}).then(data => {
    console.log('Data received', data)
}).catch(err => {
    console.error('Error ', err)
}).finally(() => console.log('Finally')); // 'Finally' always execution 


//////////////////////

const sleep = ms =>
    new Promise(resolve => setTimeout(() => resolve(), ms))

sleep(2000).then(() => console.log('after 2 seconds'))
sleep(3000).then(() => console.log('after 3 seconds'))


///////////////////////
//// Promise.all
// execution by execution all promises 
Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

///////////////////////
//// Promise.race
// execution by execution the fastest promise 
Promise.race([sleep(2000), sleep(3000)]).then(() => {
    console.log('Race promises');
})


///////////////////////////

class MyPromiseClass {
    constructor(action) {
        this.value = undefined;

        function resolve(arg) {
            this.value = arg;
        }

        action(resolve.bind(this));

    }

    then(callback) {
        callback(this.value);
    }

}

const MyPromise = function(action) {

    this.value = undefined;

    function resolve(arg) {
        this.value = arg;
    }

    this.then = function(callback) {
        callback(this.value);
    }

    action(resolve.bind(this));

}

sleep(5000).then(() => {

    console.group('My promise implement')

    new MyPromise((resolve) => {
        resolve(5);
    }).then((res) => console.log(res))

    console.groupEnd();

})

sleep(5000).then(() => {

    console.group('My promise(MyPromiseClass) implement')

    new MyPromiseClass((resolve) => {
        resolve(10)
    }).then((res) => console.log(res))

    console.groupEnd();

})


////////////////////////////