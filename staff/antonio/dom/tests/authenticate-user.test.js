var users = [];
function authenticateUser(email, password) {
  if (!email) throw new TypeError("email is required");
  if (!password) throw new TypeError("password is required");

  var user = users.find(function (user) {
    return user.email === email;
  });

  if (!user) throw new Error(`user with email ${email} does not exist`);

  if (user.password !== password) throw new Error("password wrong");

  var token = user.id * 213;

  return token;
}

console.log("TEST authenticateUser"); // title
console.log("should authenticate a registered user"); // happy path
var userId = Math.random() * Math.floor(Math.random() * 10);
var email = Math.random() + "@mail.com";
var password = `${Math.random()}`;
users = [
  {
    email,
    password,
    id: userId,
  },
];

var token = authenticateUser(email, password);

console.assert(
  authenticateUser(email, password) === token,
  "should return valid token"
);
console.assert(token === userId * 213, "token should be userId*213");

console.log("should deny access to user if invalid email"); // unhappy path

var userId = Math.random() * Math.floor(Math.random() * 10);
var email = Math.random() + "@mail.com";
var password = `${Math.random()}`;
users = [
  {
    email,
    password,
    id: userId,
  },
];

var fail = "";
var token = "";

try {
  token = authenticateUser(undefined, password);
} catch (error) {
  fail = error.message;
}

console.assert(token.length === 0, "token shouldn't exist");
console.assert(fail.length > 0, "fail should exist");
console.assert(
  fail === "email is required",
  "should throw email missing error"
);

console.log("should fail on password missing"); // unhappy path

var userId = Math.random() * Math.floor(Math.random() * 10);
var email = Math.random() + "@mail.com";
var password = `${Math.random()}`;
users = [
  {
    email,
    password,
    id: userId,
  },
];

var fail = "";
var token = "";
try {
  authenticateUser(email, undefined);
} catch (error) {
  fail = error.message;
}

console.assert(fail.length > 0, "fail should exist");
console.assert(
  fail === "password is required",
  "should throw password missing error"
);
console.assert(token.length === 0, "token shouldn´t exist");

console.log("should failt if user hasn´t been registered yet"); // unhappy path

users = [];
var email = Math.random() + "@mail.com";
var password = `${Math.random()}`;
var token = "";
var fail = "";

try {
  token = authenticateUser(email, password);
} catch (error) {
  fail = error.message;
}

console.assert(fail.length > 0, "fail should exist");
console.assert(
  fail === `user with email ${email} does not exist`,
  "should throw user email not registered error"
);
console.assert(token.length === 0, "token shouldn´t exist");

console.log("should fail on wrong password"); // unhappy path

var userId = Math.random() * Math.floor(Math.random() * 10);
var email = Math.random() + "@mail.com";
var password = `${Math.random()}`;
users = [
  {
    email,
    password,
    id: userId,
  },
];

var fail = "";
var token = "";

try {
  token = authenticateUser(email, password);
} catch (error) {
  fail = error.message;
}

console.assert(token.length === 0, "token should not exist");
console.assert(fail.length > 0, "fail should exist");
console.assert(
  fail === "password wrong",
  "fail should throw password wrong message"
);
