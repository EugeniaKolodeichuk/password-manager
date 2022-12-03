import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PasswordItems from '../components/PasswordItems/PasswordItems';
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
            <PasswordItems />
            {/* <h1>Password</h1> */}
            {/*  <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />  */}
        </>
    );
}
