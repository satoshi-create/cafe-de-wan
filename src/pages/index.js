import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Msg from "../components/Msg";
import Dogs from "../components/Dogs";
import News from "../components/News";
import Info from "../components/Info";
import Seo from "../components/Seo";

const index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero style={{ height: "100vh" }} />
      <Msg />
      <Dogs />
      <News />
      <Info />
    </Layout>
  );
};

export default index;
