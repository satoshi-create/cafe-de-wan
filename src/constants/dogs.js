import React from "react";
import moal from "../images/moal.jpg";
import gb from "../images/gb.jpg";
import sasuke from "../images/sasuke.jpg";
import hiro from "../images/hiro.jpg";
import reika from "../images/reika.jpg";
import weed from "../images/weed.jpeg";
import haku from "../images/haku.jpg";
import monbou from "../images/monbou.jpg";
import yume from "../images/yume.jpg";

const dogs = [
  {
    id: 1,
    cat: "dog",
    cls:"dog",
    bln:true,
    set: [
      {
        id: 1,
        name: "モール",
        src: moal,
        clr:"radial-gradient( circle farthest-corner at 50.7% 54%,  rgba(204,254,152,1) 0%, rgba(229,253,190,1) 92.4% );",
        age: "約3ヶ月",
        gender: "男の子",
        persona:
          "最初は犬見知りがあり、慣れるまで唸ってみせますが、すぐになれ、大人犬さんたちが嫌がるほど、本気ダッシュでおいかけまわすワンパクBOY♡",
      },
      {
        id: 2,
        name: "GB",
        src: gb,
        clr:"linear-gradient( 101.9deg,  rgba(253,183,220,1) 25%, rgba(240,213,190,1) 38.1%, rgba(249,240,206,1) 55.5%, rgba(253,244,210,1) 67.3%, rgba(222,248,226,1) 85.2%, rgba(200,247,242,1) 103.6% );",
        age: "約2歳",
        gender: "男の子",
        persona:
          "遊ぶのもお散歩も大好きな男の子。 元気いっぱいで好奇心も旺盛です☆",
      },
      {
        id: 3,
        name: "佐助",
        src: sasuke,
        clr:"linear-gradient( 109.6deg, rgba(180,214,242,1) 11.2%, rgba(72,67,221,0.72) 100.2% );",
        age: "1年",
        gender: "男の子",
        persona: "人懐っこい甘えん坊です。",
      },
      {
        id: 4,
        name: "ヒロ",
        src: hiro,
        clr:"linear-gradient( 88.4deg,  rgba(242,18,18,1) -0.6%, rgba(237,166,35,1) 50.8%, rgba(245,250,52,1) 101.1% );",
        age: "約3ヶ月",
        gender: "男の子",
        persona: "まだ怖くて威嚇はしますが、攻撃はしません",
      },
      {
        id: 5,
        name: "ジェロム",
        src: reika,
        clr:"linear-gradient( 109.6deg,  rgba(90,209,243,1) 11.2%, rgba(254,135,245,1) 91.1% );",
        age: "1年",
        gender: "女の子",
        persona:
          "おっとりマイペースな女の子。 初めての人にはドキドキしますが、仲良くなると尻尾をフリフリしてくれます♪ 他のワンコとも楽しく遊んでいます☆ ",
      },
      {
        id: 6,
        name: "ウィード",
        src: weed,
        clr:"radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,187,26,1) 6.7%, rgba(161,0,0,1) 90.3% );",
        age: "約6ヶ月",
        gender: "男の子",
        persona:
          "他の犬たちと大運動会で大ハッスルすることもあれば一人の時間をじっくり過ごすことも大好き。育ちざかりなので活発です！",
      },
    ],
  },
  {
    id: 1,
    cat: "cat",
    cls:"cat",
    bln:false,
    set: [
      {
        id: 1,
        name: "ハク",
        src: haku,
        clr:"linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );",
        age: "約6ヶ月",
        gender: "男の子",
        persona:
          "マイペースな猫ちゃんです。周りが騒がしいときでもあわてません。じっくりと様子をうかがっています。撫でられるとゴロゴロのどを鳴らします♡",
      },
      {
        id: 2,
        name: "モンボウ",
        src: monbou,
        clr:"linear-gradient( 129.1deg,  rgba(243,199,83,1) 26.8%, rgba(18,235,207,1) 114.1% );",
        age: "約1歳",
        gender: "男の子",
        persona:
          "喧嘩が大好きで、ワンちゃんにも平然と立ち向かいます。生傷が絶えませんが、頼もしアニキです",
      },
      {
        id: 3,
        name: "ユメ",
        src: yume,
        clr:"linear-gradient( 109.6deg,  rgba(247,253,166,1) 11.2%, rgba(128,255,221,1) 57.8%, rgba(255,128,249,1) 85.9% );",
        age: "約3ヶ月",
        gender: "女の子",
        persona: "まだ人見知りをしますが。好奇心旺盛です。狭いところが大好きで、ときどき出てこれなくなります。",
      },
    ],
  },
];
export default dogs;
