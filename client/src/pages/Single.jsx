import React from "react";
import Edit from "../assets/images/edit.png";
import Delete from "../assets/images/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image"
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
            alt="image"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Delete} alt="delete" />
            </Link>
            <Link to={`/write?delete=2`}>
              <img src={Edit} alt="edit" />
            </Link>
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, rem.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iure. Optio necessitatibus est iste labore repellendus voluptates. Ipsam fugiat odit delectus nulla at quia facere obcaecati. Autem a mollitia provident sequi ipsa recusandae ex commodi, consequuntur temporibus nam inventore tenetur optio, expedita tempora perferendis facilis exercitationem, ratione molestiae laborum beatae!
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus pariatur, eveniet, eum expedita illum quod consequuntur officia mollitia soluta ducimus, consequatur dolor iusto fugiat odio neque placeat. Suscipit, laudantium!
        </p>     
      </div>

      <Menu/>
    </div>
  );
};

export default Single;
