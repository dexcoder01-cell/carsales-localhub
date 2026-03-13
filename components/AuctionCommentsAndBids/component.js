import Image from "next/image";
import "./style.scss";
import Avatar from "./images/avatar.png";

const AuctionCommentsAndBids = () => {
  return (
    <div className="auction-comments-and-bids">
      <div className="comment-field">
        <div className="comment-bar">
          <h3>Comments & Bids</h3>
          <div className="dropdown">
            <button>Newest</button>
            <button>Most Upvoted</button>
            <button>Seller Comments</button>
            <button>Bid History</button>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Add a Comment..." />
        </form>
      </div>

      <div className="comments">
        <div className="avatar">
          <span className="user-avatar">
            <Image src={Avatar} alt="User" />
            <i className="fa-solid fa-circle-plus"></i>
          </span>
        </div>
        <div className="comment-item">
          <div className="user-info">
            <span className="user-name">Lorem ipsum 1</span>
            <svg className="verified" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="v-9QDZkbVMtheikhanv">
              <title id="v-9QDZkbVMtheikhanv">Registered Bidder</title>
              <path d="M6.166 1.286c.952-1.715 3.418-1.715 4.37 0l.425.764.84-.24c1.886-.54 3.63 1.205 3.091 3.09l-.24.841.764.425c1.715.952 1.715 3.418 0 4.37l-.764.425.24.84c.54 1.886-1.205 3.63-3.09 3.091l-.841-.24-.424.764c-.953 1.715-3.419 1.715-4.371 0l-.425-.764-.84.24c-1.886.54-3.63-1.205-3.091-3.09l.24-.841-.764-.424c-1.715-.953-1.715-3.419 0-4.371l.764-.425-.24-.84C1.27 3.015 3.015 1.27 4.9 1.81l.841.24.425-.764z" fill="#4AD493"></path>
              <path d="M11.5 6.351l-3.625 4.5L6 9.033" stroke="#0F2236" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>

            <span className="rep"><i className="fa-solid fa-arrow-up"></i> 4</span>
            <span className="bidder">Bidder</span>
            <span className="time">1h</span>
          </div>

          <p className="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className="interact">
            <button className="btn-upvote"><i className="fa-solid fa-arrow-up"></i> 1 </button>
            <button className="btn-reply">Reply <i className="fa-solid fa-turn-up"></i></button>
            <button className="btn-flag">Flag as inappropriate <i className="fa-regular fa-flag"></i></button>
          </div>
        </div>
      </div>

      <div className="comments">
        <div className="avatar">
          <span className="user-avatar">
            <Image src={Avatar} alt="User" />
            <i className="fa-solid fa-circle-plus"></i>
          </span>
        </div>
        <div className="comment-item">
          <div className="user-info">
            <span className="user-name">Lorem ipsum 2</span>
            <svg className="verified" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="v-9QDZkbVMtheikhanv">
              <title id="v-9QDZkbVMtheikhanv">Registered Bidder</title>
              <path d="M6.166 1.286c.952-1.715 3.418-1.715 4.37 0l.425.764.84-.24c1.886-.54 3.63 1.205 3.091 3.09l-.24.841.764.425c1.715.952 1.715 3.418 0 4.37l-.764.425.24.84c.54 1.886-1.205 3.63-3.09 3.091l-.841-.24-.424.764c-.953 1.715-3.419 1.715-4.371 0l-.425-.764-.84.24c-1.886.54-3.63-1.205-3.091-3.09l.24-.841-.764-.424c-1.715-.953-1.715-3.419 0-4.371l.764-.425-.24-.84C1.27 3.015 3.015 1.27 4.9 1.81l.841.24.425-.764z" fill="#4AD493"></path>
              <path d="M11.5 6.351l-3.625 4.5L6 9.033" stroke="#0F2236" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>

            <span className="rep"><i className="fa-solid fa-arrow-up"></i> 87</span>
            <span className="time">2h</span>
          </div>

          <p className="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="interact">
            <button className="btn-upvote"><i className="fa-solid fa-arrow-up"></i> 1 </button>
            <button className="btn-reply">Reply <i className="fa-solid fa-turn-up"></i></button>
            <button className="btn-flag">Flag as inappropriate <i className="fa-regular fa-flag"></i></button>
          </div>
        </div>
      </div>

      <div className="similar-cars">
        <h6>See also</h6>
        <ul>
          <li><a href="#">Manual cars for sale</a></li>
          <li><a href="#">Mazdas for sale</a></li>
          <li><a href="#">Mazda ND Miatas for sale</a></li>
          <li><a href="#">Convertibles for sale</a></li>
        </ul>
      </div>

    </div>
  );
};

export default AuctionCommentsAndBids;