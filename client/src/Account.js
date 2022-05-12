import React, {useEffect ,useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Form} from 'react-bootstrap';


    function Account({ onLogin }) {
        const [username, setUsername] = useState("");
      
        function handleSubmit(e) {
          e.preventDefault();
          fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          })
            .then((r) => r.json())
            .then((user) => onLogin(user));
        }
      



        return (
            <section>
            <Header id='header' />
            <Form>
                <div class="mb-3">
                    <label for="username" class="form-label">Email address</label>
                    <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="usernameHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </Form>
      

   
            
            {/* <div className="Login">
                <form id="container1">
                <label for='name'>Username: </label>
                    <input type="text" className="allInput" id="name" name='name' value= "" placeholder="Enter Username.." />
                    <br></br>
                    <label for='name'>Password: </label>
                    <input type="text" className="allInput" id="password" name='password' value = "" placeholder="Enter Password.." />
                    <br></br>
                    <button id="upButton" type="submit" >Update</button>
                </form>
                </div> */}
            <Footer id='footer'/>
        </section>
    )
}

export default Account;