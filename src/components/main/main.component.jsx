import React from "react";
import { MdStar, MdLocationOn } from "react-icons/md";

const Main = () => {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img
            src="/assets/images/hotel-1.jpg"
            alt="hotel1"
            className="gallery__photo"
          />
        </figure>
        <figure className="gallery__item">
          <img
            src="/assets/images/hotel-2.jpg"
            alt="hotel2"
            className="gallery__photo"
          />
        </figure>
        <figure className="gallery__item">
          <img
            src="/assets/images/hotel-3.jpg"
            alt="hotel3"
            className="gallery__photo"
          />
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">Hotel las Palmas</h1>
        <div className="overview__stars">
          <MdStar className="overview__icon--star" />
          <MdStar className="overview__icon--star" />
          <MdStar className="overview__icon--star" />
          <MdStar className="overview__icon--star" />
          <MdStar className="overview__icon--star" />
        </div>
        <div className="overview__location">
          <MdLocationOn className="overview__icon--location" />
          <button className="btn-inline">Albufeira , portugal</button>
        </div>
        <div className="overview__rating">
          <div className="overview__rating--average">8.6</div>
          <div className="overview__raging-count">429 votes</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
