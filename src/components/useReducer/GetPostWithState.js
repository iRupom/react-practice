import { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setLoding(false);
        setError("");
        setPost(data);
      })
      .catch(() => {
        setLoding(false);
        setPost({});
        setError("There is an error");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading..." : post.title}
      {error ? error : null}
    </div>
  );
}
