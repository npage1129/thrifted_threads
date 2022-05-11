import React, {useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Reviews() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [review, setReview] = useState('')
    const [show, setShow] = useState([{}])
    const data = {name:name, email:email, review:review}
console.log(show)
    const postSet = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)}

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/reviews', postSet)
        .then(response => response.json())
        .then((data) => setShow([data]))
        }

    return(

        <div>
        <>
        <Header />
        </>

        
        <>
        <div>
            <h1 id="subTitle">Submit a comment here:</h1>
            <div className="wrapper">
            {show?.map(review =>(
                    <div className="reviews">
                        <ul>
                            <li> {review.name} </li>
                            <li> {review.email} </li>
                            <li> {review.review} </li>
                            </ul>
                        </div>          
            )    
            )}
            </div>
            <div className="Submission">
                <form id="container">
                    <label for='name'>Name: </label>
                    <input type="string" className="allInput" id="name" name='name' value = {name} placeholder="Your first name.." onChange={(event)=>{setName(event.target.value)}}/>
                    <br></br>
                    <label for='email'>Email: </label>
                    <input type="text" className="allInput" id="email" name='email' value = {email} placeholder="Your email.." onChange={(event)=>{setEmail(event.target.value)}}/>
                    <br></br>
                    <label for='review'>Review: </label>
                    <input type="string" className="allInput" id="review" name='review' value={review} placeholder="Your Comment.." onChange={(event)=>{setReview(event.target.value)}}/>
                    <br></br>
                    <button id="subButton" type="submit"  onClick={handleSubmit}>Submit</button>
                </form>
                </div>
        
        </div>
       </>
        </div>
    );
}
            

export default Reviews;









