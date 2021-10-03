const getURL = `${process.env.API_URL}\\devices`

export const get = () => fetch(getURL).then(response => response.json()).then(devices => devices).catch(e => e)
