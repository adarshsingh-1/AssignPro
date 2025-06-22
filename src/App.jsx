import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { getLocalStorage } from "./utils/LocalStorage";
import { useContext, useEffect } from "react";
import { useState } from "react";
import  {AuthContext} from "./context/AuthProvider"; 

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData,SetUserData] = useContext(AuthContext)


useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser);
    setUser({ role: userData.role });
    setloggedInUserData(userData.data || null);
  }
}, []);



  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser({role: 'admin'});
      localStorage.setItem("loggedInUser", JSON.stringify({role:'admin'}));
    } else if (userData) {
      const employee = userData.find(e => email == e.email && e.password == password)
      if(employee) {
        setUser({role: 'employee'});
        setloggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role:'employee', data: employee}));
      }
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };


  return (
    
      <>
        {!user ? <Login handleLogin={handleLogin} /> : null}
        {user?.role == "admin" && <AdminDashboard changeUser={setUser}/>}
        {user?.role == "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
        
      </>
  );
}
export default App;
