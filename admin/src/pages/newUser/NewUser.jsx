import { useState } from "react";
import { userRequest } from "../../requestMethods";
import "./newUser.css";

export default function NewUser() {
  const [username, setUserName] = useState("")
  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const [active, setActive] = useState(false)


  const handleChange = (e, type) => {
    switch (type) {
      case "username":
        setUserName(e.target.value);
        break;
      case "fullname":
        setFullName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        break;
      case "active":
        setActive(e.target.value);
        break;

      default:
        break;
    }
  }
  const submitUser = async () => {
    await userRequest.post("/users/register/", {
      username, fullname, email, password, phone, address, gender, active
    });
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" onChange={(e) => handleChange(e, "username")} placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" onChange={(e) => handleChange(e, "fullname")} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" onChange={(e) => handleChange(e, "email")} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" onChange={(e) => handleChange(e, "password")} />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" onChange={(e) => handleChange(e, "phone")} />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" onChange={(e) => handleChange(e, "address")} />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" onClick={() => setGender("male")} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" onClick={() => setGender("female")} />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" onClick={() => setGender("other")} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active" onChange={(e) => handleChange(e, "username")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton" onClick={submitUser}>Create</button>
      </form>
    </div>
  );
}
