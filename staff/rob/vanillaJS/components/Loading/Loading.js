class Loading extends HTMLComponent {


    get ContainerElement() {
        if (templates['./components/Loading/template.html']) {
            if (this.innerHTML === '')
                this.innerHTML += templates['./components/Loading/template.html'];
            return this.querySelector("#iloading");
        } else return this.querySelector("#iloading");

        //  if (!this.hasOwnProperty('children')) {

    }



    get FrameElement() {
        return this.ContainerElement.querySelector("#iloading");
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

        if (modelservice$.getvalue("loading"))
            that.Pre_Load(true);
        else that.Pre_Load(false);
        modelservice$.subscribe('loading', function name(params) {

            if (params)
                that.Pre_Load(true);
            else that.Pre_Load(false);
        });


    }

    Onload() {
        let that = this;
        getTemplate("./components/Loading/template.html").then((html) => {

            that.innerHTML = html;

        });
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
customElements.define("i-loading", Loading);