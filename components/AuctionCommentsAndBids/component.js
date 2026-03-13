import "./style.scss";
import Image from "next/image";
import Avatar from "./images/avatar.png";

const AuctionCommentsAndBids = () => {
  return (
    <div className="auction-comments-and-bids">

      {/* Comment Field */}
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


      {/* COMMENT ITEM */}
      <div className="comments">

        <div className="avatar">
          <span className="user-avatar">
            <Image src={Avatar} alt="User" />

            {/* PLUS ICON */}
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>

          </span>
        </div>


        <div className="comment-item">

          <div className="user-info">

            <span className="user-name">Lorem ipsum 1</span>

            {/* VERIFIED ICON */}
            <svg width="17" height="17" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4" stroke="green" strokeWidth="2" fill="none"/>
            </svg>

            <span className="rep">

              {/* UP ARROW */}
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M12 5l7 7H5z" fill="currentColor"/>
              </svg>

              4
            </span>

            <span className="bidder">Bidder</span>
            <span className="time">1h</span>

          </div>


          <p className="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>


          <div className="interact">

            <button className="btn-upvote">

              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M12 5l7 7H5z" fill="currentColor"/>
              </svg>

              1
            </button>


            <button className="btn-reply">

              Reply

              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M10 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>

            </button>


            <button className="btn-flag">

              Flag as inappropriate

              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M6 3v18M6 3h10l-2 4 2 4H6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>

            </button>

          </div>

        </div>

      </div>


      {/* Similar Cars */}

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