import express from "express";
const hostname = "127.0.0.1";
const app = express();
const port = 3000;

const cats = [
  {
    cat_id: 1,
    name: "One",
    birthdate: "2020-01-01",
    weight: 1,
    owner: "john smith",
    image: "https://loremflickr.com/320/240/cat",
  },
  {
    cat_id: 2,
    name: "Two",
    birthdate: "0001-12-12",
    weight: 12344312,
    owner: "jonathan doe",
    image: "https://loremflickr.com/320/240/cat",
  },
];

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use("/public", express.static("public"));

//app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/v1/cats", (req, res) => {
  res.json(cats);
});
