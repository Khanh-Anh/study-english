import style from "./style.module.css";

export default function ErrorNotFound() {
  return (
    <div
      className="flex flex-1 absolute w-full left-0 top-0 py-10 h-full font-sans border-none overflow-hidden"
      style={{ backgroundColor: "#c7b29e" }}
    >
      <div className="p-4 flex items-center border-none gap-3 absolute left-[50%] translate-x-[-50%] z-10">
        <div className={style.main_wrapper}>
          <div className={style.main}>
            <div className={style.antenna}>
              <div className={style.antenna_shadow}></div>
              <div className={style.a1}></div>
              <div className={style.a1d}></div>
              <div className={style.a2}></div>
              <div className={style.a2d}></div>
              <div className={style.a_base}></div>
            </div>
            <div className={style.tv}>
              <div className={style.cruve}>
                <svg
                  xmlSpace="preserve"
                  viewBox="0 0 189.929 189.929"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className={style.curve_svg}
                >
                  <path
                    d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
          C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                  ></path>
                </svg>
              </div>
              <div className={style.display_div}>
                <div className={style.screen_out}>
                  <div className={style.screen_out1}>
                    <div className={style.screen}>
                      <span className={style.notfound_text}> NOT FOUND</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.lines}>
                <div className={style.line1}></div>
                <div className={style.line2}></div>
                <div className={style.line3}></div>
              </div>
              <div className={style.buttons_div}>
                <div className={style.b1}>
                  <div></div>
                </div>
                <div className={style.b2}></div>
                <div className={style.speakers}>
                  <div className={style.g1}>
                    <div className={style.g11}></div>
                    <div className={style.g12}></div>
                    <div className={style.g13}></div>
                  </div>
                  <div className={style.g}></div>
                  <div className={style.g}></div>
                </div>
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.base1}></div>
              <div className={style.base2}></div>
              <div className={style.base3}></div>
            </div>
          </div>
          <div className={style.text_404}>
            <div className={style.text_4041}>4</div>
            <div className={style.text_4042}>0</div>
            <div className={style.text_4043}>4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
