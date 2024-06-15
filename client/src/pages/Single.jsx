import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Delete from "../assets/images/delete.png";
import Edit from "../assets/images/edit.png";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import proxy from "../proxy";
import axios from "axios";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${proxy}/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="image" />

        <div className="user">
          {post.userImg && <img src={post.userImg} alt="image" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Delete} alt="delete" />
              </Link>
              <Link to={`/write?delete=2`}>
                <img src={Edit} alt="edit" />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.descrip}
      </div>

      <Menu />
    </div>
  );
};

export default Single;
