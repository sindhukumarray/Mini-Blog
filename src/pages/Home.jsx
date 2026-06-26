import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import "../styles/Home.css";

function Home() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    async function fetchPosts() {

      try {

        setLoading(true);

        const res = await axios.get(
          `/posts?_page=${page}&_limit=5`
        );

        setPosts(res.data);

        setError("");

      } catch (err) {

        setError("Failed to load posts.");

      } finally {

        setLoading(false);

      }

    }

    fetchPosts();

  }, [page]);

  return (

    <div className="home">

      <h1>Mini Blog</h1>

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error && (

        <>

          <div className="post-list">

            {posts.map((post) => (

              <div
                className="post-card"
                key={post.id}
              >

                <h3>{post.title}</h3>

                <p>{post.body}</p>

              </div>

            ))}

          </div>

          <div className="buttons">

            <button

              disabled={page===1}

              onClick={()=>

                setPage(page-1)

              }

            >

              Previous

            </button>

            <span>

              Page {page}

            </span>

            <button

              onClick={()=>

                setPage(page+1)

              }

            >

              Next

            </button>

          </div>

        </>

      )}

    </div>

  );

}

export default Home;