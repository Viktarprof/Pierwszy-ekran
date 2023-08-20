import React from "react";
import s from "./StateProductList.module.css";
import { data } from '../../data/data';
import StateProduct from "../StateProduct/StateProduct";

function StateProductList() {
  return (
    <div className={s.productsList}>
      {data.map((el) => (
        <>
          <StateProduct key={el.id} {...el}/>
        </>
      ))}
    </div>
  );
}

export default StateProductList;
