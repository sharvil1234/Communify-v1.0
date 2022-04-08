var person;

window.onload = function () {
    person = prompt("Please enter your name", "Harry Potter");
}

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue,
    set,
    remove
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAy1CYsi0xeZ8fWe0eo489LBEnukMBg600",
    authDomain: "realtimedatabase-c5bd5.firebaseapp.com",
    databaseURL: "https://realtimedatabase-c5bd5-default-rtdb.firebaseio.com",
    projectId: "realtimedatabase-c5bd5",
    storageBucket: "realtimedatabase-c5bd5.appspot.com",
    messagingSenderId: "557489666203",
    appId: "1:557489666203:web:67dfe9e6cdae53920d6e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const messagesRef = ref(db, 'messages/');

// Elements
var ul = document.getElementById("list");
var input = document.getElementById("input");
var button = document.getElementById("send");

onValue(messagesRef, (snapshot) => {
    var person_name = snapshot.val().name;
    var message = snapshot.val().message;

    var li = document.createElement("li");
    li.innerHTML = "<b>" + person_name + "</b>" + " : " + message;
    ul.appendChild(li);
    remove(messagesRef);
})

function send() {
    set(messagesRef, {
        message: input.value,
        name: person
    })
}

button.addEventListener('click', send);