import "../styling/Rightsection.css";
import datalar from "../datalar.json";
import { useEffect } from "react";
import { Idata } from "../types/types";
import { useState } from "react";
import Datas from "./Datas";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Rightsection = () => {
  const [alldata, setalldata] = useState<Idata[]>([]);
  const [selected, setselected] = useState<any[]>([]);
  const [brands, setbrands] = useState<any[]>([]);

  const arrays: any[] = [];
  useEffect(() => {
    Object.keys(datalar).map((key) => {
      arrays.push((datalar as any)[key]);
    });
  });

  useEffect(() => {
    setalldata(arrays);
  }, []);

  const pick = (slug: string, e: any): void => {
    if (selected.includes(slug)) {
      setselected(selected.filter((dat) => dat !== slug));
    } else {
      setselected([...selected, slug]);
    }

    if (brands.includes(e)) {
      setbrands(brands.filter((d) => d !== e));
    } else {
      setbrands([...brands, e]);
    }
    console.log(brands);
  };

  return (
    <div className='Right-section'>
      <Navbar arrays={arrays} setalldata={setalldata} brands={brands} />
      <Datas alldata={alldata} pick={pick} selected={selected} />
    </div>
  );
};

export default Rightsection;
