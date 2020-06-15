import React from 'react';
import './ShopByCategory.scss';
import { Link } from 'react-router-dom';

type Props = {
  gadgets: Gadget[];
};

const ShopByCategory: React.FC<Props> = ({ gadgets }) => {
  const countOfPhones = gadgets.filter((phone: Gadget) => phone.type === 'phone').length;
  const countOfTablets = gadgets.filter((phone: Gadget) => phone.type === 'tablet').length;
  const countOfAccessories = gadgets.filter((phone: Gadget) => phone.type === 'accessories').length;

  return (
    <div className="shop-by-category">

      <h2 className="shop-by-category__head">
        Shop by category
      </h2>

      <div className="shop-by-category__cards">
        <Link to="/Phone"
              className="shop-by-category__card shop-by-category__card-gadget"
        >
          <div className="shop-by-category__card-image-wrapper">
            <img className="shop-by-category__card-image"
              src="./img/phones/ShopByPhone.png"
              alt="mobile photo"
            />
          </div>

          <h3 className="shop-by-category__card-head">
            Mobile phones
          </h3>

          <p className="shop-by-category__card-quantity">
            {`${countOfPhones} models`}
          </p>
        </Link>

        <Link to="/Tablet"
              className="shop-by-category__card shop-by-category__card-gadget"
        >
          <div className="shop-by-category__card-image-wrapper">
            <img className="shop-by-category__card-image"
              src="./img/phones/ShopByTablet.png"
              alt="tablet photo"
            />
          </div>

          <h3 className="shop-by-category__card-head">
            Tablets
          </h3>

          <p className="shop-by-category__card-quantity">
            {`${countOfTablets} models`}
          </p>
        </Link>

        <Link to="/Accessories"
              className="shop-by-category__card shop-by-category__card-gadget"
        >
          <div className="shop-by-category__card-image-wrapper">
            <img className="shop-by-category__card-image"
                 src="./img/phones/ShopByAccessory.png"
                 alt="accessory photo"
            />
          </div>

          <h3 className="shop-by-category__card-head">
            Accessories
          </h3>

          <p className="shop-by-category__card-quantity">
            {`${countOfAccessories} models`}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;
