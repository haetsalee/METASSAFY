import React from 'react';
import PhoneModal from '../UI/modal/PhoneModal';
import PhoneClose from './PhoneClose';
import PhoneFriendPage from '../../pages/phone_pages/PhoneFriendPage';

const PhoneTest = (props) => {
  return (
    <PhoneModal>
      <PhoneClose onClose={props.onClose} />
      <p>게시판(방명록) 혹은 화상채팅 자리</p>
    </PhoneModal>
  );
};

export default PhoneTest;
