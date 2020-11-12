const retrieveForexSymbols = (username, password, accountType = 'demo') => {
    // TODO validate input arguments

    return fetch(`${FOREX_API_URL}/symbols`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username, password, accountType })
    }).then(res => res.json())
}