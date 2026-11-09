import {
  listAllCats,
  findCatById,
  addCat,
  modifyCat,
  removeCat,
} from "../models/cat-model.js";

const getAllCats = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(Number(req.params.id));
  if (cat) {
    res.json(cat);
  } else {
    res.status(404).json({ error: "Cat not found" });
  }
};

const postCat = (req, res) => {
  const id = addCat(req.body);
  res.status(201).json({ cat_id: id });
};

const putCat = (req, res) => {
  const result = modifyCat(Number(req.params.id), req.body);
  if (result) {
    res.json({ message: "Cat updated succesfully" });
  } else {
    res.status(404).json({ error: "Cat not found" });
  }
};

const deleteCat = (req, res) => {
  const result = removeCat(Number(req.params.id));
  if (result) {
    res.json({ message: "Cat deleted succesfully" });
  } else {
    res.status(404).json({ error: "Cat not found" });
  }
};

export { getAllCats, getCatById, postCat, putCat, deleteCat };
