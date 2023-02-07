import { Fragment } from 'react';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';

const Heart = ({ isLike }) => {
  return (
    <Fragment>
      {!!isLike && <BsSuitHeartFill color="red" fontSize="1.3rem" />}
      {!isLike && <BsSuitHeart fontSize="1.3rem" />}
    </Fragment>
  );
};

export default Heart;
