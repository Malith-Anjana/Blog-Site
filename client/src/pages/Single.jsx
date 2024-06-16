import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${proxy}/posts/${postId}`,  { withCredentials: true });
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${proxy}/posts/${postId}`, { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
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
              <img onClick={handleDelete} src={Delete} alt="delete" />

              <Link to={`/write?edit=${postId}`} state={post}>
                <img src={Edit} alt="edit" />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: post.descrip}}/>
      </div>

      <Menu cat={post.cat}/>
    </div>
  );
};

export default Single;
