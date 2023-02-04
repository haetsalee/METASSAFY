import React from 'react';
import PhoneModal from '../UI/modal/PhoneModal';
import PhoneClose from './PhoneClose';

const PhoneTest = (props) => {
  return (
    <PhoneModal>
      <PhoneClose onClose={props.onClose} />
      <h1>Hii</h1>
    </PhoneModal>
  );
};

export default PhoneTest;
