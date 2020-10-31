class Wellcome extends HTMLElement {
    get ContainerElement() {
        if (templates["./components/Wellcome/template.html"]) {
            if (this.innerHTML === "")
                this.innerHTML += templates["./components/Wellcome/template.html"];
            return this.querySelector("#wellcome");
        } else return this.querySelector("#wellcome");

    }

    get FirstNameElement() {
        return this.ContainerElement.querySelector("#lf");
    }
    get LastNameElement() {
        return this.ContainerElement.querySelector("#ll");
    }

    get DescElement() {
        return this.ContainerElement.querySelector("#Ldesc");
    }
    get CostElement() {
        return this.ContainerElement.querySelector("#Lcost");
    }

    get iMenuElement() {
        return this.ContainerElement.querySelector("#iMenu");
    }
    get MenuVElement() {
        return this.ContainerElement.querySelector("#MenuV");
    }
    get MenuHElement() {
        return this.ContainerElement.querySelector("#MenuH");
    }

    get eMLElement() {
        return this.ContainerElement.querySelector("#eML");
    }
    get eDDElement() {
        return this.ContainerElement.querySelector("#eDD");
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
        //let template_url = 'http://localhost:3030/api/v1/template?q=wellcome';
        let template_url = "./components/Wellcome/template.html";
        getTemplate(template_url).then((html) => {
            that.innerHTML = html;

            that.setVisibility(this.attributes["visible"].value === "true");

            //MODEL EVENTS
            modelservice$.subscribe("status", function name(params) {
                console.log("Status changed (Wellcome) : " + params);
                if (params != EnumStatus.Login && params != EnumStatus.SigIn) that.setVisibility(true);
                else that.setVisibility(false);
            });

            modelservice$.subscribe("user", function name(user) {
                console.log("User changed (Wellcome) : " + user);

                that.FirstNameElement.innerHTML = user.firstname; // + ' ( ' + this.attributes['arg'].value + ' ) ';
                that.LastNameElement.innerHTML = user.lastname;
            });
            //

            //ELEMENTS EVENTS

            that.eMLElement.addEventListener("click", function() {
                modelservice$.publish('status', EnumStatus.Iframe);
            });
            that.eDDElement.addEventListener("click", function() {
                modelservice$.publish('status', EnumStatus.DriknDecorer);
            });

            that.MenuHElement.addEventListener("click", function() {
                that.MenuVElement.classList.add("container--hide");
            });

            that.iMenuElement.addEventListener("click", function(event) {
                event.stopPropagation();
                if (that.MenuVElement.classList.contains("container--hide"))
                    that.MenuVElement.classList.remove("container--hide");
                else that.MenuVElement.classList.add("container--hide");
            });

            that.ContainerElement.querySelector("#bKO").addEventListener(

                "click",
                function() {
                    current_user = {
                        fistname: "",
                        username: "",
                        lastname: "",
                        password: "",
                        mail: "",
                    };

                    modelservice$.publish("status", EnumStatus.Login);
                    //VisibilityState();
                }
            );
            //
        });
    }
    changeDrink(e) {
        console.log(e);
    }
    addTopping(e) {
        console.log(e);
    }
    disconnectedCallback() {
        /*called when the element is disconnected from the page */
    }

    setVisibility(v) {
        if (v) {
            this.ContainerElement.classList.remove("hidden");
        } else this.ContainerElement.classList.add("hidden");
    }
}
customElements.define("well-come", Wellcome);