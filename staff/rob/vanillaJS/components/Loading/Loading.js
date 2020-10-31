class Loading extends HTMLElement {


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


        getTemplate("./components/Loading/template.html").then((html) => {

            that.setVisibility(that.attributes['visible'].value === 'true');
            modelservice$.subscribe('loading', function(params) {
                if (params)
                    that.setVisibility(true);
                else that.setVisibility(false);
            });


        });
    }

    disconnectedCallback() {
        /*called when the element is disconnected from the page */
    }
    /*   refresh() {

        this.FirstNameElement.innerHTML = current_user.f; // + ' ( ' + this.attributes['arg'].value + ' ) ';
        this.LastNameElement.innerHTML = current_user.l;
    }
 */
    setVisibility(v) {
        if (v) {

            this.ContainerElement.classList.remove("hidden");
        } else this.ContainerElement.classList.add("hidden");

    }
}
customElements.define("i-loading", Loading);