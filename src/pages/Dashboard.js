import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PasswordList from '../components/PasswordList/PasswordList';

//import { TaskList } from 'components/TaskList/TaskList';
//import { TaskEditor } from 'components/TaskEditor/TaskEditor';

export default function Tasks() {
    /*  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]); */

    return (
        <>
            <Helmet>
                <title>Your passwords</title>
            </Helmet>
            <PasswordList />
            {/* <h1>Password</h1> */}
            {/*  <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />  */}
        </>
    );
}
