const postURL = `${process.env.API_URL}\\device`

export const post = (data) => fetch(postURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(response => response)
  .catch(e => e)
