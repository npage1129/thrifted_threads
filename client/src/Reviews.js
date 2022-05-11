import React, {useState, useEffect} from 'react';
import Header from './Header';


function Reviews() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [review, setReview] = useState('')
    const [show, setShow] = useState([{}])
    const [updatedName, setUpdatedName] = useState('')
    const [updatedEmail, setUpdatedEmail] = useState('')
    const [updatedReview, setUpdatedReview] = useState('')
    const [id, setId] = useState(0)
    const [update, setUpdate] = useState([])
    const data = {name:name, email:email, review:review}

    const postSet = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)}

    function handleSubmit(event) {
        event.preventDefault();
    }
        useEffect(()=>{
        fetch('/reviews')
        .then(response => response.json())
        .then((data) => setShow(()=>data))
        },[])
        
    console.log(show)

        function handleDelete(review){
            const url = `http://localhost:3000/reviews/${review}`
            fetch(url,{
                method:'DELETE',
                headers:{'Content-Type':'application/json'}
            })
            .then(res => res.json())
            .then(data => console.log(data));
        
        }
        useEffect(()=> {
            fetch(`http://localhost:3000/reviews`)
                .then((resp) => resp.json())
                .then((data) => setUpdate(()=>data))
        },[])
    
    function handleChange(e) {
        e.preventDefault();
    
        const updatedRev = {
            name: updatedName,
            email: updatedEmail,
            review: updatedReview
       
        }
    
        const name1 = updatedName
       
        fetch(`http://localhost:3000/reviews/${id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedRev)
        })
    
            .then((resp) => resp.json())
            .then((data) => setUpdate(()=>data)
            
            
        
            
        )}
        
       

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
                    <div onClick={()=>setId(review.id)}className="reviews">
                        <ul>
                            <li> {review.name} </li><button onClick={() =>handleDelete(review)}>delete</button>
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
                    <button id="subButton" type="submit"  onClick={()=>handleSubmit}>Submit</button>
                </form>
                </div>
                <div className="Update">
                <form id="container2">
                <label for='name'>Name: </label>
                    <input type="text" className="allInput" id="name" name='name' value={updatedName}  placeholder="Enter Name.." onChange={(event)=>{setUpdatedName(event.target.value)}}/>
                    <br></br>
                    <label for='name'>Email: </label>
                    <input type="text" className="allInput" id="email" name='email' value = {updatedEmail} placeholder="Exact Email" onChange={(event)=>{setUpdatedEmail(event.target.value)}}/>
                    <br></br>
                    <label for ='review'>Review: </label>
                    <textarea className="allInput" id="description" name='content' value ={updatedReview}  placeholder="Write a review.." rows="2" onChange={(event)=>{setUpdatedReview(event.target.value)}}/>
                    <br></br>
                    <button id="upButton" type="submit" onClick={(e)=>handleChange(e,id)}>Update</button>
                </form>
                </div>
            </div>
        </>
        </div>
    
    )
            }
        
export default Reviews;