fetch('https://api.github.com/users/maykbrito')
.then( response => {
  response.json()
  .then (data => console.log(data))
})
