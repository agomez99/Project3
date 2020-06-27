import React, { useContext } from "react";
import image from "../../img/dummy.png";
import Card from "react-bootstrap/Card";
import UserContext from "../../context/UserContext";
import "./style.css";
const ProfileCard = () => {
  const { userData } = useContext(UserContext);
  console.log(userData);
  return (
    <>
      <Card className="profile-container">
        <img src={image} alt="me" className="profile-img" />

        {userData.user ? <h1>Welcome  {userData.user.displayName}<br></br></h1> : <><h4>Unknown Profile</h4></>}
        {userData.user ? <h1>{userData.user.email}</h1>: <><h4>Email unknown</h4></>}
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. It usually begins with: “Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.” 
        </p>
      </Card>
    </>
  );
};

export default ProfileCard;
