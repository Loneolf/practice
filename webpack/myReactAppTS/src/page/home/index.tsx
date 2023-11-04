import React from "react";
import style from "./index.scss";

export default function Home() {
  console.log(style)
  return <h1 className={style.homeTitle}>Home~~~</h1>;
}
