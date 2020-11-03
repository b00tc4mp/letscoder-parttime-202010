class IFrame extends HTMLComponent {


    get ContainerElement() {
        if (templates['./components/Iframe/template.html']) {
            if (this.innerHTML === '')
                this.innerHTML += templates['./components/Iframe/template.html'];
            return this.querySelector("#iframe");
        } else return this.querySelector("#iframe");

        //  if (!this.hasOwnProperty('children')) {

    }



    get FrameElement() {
        return this.ContainerElement.querySelector("#oframe");
    }


    constructor() {
        super();
        /*called when the class is 
                               instantiated
                               */
        let that = this;
        if (modelservice$.getvalue("status") == EnumStatus.Iframe)
            that.Pre_Load(true);
        else that.Pre_Load(false);
        modelservice$.subscribe('status', function name(params) {
            console.log('Status changed (Login) : ' + params);
            if (params == EnumStatus.Iframe)
                that.Pre_Load(true);
            else that.Pre_Load(false);
        });
    }
    connectedCallback() {
        /*called when the element is 
                                connected to the page.
                                This can be called multiple 
                                times during the element's lifecycle. for example when using drag&drop to move elements around */
    }

    Onload() {
        let that = this;


        getTemplate("./components/Iframe/template.html").then((html) => {
            that.innerHTML = html;
            that.FrameElement.data = that.attributes['url'].value;







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
customElements.define("i-frame", IFrame);