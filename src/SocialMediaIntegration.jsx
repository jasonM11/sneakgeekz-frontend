// import React from "react";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   InstagramShareButton,
// } from "react-share";

// const SocialMediaIntegration = ({ sneaker }) => {
//   const { image, price, brand, model, releaseDate } = sneaker;
//   const shareUrl = window.location.href;
//   return (
//     <div className="sneaker-listing">
//       <img src={image} alt={model} className="sneaker-image" />
//       <div className="sneaker-info">
//         <div className="sneaker-brand">{brand}</div>
//         <div className="sneaker-model">{model}</div>
//         <div className="sneaker-price">${price}</div>
//         <div className="sneaker-release-date">{releaseDate}</div>
//       </div>
//       <div className="social-share-buttons">
//         <FacebookShareButton url={shareUrl}>
//           <FacebookIcon size={32} round={true} />
//         </FacebookShareButton>
//         <TwitterShareButton url={shareUrl}>
//           <TwitterIcon size={32} round={true} />
//         </TwitterShareButton>
//         <InstagramShareButton url={shareUrl}>
//           <InstagramIcon size={32} round={true} />
//         </InstagramShareButton>
//       </div>
//     </div>
//   );
// };

// export default SneakerListing;
