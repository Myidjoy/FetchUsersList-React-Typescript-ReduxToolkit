import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchUsers} from "./reducers/userReducer"

function App() {
  const {status, users} = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  console.log(users)
  return (
    <>
      <div> 
        {status === 'loading' 
        ? <div>загрузка</div>:
        status === 'succeeded'
        ?  users.map((user) => <div key={user.id}>{user.name}</div>):     
        <div>юзеров нет]</div>
        }
      </div>
    <button onClick={() => {
      dispatch(fetchUsers())
    }}>
      кнопка
    </button>
    </>
    
  );
}

export default App;
