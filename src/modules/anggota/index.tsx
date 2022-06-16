import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/general';

import Anggota from './view/Anggota';

function Modules(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Anggota />} />
      </Routes>
    </Layout>
  );
}

export default Modules;