import { readFile } from "fs/promises";

const data = JSON.parse(
  await readFile(new URL("../databaseFake/list.json", import.meta.url))
);

export const getAll = async (req, res) => {
  await res.json(data);
};

export const getRandom = async (req, res) => {
  const number = Math.floor(Math.random() * 400 + 1);
  const {
    gerund,
    pastParticiple,
    simpleForm,
    simplePast,
    thirdPerson,
    type,
    _id,
  } = data.filter((element) => element._id === number)[0];
  await res.status(200).send({
    gerund,
    pastParticiple,
    simpleForm,
    simplePast,
    thirdPerson,
    type,
    _id,
  });
};

export const verifyResponse = async (req, res) => {
  const { id, response } = req.body;
  const itemFound = await data.filter(({ _id }) => _id === id)[0].meaning;
  const exist = await itemFound.find(
    (item) => item.toLowerCase() === response.trim().toLowerCase()
  );
  exist === undefined
    ? res.json({
        status: 204,
        message: "Error intente nuevamente",
        options: [],
      })
    : res.json({ status: 200, message: "Correcto!!", options: itemFound });
};

export const findByWord = (req, res) => {
  const { word } = req.params;
  const words = [];
  data.forEach((objeto) => {
    if (objeto.simpleForm.toLowerCase().includes(word.trim().toLowerCase())) {
      words.push({
        simpleForm: objeto.simpleForm.toLowerCase(),
        meaning: objeto.meaning,
      });
    }
  });
  res.status(200).json(words);
};
