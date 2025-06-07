export default function Card({img,title,desciption}) {
  return (
    <div>
      <div class="card working-card">
        <div className="p-3 ">
          <div className="w-100 h-100 image-wrapper">
            <img
            src={img}
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div class="card-body">
          <h5 className="card-title">{title}</h5>
          <hr />
          <p class="card-text">
            {desciption}
            <hr />
            <i>from to</i>
          </p>
        </div>
      </div>
    </div>
  );
}
