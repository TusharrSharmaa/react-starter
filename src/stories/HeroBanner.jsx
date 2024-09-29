import React from "react";
import propTypes from "prop-types";
import image from "./assets/banner-image.png";
import "./../index.css";
import { Button } from "./Button";

export function HeroBanner(props) {
  let html = (
    <section className={`hero-banner relative min-h-[720px] pt-100 pb-278`}>
      <div className={`bg-img absolute bottom-0 left-0 w-full h-full`}>
        <img src={image} alt="Homepage-img" />
      </div>
      <div className="container relative">
        <div className="text-wrap pt-60">
          <h1 className="text-7xl text-white">{props.title}</h1>
          <p>{props.blurb}</p>
          <a className="green-btn" href={props.label}>
            {props.linkText}
          </a>
          {props.children}
          <Button label="Button" secondary/> 
        </div>
      </div>
    </section>
  );
  return html;
}

HeroBanner.propTypes = {
  title: propTypes.string,

  blurb: propTypes.string,

  label: propTypes.string.isRequired,

  onClick: propTypes.func,
};
