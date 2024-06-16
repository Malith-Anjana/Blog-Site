import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import proxy from '../proxy'
const Home = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  const cat = location.search;

  useEffect(() => {
    const fetchData = async()=>{
      try {
        const res = await axios.get(`${proxy}/posts${cat}`)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [cat])

  const limitWords = (text, wordLimit) => {
    const words = text.split(' ');
    return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
  };


  return (
    <div className="home">
      <div className="posts">
        {posts?.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="image" />
            </div>
            <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: limitWords(post.descrip, 55) }}/>
              <button>Run More</button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
