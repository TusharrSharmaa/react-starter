import React from 'react';
import logo from "./../logo.svg";

function banner(props) {
  let html = (
    <section className={`hero-banner relative bg-darkBlue flex items-end text-white z-[1] pt-28 pb-24 min-h-[752px] desktop:min-h-[630px]  tablet:min-h-[560px] tablet:pt-24 tablet:pb-14 md:min-h-[552px]  md:pt-24 md:pb-12 md:items-center`}>
      <div className="bg-img">
        <img src={logo} alt="Homepage-img" />
      </div>
      <div className="content-outer">
        <div className="container">
          <div className="content-wrap">
            <h1 className='text-3xl font-bold underline'>{props.title}</h1>
            <p>{props.blurb}</p>
            <a className="green-btn" href={props.link}>{props.linkText}</a>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
  return html;
}

export default banner;
