"use client";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaFaceSmileWink } from "react-icons/fa6";
import styles from "./styles.module.css";
import { MdOutlineNextPlan, MdOutlineKeyboardBackspace } from "react-icons/md";

function FlashCardActionControls() {
  return (
    <div className={styles.button_container}>
      <button className={styles.button}>
        <MdOutlineKeyboardBackspace size={24}/>
      </button>
      <button className={styles.button}>
        <FaRegSmileBeam size={24} color="green" />
      </button>
      <button className={styles.button}>
        <FaFaceSmileWink size={24} />
      </button>
      <button className={styles.button}>
        <BsFillEmojiDizzyFill size={24} color="red" />
      </button>
      <button className={styles.button}>
        <MdOutlineNextPlan size={24} />
      </button>
    </div>
  );
}

export default FlashCardActionControls;
