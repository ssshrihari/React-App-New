import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) =>{
    e.preventDefault()

    const url = "http://localhost:3000/users/login";
    const data = { email, password};
    axios.post(url,data).then(()=>{
      console.log("Ok")
    }).catch((err)=>{
      console.log("Error: "+ err)
    });
    setEmail('')
    setPassword('')
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <h3>Login</h3>
      <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
        />
      </div>
      <div className="form-control ">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="New password"
        />
      </div>
      <input type="submit" value="Sign-in" className="btn btn-block" />
      <Link to="/" style={{textDecoration: 'none', fontWeight:400}}><p>Don't have an account? <span>Sign-up</span></p></Link>
    </form>
  );
};

export default Login;
