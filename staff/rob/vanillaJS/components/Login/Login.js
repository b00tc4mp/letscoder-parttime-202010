class Log_In extends HTMLComponent {
    get ContainerElement() {
        if (templates["./components/Login/template.html"]) {
            if (this.innerHTML === "")
                this.innerHTML += templates["./components/Login/template.html"];
            return this.querySelector("#log-in");
        } else return this.querySelector("#log-in");
    }

    get UserElement() {
        return this.ContainerElement.querySelector("#iU");
    }
    get PasswordElement() {
        return this.ContainerElement.querySelector("#iP");
    }
    get OkElement() {
        return this.ContainerElement.querySelector("#bOk");
    }

    get RegisterElement() {
        return this.ContainerElement.querySelector("#bR");
    }

    get ErrorElement() {
        return this.ContainerElement.querySelector("#lError");
    }

    constructor() {
        super();

        /*called when the class is 
                    instantiated
                    */

        //
        let that = this;
    }

    async callAPI(user, url) {
        let r = await new Promise((resolve, reject) => {
            fetch(url, {
                headers: {
                    "Content-type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(user),
            }).then((c) => {
                resolve(c.json());
            });
        }).then((c) => {
            return c;
        });

        return r;
    }

    connectedCallback() {
        /*called when the element is 
                     connected to the page.
                     This can be called multiple 
                     times during the element's
                     lifecycle.
                     for example when using drag&drop
                     to move elements around
                    */
        let that = this;
        // live https://blacksmithpi-master-zxdjel1ccb.herokuapp.com/api/v1/template?q=login
        // let template_url = 'http://localhost:3030/api/v1/template?q=login';
        if (modelservice$.getvalue("status") == EnumStatus.Login)
            that.Pre_Load(true);
        else that.Pre_Load(false);

        modelservice$.subscribe("status", function name(params) {

            if (params == EnumStatus.SigIn) that.Pre_Load(true);
            else that.Pre_Load(false);
        });
    }

    Onload() {
        let that = this;
        let template_url = "./components/Login/template.html";
        getTemplate(template_url).then((html) => {
            that.innerHTML += html;

            //APPLY ATTR
            // that.setVisibility(that.attributes["visible"].value === "true");
            //

            //MODEL EVENTS
            modelservice$.subscribe("status", function name(params) {
                console.log("Status changed (Login) : " + params);
                if (params == EnumStatus.Login) that.setVisibility(true);
                else that.setVisibility(false);
            });
            //

            //BUTTON EVENTS
            that.OkElement.addEventListener("click", function() {
                if (
                    that.UserElement.checkValidity() &&
                    that.PasswordElement.checkValidity()
                )
                //that.login(that.UserElement.value, that.PasswordElement.value);
                    that.asyncLogin(that.UserElement.value, that.PasswordElement.value);
                else {
                    if (that.UserElement.validity.valueMissing) {
                        that.UserElement.classList.add("input--error");
                    }
                    if (that.PasswordElement.validity.valueMissing) {
                        that.PasswordElement.classList.add("input--error");
                    }
                    that.ErrorElement.classList.add("label--error--display");
                }
            });

            that.RegisterElement.addEventListener("click", function() {
                modelservice$.publish("status", EnumStatus.SigIn);
            });
            //
        });
    }

    disconnectedCallback() {
        /*called when the element
                              is disconnected from the page
                            */
    }

    refresh() {
        this.UserElement.value = "";
        this.PasswordElement.value = "";
        this.ErrorElement.classList.remove("label--error--display");
        this.UserElement.classList.remove("input--error");
        this.PasswordElement.classList.remove("input--error");
    }
    async asyncLogin(u, p) {
        let that = this;
        let user = {
            username: u,
            password: p,
        };
        modelservice$.publish("loading", true);
        let c = await auth_user(user);
        if (c) {
            that.ErrorElement.classList.remove("label--error--display");
            let cc = await retrieve_user(user, c);
            current_user = cc.t;
            modelservice$.publish("user", current_user);
            modelservice$.publish("loading", false);
            modelservice$.publish("status", EnumStatus.DriknDecorer);
        } else {
            modelservice$.publish("loading", false);
            that.ErrorElement.classList.add("label--error--display");
        }
    }
    login(u, p) {
        let that = this;
        let user = new User(u, p);

        modelservice$.publish("loading", true);
        auth_user(user).then((c) => {
            if (c) {
                that.ErrorElement.classList.remove("label--error--display");
                retrieve_user(user, c).then((cc) => {
                    current_user = cc.t;
                    modelservice$.publish("user", current_user);
                    modelservice$.publish("status", EnumStatus.DriknDecorer);
                    modelservice$.publish("loading", false);
                });
            } else {
                modelservice$.publish("loading", false);
                that.ErrorElement.classList.add("label--error--display");
            }
        });
    }
    setVisibility(v) {
        if (v) {
            this.refresh();
            this.ContainerElement.classList.remove("hidden");
        } else this.ContainerElement.classList.add("hidden");
    }
}
customElements.define("log-in", Log_In);