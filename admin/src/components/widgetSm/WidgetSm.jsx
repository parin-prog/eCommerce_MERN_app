import { useEffect, useState } from "react";
import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState(null);

  useEffect(()=>{
    const getUsers = async ()=>{
      const res = await userRequest.get("/users?new=true");
      setUsers(res.data);
    }
    getUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users?.map((user)=>(
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img ?? "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.fullname}</span>
            <span className="widgetSmUserTitle">{user.role ?? ""}</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>))}
      </ul>
    </div>
  );
}
