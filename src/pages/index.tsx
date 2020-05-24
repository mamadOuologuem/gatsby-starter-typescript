import React from 'react';
import Layout from '../layouts';
import NavBar from '../components/NavBar';
import Map from '../components/home/Map';

const IndexPage = () => (
  <Layout title="Home page">
    <NavBar />
    <Map />
  </Layout>
);

export default IndexPage;
