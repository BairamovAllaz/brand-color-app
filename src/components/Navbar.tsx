import { FC, useEffect, useState } from "react";
import {
  AiFillProfile,
  AiOutlineSearch,
  AiOutlineDownload,
} from "react-icons/ai";
import { Idata } from "../types/types";

interface prop {
  arrays: Idata[];
  setalldata: any;
  brands: Idata[];
}

const Navbar: FC<prop> = ({ arrays, setalldata, brands }) => {
  const [selectedoption, setselectedoption] = useState<any>("");
  const [downloadURL, setdownloadURL] = useState<string>("");
  const updateInput = async (input: string) => {
    const filtered = arrays.filter((dat) => {
      return dat.title.toLowerCase().includes(input.toLowerCase());
    });
    setalldata(filtered);
  };

  const download = (): void => {
    let output: any = "";
    brands.map((t) => {
      t.colors.map((c) => {
        output += `${t.title} : #${c}\n`;
      });
    });
    const blob = new Blob([output]);
    const url = URL.createObjectURL(blob);
    setdownloadURL(url);
  };

  return (
    <div>
      <div className='Right_navbar'>
        <div className='navbar'>
          <AiOutlineSearch className='log' />
          <input
            type='search'
            placeholder='Search Color'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateInput(e.target.value)
            }
          />
        </div>

        <div
          className='Download_navbar'
          style={{ color: brands.length > 0 ? "black" : "gray" }}>
          <div
            className='Option'
            style={{
              backgroundColor: brands.length > 0 ? "gray" : "lightgray",
            }}>
            CSS
          </div>
          {brands.length > 0 ? (
            <a href={downloadURL} download='style.css' onClick={download}>
              <AiOutlineDownload
                style={{
                  cursor: "pointer",
                  fontSize: "25px",
                  marginLeft: "10px",
                }}
              />
            </a>
          ) : (
            <AiOutlineDownload
              style={{
                cursor: "pointer",
                fontSize: "25px",
                marginLeft: "10px",
              }}
            />
          )}

          <p>{brands.length} brands collected</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
