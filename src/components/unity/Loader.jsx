import CircularProgressWithLabel from './CircularProgressWithLabel';

// const texts =

function Loader({ progress }) {
  return (
    <>
      <CircularProgressWithLabel value={Math.round(progress * 100)} />
    </>
  );
}

export default Loader;
