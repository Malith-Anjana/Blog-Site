import { db } from "../db.js";
import jwt from 'jsonwebtoken';

export const getPost = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=? ORDER BY date DESC"
    : "SELECT * FROM posts ORDER BY date DESC";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getSinglePost = (req, res) => {
  console.log(req.params.id)
  const q =
    "SELECT p.id, username, title, descrip, p.img, u.img AS userImg, cat, date FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?";
  db.query(q, [req.params.id], (error, data)=> {
    if(error) return res.status(500).json(error)

    return res.status(200).json(data[0])
  })
  };

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if(!token) return res.status(401).json("Not authenticated");

  jwt.verify(token,"customJWTkey", (err, userInfo)=> {
    if(err) return res.status(403).json("Token is not valid");

    const q = "INSERT INTO posts(title, descrip, img, cat, date, uid) VALUES (?)";
    const value = [
      req.body.title,
      req.body.descrip,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id
    ]
    db.query(q, [value], (err, data)=>{
      if(err) return res.status(500).json("You can edit only your post!");

      return res.status(200).json("Post has been Created!")
    })

  })
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if(!token) return res.status(401).json("Not authenticated");

  jwt.verify(token,"customJWTkey", (err, userInfo)=> {
    if(err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE id=? AND uid=?";

    db.query(q, [postId, userInfo.id], (err, data)=>{
      if(err) return res.status(403).json("You can delete only your post!");

      return res.status(200).json("Post has been deleted!")
    })

  })

};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if(!token) return res.status(401).json("Not authenticated");

  jwt.verify(token,"customJWTkey", (err, userInfo)=> {
    if(err) return res.status(403).json("Token is not valid");

    const postId = req.params.id
    const q = "UPDATE posts SET title=?, descrip=?, img=?, cat=? WHERE id=? AND uid=?";
    const value = [
      req.body.title,
      req.body.descrip,
      req.body.img,
      req.body.cat,
    ]
    db.query(q, [...value, postId, userInfo.id], (err, data)=>{
      if(err) return res.status(500).json("You can delete only your post!");

      return res.status(200).json("Post has been Updated!")
    })

  })
};
