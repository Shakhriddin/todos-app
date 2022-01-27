import {useState} from 'react';

const useInput = (inputValue) => {
  const [value, setValue] = useState(inputValue);
  const onChange = (event) => setValue(event.target.value);

  return {
    value,
    setValue,
    onChange,
  };
};

export default useInput;