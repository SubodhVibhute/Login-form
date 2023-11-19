import React, {useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";


function Singup() {
    const[userName,setuserName]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[password,setpassword]=useState("");

    
    async function submit(event){
      event.preventDefault();
      try{
        await axios.post("http://localhost:8000/add",{
          userName:userName,
          email:email,
          phone:phone,
          password:password,
        });
       if(userName==="")
       {
                alert("Enter the UserName");
       }
       else if(email==="")
       {
          alert("Enter the Email")
       }
       else if(phone==="")
       {
          alert("Enter the Phone_no")
       }
       else if(password==="")
       {
          alert("Enter the Password")
       }
       else{
        alert("Creat Account Successfully");
       }
      }
      catch(err){
         alert("Some Thing is wrong");
      }
    }
  


  return (
    <div className='d-flex justify-content-conter aling-item-conter '>
       <div className='bg-white p-3 rounded w-25'>
       <h1>Sing-Up</h1>
        <form action="" >
        <div className='mb-3'>
        <strong>UserName</strong> <input type="text" placeholder="UserName" name="userName" className='form-control-rounded-0 w-100' 
      value={userName}
      onChange={(event)=>{
        setuserName(event.target.value);
      }}
      />
      
        </div>



        <div className='mb-3'>
         <strong>Email</strong><input type="Email" placeholder="UserEmail" id="email" className='form-control-rounded-0 w-100'
         value={email}
         onChange={(event)=>{
           setemail(event.target.value);
         }}
         />
         </div>



         <div className='mb-3'>
         <strong>Phone_No</strong> <input type="phone" placeholder="Phone_No" id="phone" className='form-control-rounded-0 w-100' 
         value={phone}
         onChange={(event)=>{
           setphone(event.target.value);
         }}
         />
         </div>



         <div className='mb-3'>
         <strong>Password</strong><input type="password" placeholder="Password" id="password" className='form-control-rounded-0 w-100' 
        value={password}
        onChange={(event)=>{
          setpassword(event.target.value);
        }}
        />
        </div>


         <button type="submit" className='btn btn-success w-100' onClick={submit}>Sing up</button>
        <Link to="/Login" className='btn btn-default border w-100 bg-light' >Login</Link>
       
        </form>
        </div>
    </div>

  )
}
export default Singup