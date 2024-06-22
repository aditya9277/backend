const express = require('express')
require('dotenv').config()
const app = express()

const githubdata = {
    "login": "aditya9277",
    "id": 88902527,
    "node_id": "MDQ6VXNlcjg4OTAyNTI3",
    "avatar_url": "https://avatars.githubusercontent.com/u/88902527?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aditya9277",
    "html_url": "https://github.com/aditya9277",
    "followers_url": "https://api.github.com/users/aditya9277/followers",
    "following_url": "https://api.github.com/users/aditya9277/following{/other_user}",
    "gists_url": "https://api.github.com/users/aditya9277/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aditya9277/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aditya9277/subscriptions",
    "organizations_url": "https://api.github.com/users/aditya9277/orgs",
    "repos_url": "https://api.github.com/users/aditya9277/repos",
    "events_url": "https://api.github.com/users/aditya9277/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aditya9277/received_events",
    "type": "User",
    "site_admin": false,
    "name": "A D I T Y A",
    "company": null,
    "blog": "",
    "location": "Indore. India",
    "email": null,
    "hireable": null,
    "bio": "MERN | C++ | DSA | ML",
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 12,
    "following": 11,
    "created_at": "2021-08-13T17:40:37Z",
    "updated_at": "2024-06-22T10:11:47Z"
    }
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/github',(req,res)=>{
    res.json(githubdata)
})

app.get('/login',(req,res)=>{
    res.send("Enter your login details")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
