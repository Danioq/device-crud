const getURL = `${process.env.REACT_APP_API_URL}\\devices`

export const get = () => fetch(getURL).then(response => response.json()).then(devices => devices)
