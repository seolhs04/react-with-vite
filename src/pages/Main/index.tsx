import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/items/123?query=hello")
      .then((res) => {
        setMessage(res?.data.query);
      })
      .catch((err) => {
        console.log("you got error");
      });
  }, []);

  return (
    <div>
      <p>Main Page</p>
      <p>{message}</p>
    </div>
  );
};

export default Main;
