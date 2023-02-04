import TechStackItem from './TeckStackItem';
import { fetchUserStackById } from '../../services/profile-service';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TechStackList = ({ user_id }) => {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    const getTechStack = async () => {
      const { data } = await fetchUserStackById(user_id);
      setStacks(data);
    };
    getTechStack();
  }, []);
  // 의존성 고려

  return (
    <TechListStyle>
      {stacks.map((stack) => (
        <TechStackItem
          key={stack.id}
          id={stack.tech_id}
          image={stack.tech_logo}
          name={stack.tech_name}
          title={stack.tech_id}
        />
      ))}
    </TechListStyle>
  );
};

export default TechStackList;

const TechListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;
