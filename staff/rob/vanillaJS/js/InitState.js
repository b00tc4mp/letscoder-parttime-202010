var templates = {};
var listUsers = [];
EnumStatus = {
    DriknDecorer: 3,
    Iframe: 4,
    Forex: 5,
    Login: 0,
    SigIn: 1,
    Wellcome: 2,
};

const modelservice$ = new pubSub();
var current_user = {
    fistname: "",
    username: "",
    lastname: "",
    password: "",
    email: "",
};

modelservice$.subscribe("status", (c) => {
    document.querySelector("log-in") ? document.querySelector("log-in").remove() : null;
    document.querySelector("sign-in") ? document.querySelector("sign-in").remove() : null;
    document.querySelector("drink-decorator") ? document.querySelector("drink-decorator").remove() : null;
    document.querySelector("i-forex") ? document.querySelector("i-forex").remove() : null;
    document.querySelector("well-come") ? document.querySelector("well-come").remove() : null;
    document.querySelector("i-loading") ? document.querySelector("i-loading").remove() : null;
    switch (c) {
        case EnumStatus.Login:
            document.querySelector("body").innerHTML +=
                " <log-in></log-in> <i-loading></i-loading> ";
            break;
        case EnumStatus.SigIn:
            document.querySelector("body").innerHTML +=
                "<sign-in></sign-in><i-loading></i-loading> ";
            break;
        case EnumStatus.DriknDecorer:
            document.querySelector("body").innerHTML +=
                "<well-come arg='2'></well-come><drink-decorator></drink-decorator>";
            break;
        case EnumStatus.Forex:
            document.querySelector("body").innerHTML +=
                "<well-come arg='2'></well-come><i-forex> </i-forex>";
            break;
        case EnumStatus.Iframe:
            document.querySelector("body").innerHTML +=
                "<well-come arg='2'></well-come> <i-frame url='../../../src/html/marialunarillos/' > < /i-frame>";
            break;

        default:
            break;
    }
});

/*
   <log-in></log-in>
    <sign-in></sign-in>

       <i-loading></i-loading> 

    <drink-decorator></drink-decorator>
    <i-frame url="../../../src/html/marialunarillos/"></i-frame>
   
   
 */

// const modelservice$ = new ObservableOf(status)
modelservice$.publish("status", EnumStatus.Login);

// publisher
// Subscriber
// unsubscribe
// Some place to store callbacks that are registered from subscribers.