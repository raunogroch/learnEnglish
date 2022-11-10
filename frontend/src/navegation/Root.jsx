import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Challenge from "../pages/Challenge";
import List from "../pages/List";
import Main from "../pages/Main";

const Root = () => {
  return (
    <BrowserRouter>
      <ul className=" grid grid-flow-row gap-2 grid-cols-3 text-center m-2">
        <li>
          <Link
            className=" block bg-slate-600 px-3 py-2 text-white rounded-md hover:bg-slate-400"
            to="/"
          >
            Pagina principal
          </Link>
        </li>
        <li>
          <Link
            className=" block bg-slate-600 px-3 py-2 text-white rounded-md hover:bg-slate-400"
            to="/list"
          >
            vocabulario general
          </Link>
        </li>
        <li>
          <Link
            className=" block bg-slate-600 px-3 py-2 text-white rounded-md hover:bg-slate-400"
            to="/challenge"
          >
            Desafios
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
