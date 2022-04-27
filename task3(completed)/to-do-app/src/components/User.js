import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

function User() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState({
    avatar: "",
    username: "",
    address: "",
    email: "",
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const userData = {
          avatar: data.name
            .split(" ")
            .map((arr) => arr[0])
            .join(""),
          username: data.username,
          address: `${data.address.street}, ${data.address.city}`,
          email: data.email,
        };
        setUser(userData);
      });
  }, [userId]);

  return (
    <>
      <div className="back" onClick={() => navigate(-1)}>
        <RiArrowLeftLine />
      </div>
      <h1>Profile</h1>
      <div className="user-avatar">
        <p>{user.avatar}</p>
      </div>
      <div className="user-info">
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Address:</b> {user.address}
        </p>
        <p>
          <b>E-mail:</b>{" "}
          <a href={`mailto:${user.email}`} className="user-email">
            {user.email}
          </a>
        </p>
      </div>
    </>
  );
}

export default User;
