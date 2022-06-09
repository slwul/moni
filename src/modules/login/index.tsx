import {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import shallow from 'zustand/shallow';

import {useAuth} from 'lib/auth-provider/context';

import Layout from 'layouts/general';

import Login from './views/login';

function Modules(): JSX.Element {
  const navigate = useNavigate();
  const [isAuth] = useAuth(state => [state.isAuth], shallow);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default Modules;
