import React from 'react'
import Layout from "../components/Layout";
import Hero from '../components/Hero';

const Error = () => {
  return (
    <Layout>
      <Hero
      style={{ height: "60vh" }}
      />
      <h1>404</h1>
      <h3>ページが見つかりません。</h3>
    </Layout>
  )
}

export default Error
