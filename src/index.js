import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from 'react-router-dom';


import CreateAccount from "./createaccount";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Balance from "./balance";
import AllData from "./alldata";
import NavBar from "./navbar";
import Home from "./home";


function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="./" exact component={Home} />
          <Route path="CreateAccount" component={CreateAccount} />
          <Route path="Login" component={Login} />
          <Route path="Deposit" component={Deposit} />
          <Route path="Withdraw" component={Withdraw} />
          <Route path="Balance" component={Balance} />
          <Route path="AllData" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.createRoot(
  <Spa/>,
  document.getElementById('root')
);
