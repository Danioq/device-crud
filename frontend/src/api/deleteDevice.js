const deleteURL = `${process.env.REACT_APP_API_URL}\\device`

export const del = (deviceID) => fetch(`${deleteURL}\\${deviceID}`, { method: 'DELETE' }).then(response => response).catch(e => e)
