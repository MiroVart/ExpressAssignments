const cats = [
  {
    cat_id: 1,
    name: "One",
    birthdate: "2020-01-01",
    weight: 1,
    owner: "john smith",
    image: "https://loremflickr.240/320/240/cat",
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

const listAllCats = () => {
  return cats;
};

const findCatById = (id) => {
  return cats.find((item) => item.cat_id === id);
};

const addCat = (cat) => {
  const { cat_name, birthdate, weight, owner, image } = cat;
  const newId = cats[0].cat_id + 1;
  cats.unshift({
    cat_id: newId,
    cat_name,
    birthdate,
    weight,
    owner,
    image,
  });
  return newId;
};

const modifyCat = (id, newDetails) => {
  const index = cats.findIndex((cat) => id === cat.cat_id);
  cats[index] = { ...cats[index], ...newDetails };
  return index !== -1;
};

const removeCat = (id) => {
  const index = cats.findIndex((cat) => id === cat.cat_id);
  cats.splice(index, 1);
  return index !== -1;
};

export { listAllCats, findCatById, addCat, modifyCat, removeCat };
