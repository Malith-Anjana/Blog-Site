/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import proxy from "../proxy";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchData = async()=>{
      try {
        const res = await axios.get(`${proxy}/posts/?cat=${cat}`)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [cat])

  return (
    <div className="menu">
      <h1>Other Posts you may like</h1>
        {posts.map((post) => (
          <div className="post" key={post.id}>
              <img src={post.img} alt="image" />
              <h2>{post.title}</h2>
              <button>Run More</button>
          </div>
        ))}
      </div>

  );
};

export default Menu;
