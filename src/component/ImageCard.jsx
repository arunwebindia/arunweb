import React from "react";

export default function ImageCard({
  image = "https://as1.ftcdn.net/jpg/06/08/88/12/1000_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.webp",
  name = "Porject Name",
  like = 8000,
  description = "Some quick example text to build on the card title",
}) {
  return (
    <>
      <div class="card border-0 imgCard">
        <div className="p-3 ">
          <div className="w-100 h-100 image-wrapper">
            <img src={image} className="card_image" alt="..." />
          </div>
        </div>
        <div class="card-body">
          <div className="d-flex justify-content-between">
            <p>{name}</p>
            <p>
              Like <span>{like}</span>
            </p>
          </div>
          <p class="card-text text-start">{description}</p>
        </div>
      </div>
    </>
  );
}
