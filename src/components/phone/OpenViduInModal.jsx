import React from 'react';
import PhoneModal from '../UI/modal/PhoneModal';
import PhoneClose from './PhoneClose';
import OpenViduPage from '../../pages/OpenViduPage';

const OpenViduInModal = (props) => {
  return (
    <PhoneModal>
      <PhoneClose onClose={props.onClose} />
      <OpenViduPage></OpenViduPage>
    </PhoneModal>
  );
};

export default OpenViduInModal;
