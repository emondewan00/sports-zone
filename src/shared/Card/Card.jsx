import React from "react";
import img from "../../assets/cover-Img.jpg";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-4xl gap-4">
      <div className=" w-64 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="w-48 mx-auto" alt="Shoes" />
        </figure>
        <div className="px-4 my-4">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div className=" w-64 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="w-48 mx-auto" alt="Shoes" />
        </figure>
        <div className="px-4 my-4">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div className=" w-64 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="w-48 mx-auto" alt="Shoes" />
        </figure>
        <div className="px-4 my-4">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div className=" w-64 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="w-48 mx-auto" alt="Shoes" />
        </figure>
        <div className="px-4 my-4">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div className=" w-64 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="w-48 mx-auto" alt="Shoes" />
        </figure>
        <div className="px-4 my-4">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div className=" w-64 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="w-48 mx-auto" alt="Shoes" />
        </figure>
        <div className="px-4 my-4">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
