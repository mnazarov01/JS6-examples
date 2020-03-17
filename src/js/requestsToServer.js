const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, ) => {

        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {

            //console.log(JSON.parse(xhr.response))
            //or + xhr.responseType = 'json'
            // console.log(xhr.response)

            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }

        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))

    })
}

// GET
// sendRequest('GET', requestUrl)
//     .then(console.log)
//     .catch(console.error)


// POST
// sendRequest('POST', requestUrl, {
//         name: 'Maksim',
//         age: 26
//     })
//     .then(console.log)
//     .catch(console.error)


// ============== fetch ==================

function fecthSendRequest(method, url, body = null) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        }

        return response.json().then(err => {
            const e = new Error('Something went wrong ...');
            e.data = err;
            throw e;
        })

    })
}

// GET
// fecthSendRequest('GET', requestUrl)
//     .then(console.log)
//     .catch(console.error)


// POST
fecthSendRequest('POST', requestUrl, {
        name: 'Maksim',
        age: 26
    })
    .then(console.log)
    .catch(console.error)