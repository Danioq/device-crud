const deleteURL = `${process.env.API_URL}\\device`

export const del = (deviceID) => fetch(`${deleteURL}\\${deviceID}`, { method: 'DELETE' }).then(response => response).catch(e => e)
