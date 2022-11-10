import Meaning from "./Meaning";

const Meanings = (props) => {
  const { list } = props;
  return (
    <div className=" mt-12 px-4">
      <h2>Otros significados:</h2>
      <hr />
      <div>
        <ul className="grid grid-cols-2 gap-2">
          {list.map((item, index) => (
            <Meaning key={index} name={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Meanings;
