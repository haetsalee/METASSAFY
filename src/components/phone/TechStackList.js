import TechStackItem from './TeckStackItem';

function TechStackList(props) {
  return (
    <ul>
      {props.stacks.map((stack) => (
        <TechStackItem
          key={stack.id}
          id={stack.tech_id}
          image={stack.tech_logo}
          name={stack.tech_name}
          title={stack.tech_id}
        />
      ))}
    </ul>
  );
}

export default TechStackList;
