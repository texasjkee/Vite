import { useEffect, useState } from "react";

import Loading from "./Loading";
import UserItem from "./UserItem";

const User = () => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const URL = "http://localhost:4000/users";

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  //   setLoading(true);
  // }, []);

  return (
    <div>
      {!isLoading ? (
        <Loading />
      ) : (
        users.map((user) => (
          <UserItem key={user._id} name={user.name} id={user._id} />
        ))
      )}
    </div>
  );
};

export default User;