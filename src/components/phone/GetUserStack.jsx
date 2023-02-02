import { useState, useEffect } from 'react';
import { fetchUserStackById } from '../../services/auth-service';
import TechStackList from './TechStackList';

function GetProfile(props) {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedStacks, setLoadedStacks] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('http://i8d211.p.ssafy.io:8088/metassafy/user/techList/ssafy')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const stacks = [];

  //       for (const key in data) {
  //         const stack = {
  //           id: key,
  //           ...data[key],
  //         };

  //         stacks.push(stack);
  //       }

  //       setIsLoading(false);
  //       setLoadedStacks(stacks);
  //     });
  // }, []);
  // // 의존성 고려
  const [isLoading, setIsLoading] = useState(true);
  const [userStack, setUserStack] = useState({});
  useEffect(() => {
    const user_id = props.name;
    const getUserStack = async (user_id) => {
      const userData = await fetchUserStackById(user_id);
      // setUserStack(userData.data);
      console.log('-----------');
      console.log(userData.data);
      const data = userData.data;

      for (let tech of userData.data) {
        console.log(tech);
      }
      const stacks = [];
      for (const key in data) {
        const stack = {
          id: key,
          ...data[key],
        };

        stacks.push(stack);
      }

      setIsLoading(false);
      setUserStack(stacks);
    };

    getUserStack(user_id);
  }, []);
  // 의존성 고려

  console.log(userStack);

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
      {/* <TechStackList stacks={loadedStacks} /> */}
      <TechStackList stacks={userStack} />
    </section>
  );
}

export default GetProfile;
