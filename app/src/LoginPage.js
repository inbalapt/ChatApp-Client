import users from "./usersFolder/usersList";
import ChatPage from "./LoginPage";
import './LoginPage.css'
import './RegisterPage'
import logo from "./logo.jpg"
import {Link, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import userMap from "./usersFolder/usersList";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    let navigate = useNavigate();
    function conditionUser() {
        var userName = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        userName = userName.trim();
        password = password.trim();


        
        // if one of the fieald are empty.
        if (userName == "" || password == "") {
            alert('Please entar all fields')
            return;
        }

       
        // cheack if the username exiest.
        if (userMap.hasOwnProperty(userName)) {
             // cheack if the password correct.
            //var x = users.username;
            if( userMap[userName].password.localeCompare(password) != 0){
                alert('The password is incorrect')
                return;
            }
         // the username does not exiest.
        } else{
            alert('Username is not exist')
        }

        navigate("/ChatPage", { state: {username: userName }})
        //navigate("/ChatPage",  { username: userName } );



    }
    return (
        
        <body className="App-header">
            <div className="head-line">
                <img src={logo} alt="Logo" type="logoBig" />
            </div>
            <div className="row justify-content-md-center">
                <div className="fooo">
                    <div className="loggg">
                        Login
                    </div>
                    <div>
                        Username:<input type="username" id="username" placeholder="Enter Username"></input>
                    </div>
                    <div>
                        Password:<input type="password" id="password" placeholder="Enter Password"></input>
                    </div>
                    <div className="registering">
                        <p> Not registered? <Link to='/RegisterPage' className="h">Click here</Link> to register</p>
                    </div>
                    <div>
                        <button types="button" className="btn btn-lg btn-primary" onClick={() => conditionUser()}>
                            Login
                        </button>
                    </div>
                </div>

            </div>
        </body>
    );
}
const rootElement = document.getElementById("root")
ReactDOM.createPortal(<LoginPage />, rootElement)
export default LoginPage;