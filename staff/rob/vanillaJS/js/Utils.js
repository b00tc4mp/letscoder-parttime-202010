async function setTemplate(url) {
    let promise = new Promise((resolve, reject) => {
        fetch(url).then((c) => {
            resolve(c.text());
        });
    });

    promise.then((html) => {
        document.querySelector("template").innerHTML += html;
    });
}

async function getTemplate(url) {

    // Singlenton
    if (templates[url] !== undefined)
        return templates[url];

    promise = new Promise((resolve, reject) => {
        fetch(url).then((c) => {
            resolve(c.text());
        });
    });

    promise.then((c) => {
        templates[url] = c;
    });
    return promise;
    /*  promise.then((html) => {
            document.querySelector('template').innerHTML += html;
        }); */
}

function pubSub() {

    // object which will track of all events and subscription
    const subscribers = {}
    let values = []

    // Publisher: 
    function publish(eventName, data) {
        values[eventName] = data;
        // return if event is not subscribed
        if (!Array.isArray(subscribers[eventName])) {
            return
        }

        // Whenever you publish any event, it will trigger callback for all stored event in subscriber object
        subscribers[eventName].forEach((callback) => {
            callback(data)
        })
    }

    // Subscriber
    function subscribe(eventName, callback) {

        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = []
        }
        //on subscribe we will we will push callback to subscribers[eventName] array
        subscribers[eventName].push(callback);
        const index = subscribers[eventName].length - 1

        // subscribed callbacks to be removed when they are no longer necessary.
        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1);
            },
        }
    }

    function getvalue(eventName) {
        return values[eventName];

    }

    return {
        publish,
        subscribe,
        getvalue
    }
}

function ObservableOf(...data) {
    values = []
    this.next = function(kay, data) {

        values[key] = data;
    }
    this.subscribe = function(...observer) {
        const [next, error, complete] = observer
        observerD = { next, error, complete };

        try {
            data.forEach((item) => {
                //simulated an error with the type
                if (typeof item === 'string') {
                    throw {};
                }
                observerD.next(item)
            });
            observerD.complete();
        } catch (e) {
            observerD.error("is a string");
        }
    };

    return { subscribe: this.subscribe }
}

async function getUser(user, token) {

    const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users/', {
        headers: {
            'Authorization': 'Bearer ' + token
        },
        method: 'GET'
    });
    const json = await response.json();
    if (json.hasOwnProperty('error'))

        return { e: json.error, t: '' }
    else
        return {
            e: '',
            t: json
        }
}

//DELETE user+password,express, render side, server express rendering
async function insertUser(user) {

    let aut = await authUser(user);
    let method = 'POST';
    let headers = {
        'Content-type': 'application/json'
    };
    if (aut) {
        method = 'PATCH';
        headers = {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + aut
        };
        user = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        }
    }

    const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users/', {
        headers: headers,
        method: method,
        body: JSON.stringify(user)
    });
    if (response.ok) {
        return {
            e: '',
            t: aut
        }
    } else
        return { e: response.statusText, t: '' }

}

async function authUser(user) {
    const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth/', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
    });
    const json = await response.json();
    let token = json.token;
    return token;
}
async function deleteUser(user) {

    let aut = await authUser(user);

    if (!aut)
        return { e: 'No user to remove.' };

    const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users/', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + aut
        },
        method: 'DELETE',
        body: JSON.stringify(user)
    });
    if (response.ok)
        return { e: '', t: '' };
    else return { e: response.statusText, t: '' }

}