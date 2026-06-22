fetch('https://jsonplaceholder.typicode.com/posts/45', {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: 'Title for PATCH',
    userId: 89
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));