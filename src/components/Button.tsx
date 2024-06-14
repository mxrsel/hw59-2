import React from 'react';

interface Props {
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>New joke</button>
  );
};

export default Button;