var fetch = require('node-fetch')

async function getUsers() {
    var users = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    return await users.json()
}

async function getUserPosts(userId) {
    var posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    return await posts.json()
}

async function run() {
    let users = await getUsers()
    users.forEach(async user => {
        let posts = await getUserPosts(user.id)
        console.log(user.name, " ", posts.length)
    })
}


run()