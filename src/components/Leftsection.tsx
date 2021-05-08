import "../styling/Leftsections.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";
import React from "react";

const Leftsection = () => {
  return (
    <div className='Leftsection'>
      <div className='Left-logo-section'>
        <div className='All-logo'>
          <img
            width='100'
            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdwglogo.com%2Fwp-content%2Fuploads%2F2015%2F11%2FDell-Logo-White-Background.png&f=1&nofb=1'
          />
          <h2 className='Logo_text'>
            Brand<strong>Colors</strong>
          </h2>
        </div>
      </div>

      <div className='left-logo-bottom'>
        <p className='left_header_text'>
          <span>
            The biggest collection of official brand color codes around. Curated
            by @brandcolors and friends.
          </span>
        </p>

        <div className='left_modal_section'>
          <p>Ellez Bairamov</p>
          <p>About Brand colors</p>
        </div>
      </div>

      <div className='left_last_section'>
        <p>
          Brand<strong>Colors</strong> + DesignBombs
        </p>
        <p>
          Learn how to make a website - we have put together an in-depth guide
          that will help you build your first website with WordPress.
        </p>
      </div>

      <div className='left_social'>
        <div>
          <AiFillInstagram />
        </div>
        <div>
          <AiFillFacebook />
        </div>
        <div>
          <AiFillGithub />
        </div>
        <div>
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Leftsection;
