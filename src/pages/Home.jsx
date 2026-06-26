import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import "../styles/Home.css";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
function Home() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);

  useEffect(() => {

    fetchPosts();

  }, [page]);

  async function fetchPosts() {

    try {

      setLoading(true);

      const res = await axios.get(
        `/posts?_page=${page}&_limit=5`
      );

      setPosts(res.data);

    } catch {

      setError("Failed to load posts");

    } finally {

      setLoading(false);

    }

  }

  if (loading) {

    return <h2>Loading...</h2>;

  }

  if (error) {

    return <h2>{error}</h2>;

  }

  return (

    <div className="home">

      <h1>Mini Blog</h1>

      {

        posts.map((post)=>(

          <div
          className="card"
          key={post.id}
          >

            <h3>{post.title}</h3>

            <p>{post.body}</p>

            <Link

                to={`/posts/${post.id}`}

            >

               Read More

            </Link>

          </div>

        ))

      }

    <Pagination

        page={page}

        setPage={setPage}

    />

    </div>

  );

}

export default Home;