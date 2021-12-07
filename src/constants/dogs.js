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
        age: "約3ヶ月",
        gender: "男の子",
        persona:
          "最初は犬見知りがあり、慣れるまで唸ってみせますが、すぐになれ、大人犬さんたちが嫌がるほど、本気ダッシュでおいかけまわすワンパクBOY♡",
      },
      {
        id: 2,
        name: "GB",
        src: gb,
        age: "約2歳",
        gender: "男の子",
        persona:
          "遊ぶのもお散歩も大好きな男の子。 元気いっぱいで好奇心も旺盛です☆",
      },
      {
        id: 3,
        name: "佐助",
        src: sasuke,
        age: "1年",
        gender: "男の子",
        persona: "人懐っこい甘えん坊です。",
      },
      {
        id: 4,
        name: "ヒロ",
        src: hiro,
        age: "約3ヶ月",
        gender: "男の子",
        persona: "まだ怖くて威嚇はしますが、攻撃はしません",
      },
      {
        id: 5,
        name: "ジェロム",
        src: reika,
        age: "1年",
        gender: "女の子",
        persona:
          "おっとりマイペースな女の子。 初めての人にはドキドキしますが、仲良くなると尻尾をフリフリしてくれます♪ 他のワンコとも楽しく遊んでいます☆ ",
      },
      {
        id: 6,
        name: "ウィード",
        src: weed,
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
        age: "約6ヶ月",
        gender: "男の子",
        persona:
          "マイペースな猫ちゃんです。周りが騒がしいときでもあわてません。じっくりと様子をうかがっています。撫でられるとゴロゴロのどを鳴らします♡",
      },
      {
        id: 2,
        name: "モンボウ",
        src: monbou,
        age: "約1歳",
        gender: "男の子",
        persona:
          "喧嘩が大好きで、ワンちゃんにも平然と立ち向かいます。生傷が絶えませんが、頼もしアニキです",
      },
      {
        id: 3,
        name: "ユメ",
        src: yume,
        age: "約3ヶ月",
        gender: "女の子",
        persona: "まだ人見知りをしますが。好奇心旺盛です。狭いところが大好きで、ときどき出てこれなくなります。",
      },
    ],
  },
];
export default dogs;
