import { useState } from "react";
import axios from "../api/axiosInstance";
import "../styles/CreatePost.css";

function CreatePost() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {

    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      setMessage("Please fill all fields.");
      return;
    }

    try {

      await axios.post("/posts", {
        title,
        body,
        userId: 1,
      });

      setMessage("Post Created Successfully!");

      setTitle("");
      setBody("");

    } catch {

      setMessage("Failed to create post.");

    }

  }

  return (

    <div className="create">

      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit}>

        <input

          type="text"

          placeholder="Post Title"

          value={title}

          onChange={(e)=>

          setTitle(e.target.value)

          }

        />

        <textarea

          placeholder="Post Body"

          value={body}

          onChange={(e)=>

          setBody(e.target.value)

          }

        />

        <button>

          Submit

        </button>

      </form>

      <p>{message}</p>

    </div>

  );

}

export default CreatePost;