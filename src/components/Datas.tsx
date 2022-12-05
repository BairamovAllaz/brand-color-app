import { FC, useEffect, useRef, useState } from "react";
import { Idata } from "../types/types";
import "../styling/Datas.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React from "react";
import Footer from "./Footer";
interface prop {
  alldata: Idata[];
  pick: any;
  selected: any;
}

const Datas: FC<prop> = ({ alldata, pick, selected }) => {
  const [copytext, setcopytext] = useState<string>("");
  const infoBox = useRef<any | undefined>();

  const getContrastYIQ = (hexcolor: any) => {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  };

  return (
    <div>
      <div className='Datalar'>
        <div
          className='intokutu'
          style={{ width: "100%", height: "5px" }}
          ref={infoBox}></div>
        {alldata.map((e, index: any) => (
          <div
            className={`Datas_indiv ${selected.includes(e.slug) ? "selected" : ""
              }`}
            key={index}>
            <p className='Datas_in_header' onClick={() => pick(e.slug, e)}>
              {e.title}
            </p>
            <div className='Datas_color_section'>
              {e.colors.map((y, index) => (
                <CopyToClipboard
                  text={y}
                  onCopy={() => {
                    setcopytext(y);
                    setTimeout(() => {
                      setcopytext("");
                    }, 3000);
                  }}>
                  <div
                    className='Datas_colors_div'
                    style={{ backgroundColor: `#${y}` }}>
                    <span style={{ color: `${getContrastYIQ(y)}` }} key={index}>
                      {y}
                    </span>
                  </div>
                </CopyToClipboard>
              ))}
            </div>
          </div>
        ))}
        <Footer copytext={copytext} infoBox={infoBox} />
      </div>
    </div>
  );
};

export default Datas;
