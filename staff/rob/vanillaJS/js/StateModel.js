 var templates = {};
 var listUsers = [];;
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




 // const modelservice$ = new ObservableOf(status)
 ;



 // publisher
 // Subscriber
 // unsubscribe
 // Some place to store callbacks that are registered from subscribers.