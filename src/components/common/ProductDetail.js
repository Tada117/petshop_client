import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import productService from "../../services/product.service";
import formatCurrency from "../../utils/formatCurreny";
import "../../assets/styles/_detailPage.scss";
import { addItem } from "../../redux/actions/cart";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    productService.getProductDetail(match.params.id).then((data) => {
      setProduct(data);
    });
  }, [match.params.id]);

  const handleDecrease = () => {
    if (quantity <= 1) setDisable(true);
    else setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    if (disable) setDisable(false);
  };

  const handleOnChange = (e) => {
    let inputValue = parseInt(e.target.value.replace(/\D/, ""));

    setQuantity(inputValue);
  };

  const handleAddToCartClick = (product) => {
    dispatch(addItem(product));
  };
  console.log(product);
  return (
    <div className="page">
      <div className="detail__container">
        <div className="detail__img">
          <img src={`http://localhost:5000/${product.imageUrl}`} alt="" />
        </div>
        <div className="detail__info">
          <span className="detail__info--name">{product.name}</span>
          <br />

          <p className="detail__info--des">{product.description}</p>
          <br />
          <span className="detail__info--price">
            Price: {formatCurrency(product.price)}
          </span>
          <div className="qty-group">
            <h3>Số Lượng</h3>
            <div className="qty__input">
              <button
                className="qty__input--btn"
                disabled={disable}
                onClick={handleDecrease}
              >
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                  alt=""
                />
              </button>
              <input
                className="qty__input--field"
                pattern="^-?[0-9]\d*\.?\d*$"
                type="number"
                value={quantity}
                onChange={handleOnChange}
              />
              <button className="qty__input--btn" onClick={handleIncrease}>
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="cart-btn">
            <button onClick={() => handleAddToCartClick(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
