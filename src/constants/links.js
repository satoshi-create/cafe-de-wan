import React from "react"
import { FaHome ,FaBlogger,FaEnvelope} from "react-icons/fa";


const data = [
  {
    id: 1,
    text: "ホーム",
    icon:<FaHome/>,
    url: "/",
  },
  {
    id: 2,
    text: "ブログ",
    icon:<FaBlogger/>,
    url: "/about/",
  },
  {
    id: 3,
    text: "お問い合わせ",
    icon:<FaEnvelope/>,
    url: "/contact/",
  },
]

export default data
