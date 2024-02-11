search = 'dovi'

url = 'https://dummyjson.com/users/search?q=' + search
console.log(url)
fetch(url)
.then(res => res.json())
.then(console.log);