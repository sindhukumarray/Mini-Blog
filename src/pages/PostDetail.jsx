import { useEffect,useState } from "react";

import { useParams } from "react-router-dom";

import axios from "../api/axiosInstance";
import "../styles/PostDetail.css";
function PostDetail(){

const {id}=useParams();

const [post,setPost]=useState(null);

const [loading,setLoading]=useState(true);

const [error,setError]=useState("");

useEffect(()=>{

fetchPost();

},[id]);

async function fetchPost(){

try{

setLoading(true);

const res=

await axios.get(`/posts/${id}`);

setPost(res.data);

}catch{

setError("Post Not Found");

}

finally{

setLoading(false);

}

}

if(loading){

return <h2>Loading...</h2>;

}

if(error){

return <h2>{error}</h2>;

}

return(

<div className="detail">

<h1>{post.title}</h1>

<p>{post.body}</p>

</div>

);

}

export default PostDetail;