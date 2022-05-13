import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Form} from 'react-bootstrap';



    function Account({ onLogin, onLogout }) {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("")

        function handleSubmit(e) {
          e.preventDefault();
          fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json'
            },
            body: JSON.stringify({ username, password}),
          })
            .then((r) => r.json())
            .then((user) => notifyLoggedIn(user));
        }
      
function notifyLoggedIn(obj){
    alert(`${obj.username} is logged in`)

}

function handleLogout({username, password}) {
    fetch("/logout", {
      method: "DELETE",
    }).then((user) => notifyLoggedOut(user));
  }

function notifyLoggedOut(obj){ 
    alert(`${obj.username} is logged out`)
}
        return (
            <section>
            <Header id='header' />
            <Form>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)}type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="usernameHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <button onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Login</button>
                <header>
          <button onClick={(e)=>handleLogout(e)}>Logout</button>
        </header>
    
					

            </Form>
            
    
            <Footer id='footer'/>
        </section>
        ) 
}

export default Account;