import React from "react";
import { MdStar, MdLocationOn, MdKeyboardArrowRight } from "react-icons/md";

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

      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            veritatis ea doloremque neque distinctio. Adipisci dolore eum
            aliquid odit minima? Magni in possimus dolore maiores soluta sit eum
            doloribus magnam!
          </p>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            veritatis ea doloremque neque distinctio.
          </p>
          <ul className="list">
            <li className="list__item">
              <MdKeyboardArrowRight className="list__item__icon" /> Close to the
              beach
            </li>
            <li className="list__item">
              <MdKeyboardArrowRight className="list__item__icon" />
              Breakfast included
            </li>
            <li className="list__item">
              <MdKeyboardArrowRight className="list__item__icon" />
              Free airport shuttle
            </li>
            <li className="list__item">
              <MdKeyboardArrowRight className="list__item__icon" />
              Free wifi in all rooms
            </li>
            <li className="list__item">
              <MdKeyboardArrowRight className="list__item__icon" />
              Air conitioning and heating
            </li>
            <li className="list__item">
              <MdKeyboardArrowRight className="list__item__icon" />
              Pets allowed
            </li>
            <li className="list__item">
              <MdKeyboardArrowRight className="list__item__icon" />
              We speak all languages
            </li>
            <li className="list__item">
              <MdKeyboardArrowRight className="list__item__icon" />
              Perfect for families
            </li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 other frindes recommend this hotel.
            </p>
            <div className="recommend__friends">
              <img
                src="/assets/images/user-3.jpg"
                alt="user-3"
                className="recommend__photo"
              />
              <img
                src="/assets/images/user-4.jpg"
                alt="user-4"
                className="recommend__photo"
              />
              <img
                src="/assets/images/user-5.jpg"
                alt="user-5"
                className="recommend__photo"
              />
              <img
                src="/assets/images/user-6.jpg"
                alt="user-6"
                className="recommend__photo"
              />
            </div>
          </div>
        </div>
        <div className="user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              quo accusamus ut magnam consequuntur iure, voluptatibus animi quos
              nemo ab, hic sequi eaque doloribus dicta pariatur. Reprehenderit
              quia culpa placeat!
            </blockquote>
            <figcaption className="review__user">
              <img
                src="/assets/images/user-1.jpg"
                alt="user-1"
                className="review__photo"
              />
              <div className="review__user-box">
                <p className="review__user-name">Mohammad Safia</p>
                <p className="review__user-date">Feb 23rd 2019</p>
              </div>
              <div className="review__rating">7.8</div>
            </figcaption>
          </figure>
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              quo accusamus ut magnam consequuntur iure.
            </blockquote>
            <figcaption className="review__user">
              <img
                src="/assets/images/user-2.jpg"
                alt="user-2"
                className="review__photo"
              />
              <div className="review__user-box">
                <p className="review__user-name">Ahamd Jawabra</p>
                <p className="review__user-date">Feb 3rd 2019</p>
              </div>
              <div className="review__rating">4.8</div>
            </figcaption>
          </figure>
          <button className="btn-inline">
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="cta">
        <h2 className="cta__book-now">
          Good news! We have 4 free rooms for your selected dates!
        </h2>
        <button className="btn">
          <span className="btn__visible">Book Now</span>
          <span className="btn__invisible"> Only 4 rooms left</span>
        </button>
      </div>
    </main>
  );
};

export default Main;
