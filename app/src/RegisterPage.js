//import LoginPage from "./LoginPage";
//import users from "./usersFolder/usersList";
import './RegisterPage.css'
import logo from "./logo.jpg"
import profile from "./usersFolder/profile/profile8.jpg"
import * as React from 'react';
import { useState } from "react";
//import { Button } from 'react-native';

import {Link, Route} from 'react-router-dom'
import userMap from "./usersFolder/usersList";
import { useNavigate } from "react-router-dom";
// Already registered? <a href='/' type="button" className="h">Click here</a> to login

function RegisterPage() {

    //const navigate = useNavigate();
    //const navigate = useNavigate();
    let navigate = useNavigate();

    function handleAddPicture() {
        var el = document.getElementById("input-image-id");
        var reader = new FileReader();
        var file = el.files[0];
        //add to the messages
        reader.onload = (e) => {
            profile = e.target.result
        };
        reader.readAsDataURL(file);
    }
    async function sendText(newMessage, sender, receiver){
        var srtingFetch = 'https://localhost:7100/api/Contacts/add/';
        // add to my user
        try{
            await fetch(srtingFetch.concat(sender, '/',receiver, '/messages'), {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newMessage)
            });
        }
        catch(err){
            console.error("nla");
        }
    }
    async function conditionUserRegi() {
        //const navigate = useNavigate();
        var userName = document.getElementById("username").value;
        var passWord = document.getElementById("password").value;
        var confPassword = document.getElementById("conf-password").value;
        var display_name = document.getElementById("displayname").value;
        
        userName = userName.trim();
        passWord = passWord.trim();
        display_name = display_name.trim();
        confPassword = confPassword.trim();
        // if one of the fieald are empty.
        if (userName == "" || passWord == "" || display_name == "" || confPassword == "") {
            alert('Please entar all fields')
        }

        //cofirm password 
        if(confPassword.localeCompare(passWord) != 0){
            alert('The two passwords are not identical.')
            return;
        }
      
        var srtingFetch = 'https://localhost:7100/api/Contacts/';
        //'https://localhost:7100/api/Contacts/{userName}/password'
        var flag = 0;
        let ser_password;

        const rest = await fetch(srtingFetch.concat(userName,'/password'))
        .then(response => response.text()).then(data => {
            ser_password = data;
            });

        //if the user taken
        if (ser_password == null || ser_password == ''){      
        }else {
            alert('This username is already taken. Please choose another one.')
            return;
        }

        
        //if the username is invalid
        if (userName.length < 4) {
            alert('The user name should be longer than four characters.')
            return;
        }
        //if the password is invalid
        if (passWord.length < 3) {
            alert('The password should be longer than three characters.')
            return;
        }
        const newUser = {id : userName, name: display_name, server: "", password: passWord};

        var srtingFetch = 'https://localhost:7100/api/Contacts/new';
        // add to my user
        try{
            await fetch(srtingFetch, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newUser)
            });
        }
        catch(err){
            console.error("nla");
        }


        //mean you can register
        userMap[userName] = {
            password: passWord, displayName: display_name, img: profile,
            myFriends: {}};
        
        navigate("/ChatPage", { state: {username: userName }})
    }
    return (
        <body className="App-header">
            <div className="head-line">
                <img src={logo} alt="Logo" type="logo" />
            </div>
            <div className="row justify-content-md-center">
                <div className="regis">
                    <div className="loggg">
                        Register
                    </div>
                    <div>
                        Username:<input type="username" id="username" placeholder="Enter Username"></input>
                    </div>
                    <div>
                        Password:<input type="password" id="password" placeholder="Enter Password"></input>
                    </div>
                    <div>
                        Confirm Password:<input type="password" id="conf-password" placeholder="Enter Password"></input>
                    </div>
                    <div>
                        Display Name:<input type="name" id="displayname" placeholder="Enter Name"></input>
                    </div>

                    <div className='regi'>
                    <p> Already registered? <Link to='/' className="h">Click here</Link> to login</p>
                    </div>
                   
                    <div>
                        <button types="button" className="btn btn-lg btn-primary" onClick={() => conditionUserRegi()}>
                            Register
                        </button>
                    </div>
                </div>

            </div>
        </body>
    );
}

export default RegisterPage;