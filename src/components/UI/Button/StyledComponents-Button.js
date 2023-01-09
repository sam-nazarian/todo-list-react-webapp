// import React from 'react';
import styled from 'styled-components';

// styled-components will create unique classNames which will be used, so this way the same elm styles won't overwrite & be applied in different components (unique classNames for every styled component)

// tact template literal syntax, styled is an object & we are calling the button method on it
// type={props.type} (under the hood) will apply the button type.
// Also styled-components applies a default onClick={props.onClick} click event setup.
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto; //button takes as much space as it needs
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// The JSX Code below replaced by code above

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
