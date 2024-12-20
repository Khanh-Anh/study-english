"use client";
import { useRef } from "react";
import styles from "./styles.module.css";
import { FlipCardInterface } from "@/types/flipCard";

function FlipCard(props: FlipCardInterface) {
  const flip_card_inner = useRef<HTMLDivElement>(null);

  const handleClickTransform = () => {
    if (flip_card_inner.current) {
      if (flip_card_inner.current.style.transform) {
        flip_card_inner.current.style.transform = "";
        return;
      }
      flip_card_inner.current.style.transform = "rotateY(180deg)";
    }
  };

  return (
    <div className={styles.flip_card} onClick={handleClickTransform}>
      <div className={styles.flip_card_inner} ref={flip_card_inner}>
        <div className={styles.flip_card_front}>
          <p className={styles.title}>{props.vocabulary}</p>
          <p>{props.pronunciation}</p>
        </div>
        <div className={styles.flip_card_back}>
          <p className="text-[1rem] font-black text-left m-0">Định nghĩa: </p>
          <p className="text-left pl-3 mb-2">{props.definition}</p>
          <p className="text-[1rem] font-black text-left m-0">Ví dụ: </p>
          <p className="text-left pl-3">{props.example}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
