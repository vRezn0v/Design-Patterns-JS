var fetch = require('node-fetch')
    //const axios = require('axios')

function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userId: userId
    })
}

async function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')

    let response = await fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    return await response.json()
}

/*async function getFetch(url, params = {}) {
    let response = await axios({
        url: url,
        method: "GET",
        params: params
    })
    return await response.data
}*/

async function run() {
    let users = await getUsers()
    users.forEach(async user => {
        let posts = await getUserPosts(user.id)
        console.log(user.name, " ", posts.length)
    })
}

run()