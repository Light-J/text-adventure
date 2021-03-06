import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 10px;
  align-items: center;
  appearance: none;
  background-color: #61000a;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#3b0006 0 -3px 0 inset;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 40px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;


    &:focus {
    box-shadow: #3b0006 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3b0006 0 -3px 0 inset;
    }

    &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3b0006 0 -3px 0 inset;
    transform: translateY(-2px);
    }

    &:active {
    box-shadow: #3b0006 0 3px 7px inset;
    transform: translateY(2px);
    }
`;

const ResetButton = ({onReset}) => {
    return <Button onClick={() => onReset()}>Restart game</Button>
}

export default ResetButton;