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

function loadScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}