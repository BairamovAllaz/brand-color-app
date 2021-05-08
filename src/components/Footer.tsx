import "../styling/Datas.css";
import { BiUpArrowCircle } from "react-icons/bi";
import { FC } from "react";

interface prop {
  copytext: string;
  intokutu: any;
}

const Footer: FC<prop> = ({ copytext, intokutu }) => {
  const gotop = (): void => {
    intokutu.current &&
      intokutu.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div>
      <div className='Footerall'>
        {copytext ? (
          <div className='footershowcolor'>
            <p className='copytext'>copied {copytext}</p>
          </div>
        ) : (
          <div></div>
        )}

        <div className='footertopsection' onClick={gotop}>
          <BiUpArrowCircle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
