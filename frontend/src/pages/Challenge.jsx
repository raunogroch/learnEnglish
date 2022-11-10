import { useState } from "react";
import Alert from "../components/Alert";
import IconHelp from "../components/Icons/IconHelp";
import Input from "../components/Input";
import Meanings from "../components/Meanings";
import Modal from "../components/Modal";
import useChallenge from "../customHooks/useChanllenge";
import query from "../database/query";
const Challenge = () => {
  const [modalOn, setModalOn] = useState(false);
  const [alert, setAlert] = useState({});
  const [list, setMeanings] = useState([]);
  const [response, setResponse] = useState("");
  const [challenge, loading, setLoading] = useChallenge();

  const handleChange = ({ target }) => {
    const { value } = target;
    setResponse(value);
  };

  const negativeResponse = () => {
    setResponse("");
    setTimeout(() => {
      setAlert({});
      setMeanings([]);
    }, 5000);
  };

  const positiveResponse = (data) => {
    setMeanings(data.options);
    setResponse("");
    setTimeout(() => {
      setAlert({});
      setMeanings([]);
      setLoading(true);
    }, 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (response !== "") {
      const { data } = await query.post(
        "http://localhost:5000/api/dictionary",
        {
          id: challenge._id,
          response,
        }
      );
      setAlert({ code: data.status, message: data.message });
      data.status !== 200 ? negativeResponse : positiveResponse(data);
      return;
    }
    setAlert({ code: 404, message: "no puedes validar un campo vacio" });
  };

  const handleModal = () => {
    setModalOn(true);
  };

  return (
    <>
      <div className="flex justify-center mt-24">
        <div className=" flex-col justify-center text-center w-2/3">
          <Alert code={alert.code} message={alert.message} />
          <div>
            {loading
              ? "cargando..."
              : `que significa "${challenge.simpleForm.toLowerCase()}" en español?`}
          </div>
          <div className="p-2">
            <form onSubmit={handleSubmit}>
              <Input
                className="w-full p-2 my-3 text-center border border-b-slate-200 focus:border-b-slate-500 border-b-1 border-l-0 border-t-0 border-r-0 outline-none"
                value={response}
                name="answer"
                handleChange={handleChange}
              />
            </form>
          </div>
          {list.length > 0 ? <Meanings list={list} /> : ""}
        </div>
      </div>
      <button
        onClick={handleModal}
        className="absolute bottom-5 right-5 bg-red-500 w-10 h-10 rounded-full flex justify-center items-center animate-pulse"
      >
        <IconHelp size={6} color="white" />
      </button>
      {modalOn && <Modal setModalOn={setModalOn} />}
    </>
  );
};

export default Challenge;
