import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import { Layout } from './Layout';
import { Route } from 'react-router';
import { Routes } from 'react-router';

function App() {
    /* передавать при логин
  const loginUser = localStorage.getItem('login');
  if (!loginUser) {
    localStorage.setItem('login', 'email@email')
  }
  console.log('loginUser', loginUser);

  передавать при клике на регистр, вытягивать массив и пушить запись
  const registerList = localStorage.getItem('registerList');
  if (!registerList) {
    localStorage.setItem('registerList', JSON.stringify([
      {login: 'email', password: '1245'},
      {login: 'login2', password: 'jhhfhf', 
      data: [
        { site: 'www.google.com', password: '123456'},
        { site: 'www.i.ua', password: '123456' },
      ]
    },
    ]))
  }

  const sitesPasswords = localStorage.getItem('sitesPassword');
  if (!sitesPasswords) {
    localStorage.setItem(
      `sitesPassword-${loginUser}`, JSON.stringify({
        user: 'user.email@ukr.net',
        data: [
          { site: 'www.google.com', password: '123456'},
          { site: 'www.i.ua', password: '123456' },
        ]
      })
    )
  } */

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="/register"
                    element={<Register name="register" />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>

        /* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes> */
    );
}

export default App;
