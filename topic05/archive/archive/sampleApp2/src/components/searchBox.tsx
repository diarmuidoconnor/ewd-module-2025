import { ChangeEvent, MouseEvent } from "react";
import Button from '@mui/material/Button';

type SearchBoxProps = {
  handleChange: (newText: string) => void;
  handleReset: () => void;
};

// Captures search input and exposes reset action through callbacks.
const SearchBox = (props: SearchBoxProps) => {
  // Normalizes and forwards current input text to the parent.
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newText = e.target.value.toLowerCase();
    props.handleChange(newText);
  };

  // Calls parent reset handler when the reset button is clicked.
  const onReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.handleReset();
  };

  return <>
    <input type="text" placeholder="Search" onChange={onChange} />
    <Button onClick={onReset}>Reset</Button>
    </>
};

export default SearchBox;