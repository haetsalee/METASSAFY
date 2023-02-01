import Dropdown from '../../auth/Dropdown';

const DropdownInput = ({ title, data }) => {
  console.log(title, data);
  return <Dropdown list={data} title={title} width="100%"></Dropdown>;
};

export default DropdownInput;
