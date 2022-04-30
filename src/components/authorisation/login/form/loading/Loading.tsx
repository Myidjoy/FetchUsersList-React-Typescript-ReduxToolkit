import React, {FC} from 'react';
import './Loading.css';


const Loading: FC = (): JSX.Element => {
  return (
    <figure className='authorisation__loading'>
      <label>loading...</label>
      <div/>  
    </figure>
  );
};

export default Loading;