import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} style={{ width: "110%" }} alt={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-3 mt-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "70px", textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Badge"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                style={{ marginLeft: "30px" }}
                alt="App Store Badge"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
