import React,{useState} from 'react';

function Dataposting(props){
    const[fname,setFname] =useState("");
    const [lname,setLname] =useState("");
    const [age,setAge] =useState("");
    const [gender,setGender] =useState("");
    const [address,setAddress]=useState("");
       
    const handleFnameChange = (event)=>{
        setFname(event.target.value);
    }
    const handleLnameChange = (event)=>{
        setLname(event.target.value);
    }
    const handleAgeChange = (event)=>{
        setAge(event.target.value);
    }
    const handleGenderChange = (event)=>{
        setGender(event.target.value);
    }
    const handleAddressChange = (event)=>{
       setAddress(event.target.value);
    }
    const handleSubmit =(e)=>{
        try{
            const result = fetch("https://webhook.site/94c0da22-9fa7-42ae-8ec8-9b00022753eb",{
                method:"post",
                mode:"no-cors",
                headers:{
                    "Accept":"application/json",
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    FirstName:fname,
                    LastName:lname,
                    Age:age,
                    Gender:gender,
                    Address:address
                })

            });
           console.log(result);    
        }
        catch(error){
            console.log(error);
        }
        e.preventDefault();
    } 
    
return(
    <div>
            <form >
                    <label htmlFor="fname">FirstName</label>
                    <input
                     type="text"
                     id="fname" 
                     value={fname} 
                     onChange={(e)=>handleFnameChange(e)}></input><br/>

                    <label htmlFor="lname">LastName</label>
                    <input type="text" id="lname" value={lname} onChange={(e)=>handleLnameChange(e)}></input><br/>
                    
                
                    <label htmlFor="age">Age</label>
                    <input type="text" id={age} value={age} onChange={(e)=>handleAgeChange(e)}></input><br/>
                    
                  
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender" value={gender} onChange={(e)=>handleGenderChange(e)} ></input><br/>
                    
                    
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" value={address} onChange={(e)=>handleAddressChange(e)}></input><br/>
                    
                    <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
                </form>
            </div>
)}
export default Dataposting;