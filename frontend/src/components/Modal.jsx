import { useState } from "react";
import IconClose from "./Icons/IconClose";
import Input from "./Input";
import query from "../database/query";
import { useEffect } from "react";

const Modal = (props) => {
  const { setModalOn } = props;
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };

  const escPress = (evt) => {
    if (evt.key === "Escape") {
      setModalOn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escPress);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    text.length > 0
      ? query
          .get(`http://localhost:5000/api/dictionary/${text}`)
          .then(({ data }) => setWords(data))
          .catch((err) => console.log(err))
      : setWords([]);
  };
  const handleClose = () => {
    setModalOn(false);
  };
  return (
    <div className=" bg-zinc-400 opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <button
          onClick={handleClose}
          className="absolute top-10 right-10 bg-zinc-700 hover:bg-white rounded-full w-10 h-10 animate-pulse hover:animate-none"
        >
          <IconClose size={7} color="silver" />
        </button>
        <div className="flex-col justify-center w-11/12 bg-white py-2 px-2 rounded-xl">
          <div>
            <form className="text-center" onSubmit={handleSubmit}>
              <Input
                className="w-full p-2 my-3 border border-b-slate-600 border-b-2 border-l-0 border-t-0 border-r-0 outline-none"
                name="question"
                placeholder="Palabra"
                handleChange={handleChange}
              />
              <button className=" bg-orange-400 text-orange-700 px-3 py-1.5 rounded-md">
                Buscar
              </button>
            </form>
            <div>
              <ul>
                {words.map(({ meaning }, index) => (
                  <li className="grid grid-cols-3 gap-2" key={index}>
                    {meaning.map((word, index) => (
                      <div
                        key={index}
                        className="bg-slate-200 text-slate-800 rounded-md text-center py-2 my-2"
                      >
                        {word}
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
