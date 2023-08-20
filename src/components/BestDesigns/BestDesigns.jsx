import React from "react";
import s from "./BestDesigns.module.css";
import { FaArrowRight } from "react-icons/fa";
import bestPicture1 from "./media/bestPicture1.png";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

function BestDesigns() {
  return (
    <div className={s.best_designs_container}>
      <h4>
        <span>Get Inspired!</span>
        <br />
        BEST USERS DESIGNS
      </h4>
      <div className={s.best_picture}>
        <p>
          See More <FaArrowRight />
        </p>
        <img width={225} src={bestPicture1} alt="bestPicture1" />
      </div>
        <Input styles={"bestInput"} placeholder={"punk heart, gothic"} />
        <Button styles={'searchBest'} text={'ARTISTIC'}/>
        <Button styles={"btnBuy"} text="BUY" />
    </div>
  );
}

export default BestDesigns;
