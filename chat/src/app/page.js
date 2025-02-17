import { useState } from "react"
import jwt from 'jsonwebtoken'

export default function Home() {
  const [email,setEmail] = useState("");
  const [user,SetUser] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    let message = "Lets test it how does that works";
    let data = {
      email,
      message
    };
    fetch("/api/mail",{
      method:"POST",
      headers:{
        "content-type": "application.json",
      },
      body:JSON.stringify(data)
    }).then(async(res)=>{
      if(res.status===200){
        console.log(await res.json());
      }else{
        console.log(console.log(await res.json()))
      }
    });
    setEmail("")
    SetUser("");
  }
  return (
    <>
    <div>
      <form>
        <h1>Login</h1>
        <label htmlFor="user">Username:</label>
        <input type="text" id="user" value={user} onChange={SetUser(e.target.value)} />
        <h1>Login</h1>
        <label htmlFor="user">Email:</label>
        <input type="email" id="user" value={user} onChange={setEmail(e.target.value)} />
        <input type="submit" onClickCapture={handleSubmit} />
      </form>
    </div>
    </>
  );
}
