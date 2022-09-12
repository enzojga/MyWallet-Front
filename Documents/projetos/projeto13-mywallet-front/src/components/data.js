function getToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
}

function getConfig() {
    const token = getToken();
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    return config;
}

export { getToken, getConfig }