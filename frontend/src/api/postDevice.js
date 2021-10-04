const postURL = `${process.env.REACT_APP_API_URL}\\device`

export const post = (data) => fetch(postURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(response => response)
