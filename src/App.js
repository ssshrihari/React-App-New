import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  //Registration and storing values in database
  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    setUsers([...users, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path='/' exact render={(props) =>(
          <>
            <Register addUser={addUser} />
          </>
        )} />

        
        
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}
//dead

export default App;
