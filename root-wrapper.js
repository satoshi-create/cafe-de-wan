/*
=============== 
TODO
1.Navbar
2.googlemap
===============
*/

import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { GatsbyProvider } from './src/context/context'

// const GlobalStyle = createGlobalStyle`

// /*
// =============== 
// Font
// ===============
// */
// @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Josefin+Sans:wght@700&family=Noto+Sans+JP&display=swap');
// /*
// =============== 
// Variables
// ===============
// */
// :root{
//   --clr-black:#222;
//   --clr-white:#fff;
//   --clr-light-orange:#fff7e2;
//   --clr-middle-orange:#ffbb77;
//   --clr-orange:#f3973c;
//   --clr-light-blue:#bcf9f9;
//   --max-width:1080px;
//   --site-font:'Dancing Script', cursive;
//   --title-font:'Josefin Sans', sans-serif;
//   --subtitle-font:'Noto Sans JP', sans-serif;
//   --transition:all 0.3s linear;
// }
// /*
// =============== 
// Global Styles
// ===============
// */
// *,
// ::after,
// ::before{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   list-style: none;
// }
// body{
//  font-family:'メイリオ', 'Meiryo','ＭＳ ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
//  line-height: 1.5;
// }
// a{
//   text-decoration: none;
//   color: inherit;
// }
// img{
//   max-width: 100%;
//   height: auto;
//   vertical-align: bottom;
//   object-fit: cover;
// }
// h1,
// h2{
//   font-weight: bold;
// }
// h1{
//   font-family: var(--site-font);
//   font-size: 36px;
// }
// h2{
//   font-family: var(--title-font);
//   font-size: 30px;
// }
// h3,
// h4{
//   font-family: var(--subtitle-font);
//   font-weight: normal;
// }
// h3{
//   font-size: 20px;
// }
// h4{
//   font-size: 18px;
// }
// p{
//   font-size: 16px;
// }
// @media screen and (min-width: 768px){
//   h1{
//     font-size: 55px;
//   }
//   h2{
//     font-size: 36px;
//   }
//   h3{
//     font-size: 24px;
//   }
//   h4{
//     font-size: 20px;
//   }
// }

// /* グリットレイアウト */
// .partsGrid{
//   display: grid;
//   grid-template-columns: minmax(8vw,1fr) minmax(auto,1088px) minmax(8vw,1fr);
// }
// .partsGrid > *{
//   grid-column: 2;
// }
// .grid12{
//   display: grid;
//   grid-template-columns: repeat(4,1fr);
//   grid-column-gap: 10px;
// }
// .grid12 > *{
//   grid-column: 1/-1;
// }
// @media (min-width: 768px) {
//   .grid12 {
//     grid-template-columns: repeat(12, 1fr);
//   }
// }

// /*
// =============== 
// section styles
// ===============
// */
// /* section-title */
// .section-title{
//   margin-bottom: 50px;
// }
// .section-title .underline{
//   border-top: 5px dotted;
//   color: var(--clr-orange);
//   width: 120px;
//   padding-top: 5px;
// }
// /* odd */
// .section-title.odd h2{
//   display: grid;
//   grid-template-columns: 48px auto;
//   align-items: center;
//   grid-column-gap: 15px;
// }
// .section-title.odd h2::before{
//     content: url(${nikukyu});
//     display: block;
// }
// .section-title.odd .underline{
//   margin-left: 70px;
// }
// .section-title.odd h3{
//   margin-left: 70px;
// }
// /* even */
// .section-title.even{
//   grid-row: 1;
//   justify-self: flex-end;
//   z-index: 2;
//   /* background-image: url("../images/fukidashi.svg"); */
// }
// .section-title.even h2{
//   display: grid;
//   grid-template-columns: auto 48px;
//   align-items: center;
//   grid-column-gap: 15px;
// }
// .section-title.even h2::after{
//   content:  url(${nikukyu});
//   display: block;
// }
// .section-title.even .underline{
//   margin-left: 130px;
// }
// .section-title.even h3{
//   margin-left: 70px;
// }

// .btn{
//   border: none;
//   background: none;
//   justify-self: flex-start;
//   cursor: pointer;
//   display: inline-block;
// }
// .btn:hover{
//   opacity: 0.6;
//   transition: var(--transition);
// }

// `
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  )
}
