import React, { ChangeEvent, MouseEvent } from "react";
import Button from '@mui/material/Button';

interface SearchBoxProps {
  handleChange: (newText: string) => void;
  handleReset: () => void;
};

const SearchBox: React.FC<SearchBoxProps> = props => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newText = e.target.value.toLowerCase();
    props.handleChange(newText);
  };

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