class HTMLComponent extends HTMLElement {

    Pre_Load(v) {

        if (v) {
            this.Onload();

        } else {
            this.OnUnload();
        }
    }

    OnUnload() {
        this.innerHTML = '';
    }


    Onload() {
        throw new Error("This method must be overwritten!");
    }
}