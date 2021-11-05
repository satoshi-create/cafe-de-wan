import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import logo from "../images/logo.svg";
import Msg from '../components/Msg';
import Dogs from '../components/Dogs';
import News from '../components/News';


const index = () => {
  return (
    <Layout>
      <Hero />
      <Msg />
      <Dogs />
      <News />
      <aside className="info">
        <div className="section-title">
          <h2>INFO</h2>
        </div>
        <div className="hours">
          <h4>営業時間</h4>
          <dl>
            <dt>月～金</dt>
            <dd>7:00 am - 9:00 pm</dd>
            <dt>土～日</dt>
            <dd>9:00 am - 8:00 pm</dd>
          </dl>
        </div>
        <div className="info-address">
          <h4>店舗情報</h4>
          <div>
            〒100-1701<br />
            東京都青ヶ島村<br />
            0997-1234-5678<br />
          </div>
        </div>
      </aside>
    </Layout >
  )
}

export default index
