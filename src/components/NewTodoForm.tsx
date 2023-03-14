import { useRef } from "react";

interface newTodoFromProps {
  handleClick: (text: string) => void;
}

const NewTodoForm = ({ handleClick }: newTodoFromProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <input type="text" placeholder="new todo" ref={inputRef} />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
