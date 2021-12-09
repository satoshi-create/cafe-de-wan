import React from 'react'
import Layout from '../components/Layout'
import Seo from "../components/Seo";
import Test from "../styled-component/Test";

const content = () => {
  return (
    <Layout>
      <Seo title="Contents" />
     <Test/>
    </Layout>
  )
}

export default content
