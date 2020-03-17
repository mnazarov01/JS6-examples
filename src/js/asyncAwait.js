const delay = ms => new Promise(
    res => setTimeout(() => res(`Timeout on ${ms / 1000} second(s) end`), ms)
);

const url = 'https://jsonplaceholder.typicode.com/todos';

/*
function fetchTodos() {
    console.log('fetch todo started...');
    return delay(2000)
        .then((res) => fetch(url))
        .then(response => response.json())
}

fetchTodos()
    .then(json => console.log('Data:', json))
    .catch(err => console.err(err));
*/

async function fetchAsyncTodos() {

    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data', data);
    } catch (err) {
        console.error(err)
    } finally {
        console.log('finally');
    }

};

fetchAsyncTodos().then(() => console.log('ok man'));