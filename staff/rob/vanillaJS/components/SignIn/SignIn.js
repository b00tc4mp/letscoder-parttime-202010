class Sing_In extends HTMLElement {

    get ContainerElement() {
        if (templates['./components/SignIn/template.html']) {
            if (this.innerHTML === '')
                this.innerHTML += templates['./components/SignIn/template.html'];
            return this.querySelector("#sign-in");
        } else return this.querySelector("#sign-in");

    }

    get BackElement() {
        return this.ContainerElement.querySelector("#bBack");
    }

    get SaveElement() {
        return this.ContainerElement.querySelector("#bSave");
    }

    get ErrorElement() {
        return this.ContainerElement.querySelector("#lErrorS");
    }

    get UserNameElement() {
        return this.ContainerElement.querySelector("#iUS");
    }

    get PasswordElement() {
        return this.ContainerElement.querySelector("#iPS");
    }

    get FirstNameElement() {
        return this.ContainerElement.querySelector("#iFN");
    }

    get LastNameElement() {
        return this.ContainerElement.querySelector("#iLN");
    }

    get MailElement() {
        return this.ContainerElement.querySelector("#iM");
    }
    get RemoveElement() {
        return this.ContainerElement.querySelector("#bRemove");
    }





    constructor() {
        super();
        /*called when the class is 
                       instantiated
                       */
    }
    connectedCallback() {
        /*called when the element is 
                        connected to the page.
                        This can be called multiple 
                        times during the element's lifecycle. for example when using drag&drop to move elements around */
        let that = this;

        getTemplate("./components/SignIn/template.html").then((html) => {

            this.innerHTML += html;

            //APPLY ATTR
            this.setVisibility(this.attributes['visible'].value === 'true');

            //MODEL EVENTS
            modelservice$.subscribe('status', function name(params) {

                console.log('Status changed (Singin) : ' + params);
                if (params == "1")
                    that.setVisibility(true);
                else that.setVisibility(false);
            });

            //BUTTON EVENTS
            this.BackElement.addEventListener("click", function() {

                modelservice$.publish('status', "2");


            });

            this.RemoveElement.addEventListener("click", function() {
                let user = {
                    username: that.UserNameElement.value,
                    password: that.PasswordElement.value,

                };
                deleteUser(user).then(c => {
                    if (c.e) {
                        console.log("Not Removed");
                        that.ErrorElement.classList.add('label--error--display');
                        that.ErrorElement.innerHTML = c.e;

                    } else {
                        console.log("Removed!");
                        that.ErrorElement.classList.remove('label--error--display');
                        modelservice$.publish('status', "2");
                    }


                });



            });

            this.SaveElement.addEventListener("click", function() {

                if (that.UserNameElement.checkValidity() && that.PasswordElement.checkValidity() && that.FirstNameElement.checkValidity() && that.LastNameElement.checkValidity() && that.MailElement.checkValidity())
                    that.signin(
                        that,
                        that.UserNameElement.value,
                        that.PasswordElement.value,
                        that.FirstNameElement.value,
                        that.LastNameElement.value,
                        that.MailElement.value
                    );
                else that.ErrorElement.classList.add("label--error--display");
            });
            //

            //INPUT EVENTS


            this.PasswordElement.addEventListener("focusout", function() {
                that.checkupdate(that);
            });
            this.UserNameElement.addEventListener("focusout", function() {
                that.checkupdate(that);
            });


            //

        });
    }

    checkupdate(that) {
        if (that.PasswordElement.value != '' && that.UserNameElement.value != '') {
            authUser({ username: that.PasswordElement.value, password: that.UserNameElement.value }).then(c => {
                if (c) {
                    that.SaveElement.innerHTML = "UPDATE";
                } else that.SaveElement.innerHTML = "SAVE";
            });

        } else {
            that.SaveElement.innerHTML = "SAVE";
        }
    }
    disconnectedCallback() {
        /*called when the element is disconnected from the page */
    }
    signin(that, u, p, f, l, m) {
        if (u != "" && p != "" && f != "" && f != "" && m != "") {
            document
                .getElementById("lErrorS")
                .classList.remove("label--error--display");
            /*   listUsers.push({
                  f: f,
                  u: u,
                  l: l,
                  p: p,
                  m: m,
              }); */
            let user = {
                username: u,
                password: p,
                firstname: f,
                lastname: l,
                email: m,
            };


            insertUser(user).then(c => {
                if (c.e) {
                    console.log("Not Registered!");
                    that.ErrorElement.classList.add('label--error--display');
                    that.ErrorElement.innerHTML = c.e;

                } else {
                    console.log("Registered!");
                    that.ErrorElement.classList.remove('label--error--display');
                    modelservice$.publish('status', "2");
                }


            });



            //VisibilityState();
        } else {
            this.ErrorElement.classList.add("label--error--display");
        }
    }
    refresh() {
        let that = this;

        that.UserNameElement.value = that.PasswordElement.value = that.FirstNameElement.value = that.LastNameElement.value = that.MailElement.value = '';
        that.checkupdate(that);
    }
    setVisibility(v) {

        if (v) {
            this.refresh();
            this.ErrorElement.classList.remove("label--error--display");
            this.ContainerElement.classList.remove("hidden");
        } else this.ContainerElement.classList.add("hidden");

    }
}
customElements.define("sign-in", Sing_In);