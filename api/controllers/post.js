import { db } from "../db.js";

export const getPost = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getSinglePost = (req, res) => {
  console.log(req.params.id)
  const q =
    "SELECT  username, title, descrip, p.img, u.img AS userImg, cat, date FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?";
  db.query(q, [req.params.id], (error, data)=> {
    if(error) return res.json(error)

    return res.status(200).json(data[0])
  })
  };

export const addPost = (req, res) => {
  res.json("test");
};

export const deletePost = (req, res) => {
  res.json("test");
};

export const updatePost = (req, res) => {
  res.json("test");
};
