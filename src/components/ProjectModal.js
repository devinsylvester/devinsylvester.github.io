import React from 'react';
import { XCircle } from 'react-feather';
import { Colors } from '../config/styles';

const ModalCard = ({
  onClick, children
}) => (
  <div className="ma3 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
    <div className="w-100 bg-white absolute z-2 mw6"
      style={{
        }}>
      <div
        className="absolute right-1 top-1 pointer"
        onClick={onClick}
        onKeyPress={onClick}
        role="button">
        <XCircle color={Colors.silver} size={20} />
      </div>
      {children}
    </div>
    <div
      role="button"
      className="fixed top-0 bottom-0 right-0 left-0 z-1"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      }}
      onClick={onClick} />
  </div>
);

export default ModalCard;
