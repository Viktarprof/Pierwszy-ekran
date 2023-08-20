import React from "react";
import s from "./CreateProduct.module.css";
import Input from "../UI/Input/Input";
import search from "./media/search.svg";
import Button from "../UI/Button/Button";
import pictResult1 from "./media/pictResult1.png";
import scrolling from "./media/scrolling.svg";
import { AiOutlineLock } from "react-icons/ai";

function CreateProduct() {
  return (
    <div className={s.create_container}>
      <Input
        styles={"whatCreate"}
        placeholder={"What do you want to create?"}
      />
      <img width={54} className={s.search} src={search} alt="search" />
      <div className={s.btns_selector}>
        <Button styles={"btns"} text={"High Quality"} />
        <Button styles={"btns"} text={"Pop Art"} />
        <Button styles={"btns"} text={"Realistic Look"} />
      </div>
      <div className={s.previewContainer}>
        <div className={s.previewImg}>
          <p className={s.text}>Style preview</p>
          <img width={103} src={pictResult1} alt="pictResult1" />
        </div>
        <div className={s.select_container}>
          <img src={scrolling} alt="scrolling" />
          <div className={s.result}>
            <p className={s.nameResult}>MINIMALISTIC</p>
            <div className={s.selectResult}>
              <Button styles={"btnCartoon"} text={"CARTOON"} />
            </div>
            <div className={s.lock}>
              <AiOutlineLock />
              <p>ARTISTIC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
