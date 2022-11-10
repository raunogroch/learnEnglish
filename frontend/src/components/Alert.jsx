const Alert = ({ code = 0, message = "" }) => {
  const alert = {
    404: "block bg-orange-400 text-orange-800 border rounded-md py-2 px-2 my-2 fixed top-20 sm:top-16 left-[50%] translate-x-[-50%] w-2/4",
    204: "block bg-red-400 text-red-800 border rounded-md px-2 py-2 my-2 fixed top-20 sm:top-16 left-[50%] translate-x-[-50%] w-2/4",
    200: "block bg-green-400 text-green-800 border rounded-md px-2 py-2 my-2 fixed top-20 sm:top-16 left-[50%] translate-x-[-50%] w-2/4",
  };
  return (
    <div className={alert[code] + " transition duration-300 ease-out "}>
      {message}
    </div>
  );
};
export default Alert;
