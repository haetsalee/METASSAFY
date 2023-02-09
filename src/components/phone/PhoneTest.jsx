import React from 'react';
import PhoneModal from '../UI/modal/PhoneModal';
import PhoneClose from './PhoneClose';
import PhoneFriendPage from '../../pages/phone_pages/PhoneFriendPage';

const PhoneTest = (props) => {
  return (
    <PhoneModal>
      <PhoneClose onClose={props.onClose} />
      <PhoneFriendPage unityKeyX={props.unityKeyX} />
    </PhoneModal>
  );
};

export default PhoneTest;
