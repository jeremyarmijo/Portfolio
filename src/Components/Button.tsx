import React from 'react';

interface ButtonProps {
  color_label: string;
  label: string;
  backgroundImage: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ color_label, label, backgroundImage, onClick }) => {
  const buttonStyle = {
    color: `${color_label}`,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <button className="button" style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
