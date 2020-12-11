import React,{useState} from 'react';
import './Practice.css';
import {Link} from 'react-router-dom';


function Practice(){
 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [users,setUsers] = useState("");
 const [message,setMessage] = useState("");
 
 const handleNameChange = (e)=>{
     setName(e.target.value);
 }
 const handleEmailChange =(e)=>{
     setEmail(e.target.value);
 }
 const handleMessageChange = (e) =>{
     setMessage(e.target.value);
 }
 const handleUsersChange = (e)=>{
     setUsers(e.target.value);
 }
const handleSubmit =(e)=>{
    console.log(`Name:${name} Email:${email} Users:${users} Message:${message}`);
    e.preventDefault();
 }

 return(
        <div>
                <header>
                    <nav>
                    <h1 id="title">REDPAL</h1>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/post-data"><li>Posts</li></Link>
                            <Link to="/data-fetch"><li>Datas</li></Link>
                            <Link to="/to-do"><li>To-do</li></Link>
                        </ul>
                        <div className="clear"></div>
                    </nav>
                </header> 
            <div id="top-section">
                <section className="title-section" >
                    
                    <h2>Close To You!!Close To Your Heart!!!</h2>
                    <h3>Online Pharmacy Market</h3>
                    <button>Buy Drugs</button>
                </section>
                 
                    <table className="table-section">
                        <thead>
                        <tr>
                            <th>DAYS</th>
                            <th>WORKING HOURS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>MONDAY</td>
                            <td>10:00AM-10:00PM</td>
                        </tr>
                        <tr>
                            <td>TUESDAY</td>
                            <td>10:00AM-10:00PM</td>
                        </tr>
                        <tr>
                            <td>WEDNESDAY</td>
                            <td>10:00AM-10:00PM</td>
                        </tr>
                        <tr>
                            <td>THURSDAY</td>
                            <td>10:00AM-10:00PM</td>
                        </tr>
                        <tr>
                            <td>FRIDAY</td>
                            <td>10:00AM-10:00PM</td>
                        </tr>
                        </tbody>
                    </table>
               
            </div>
                <section className="form-section" id="form1">
                    <header>
                        <h2>Contact Us</h2>
                    </header>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <label htmlFor="name">NAME</label>
                        <input type="text" id="name" value={name} onChange={(e)=>handleNameChange(e)}/>
                        
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input type="text" id="email" value={email} onChange={(e)=>handleEmailChange(e)}/>
                        
                        <label htmlFor="user-type">TYPE OF USER</label>
                        <select name="user-type" id="user-type" value={users} onChange={(e)=>handleUsersChange(e)}>
                            <option value="">Select an Option</option>
                            <option value="Doctor">DOCTOR</option>
                            <option value="Social Activist">SOCIAL ACTIVIST</option>
                            <option value="Pharma">PHARMA</option>
                            <option value="Diseased Person">user</option>
                        </select>
                        <label htmlFor="message-input">MESSAGE</label>
                        <textarea name="message" id="message-input" cols="30" rows="10" value={message} onChange={(e)=>handleMessageChange(e)}></textarea>
                        <button >Submit</button>
                    </form >
                </section>
            </div>
    )
}
export default Practice;