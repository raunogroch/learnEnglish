import { useState, useEffect } from "react";
import query from "../database/query";

const useChallenge = () => {
  const [challenge, setChallenge] = useState({});
  const [loading, setLoading] = useState(true);
  if (loading) {
    query
      .get("http://localhost:5000/api/dictionary/rand")
      .then(({ data }) => {
        setChallenge(data);
        setLoading(false);
        return true;
      })
      .catch((err) => console.error(err));
  }
  return [challenge, loading, setLoading];
};

export default useChallenge;
