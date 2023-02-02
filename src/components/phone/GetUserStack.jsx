import { useState, useEffect } from 'react';
import TechStackList from './TechStackList';

function GetUserStack() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedStacks, setLoadedStacks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://i8d211.p.ssafy.io:8088/metassafy/user/techList/ssafy')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const stacks = [];

        for (const key in data) {
          const stack = {
            id: key,
            ...data[key],
          };

          stacks.push(stack);
        }

        setIsLoading(false);
        setLoadedStacks(stacks);
      });
  }, []);
  // 의존성 고려

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All TechStack</h1>
      {/* { [<li>Item1</li>, <li>Item2</li>] } */}
      {/* { DUMMY_DATA.map((meetup) => {
        return (
          <li key={meetup.id}>{meetup.title}</li>
          )
      })} */}
      <TechStackList stacks={loadedStacks} />
    </section>
  );
}

export default GetUserStack;
