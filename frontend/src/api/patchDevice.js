const patchURL = `${process.env.API_URL}\\device`

export const patch = (data) => fetch(patchURL, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(response => response)
  .catch(e => e)
