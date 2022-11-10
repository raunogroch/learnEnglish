const Meaning = (props) => {
  const { name } = props;
  return (
    <li className=" border bg-neutral-200 text-neutral-800 rounded-md bg-none py-2 my-2">
      {name}
    </li>
  );
};

export default Meaning;
