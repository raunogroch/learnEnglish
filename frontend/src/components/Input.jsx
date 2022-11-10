const Input = (props) => {
  const { ref, value, name, handleChange, className, placeholder } = props;
  return (
    <input
      className={className}
      type="text"
      name={name}
      value={value}
      autoComplete="off"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
