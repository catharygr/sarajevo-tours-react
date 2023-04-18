import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../../componentes/Button";
import { ShoppingContext } from "../../api/ShopCartContext";
import { ProductContext } from "../../api/DataContext";

export default function Cart() {
  const [shopCart, setShopCart] = useContext(ShoppingContext);
  const data = useContext(ProductContext);

  function HandleRemoveItemFromCart(id) {
    const removeItem = shopCart.filter((item) => item !== id);
    setShopCart(removeItem);
  }

  // Para formatear numero  a euro
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  //  Encontrar productos que el id ya está en carrito
  const findProductCart = shopCart.map((id) => {
    const itemCart = data.find((item) => item.id === id);
    return itemCart;
  });

  // Mapear sobre los productos encontrados  el carrito y retornar la lista con datos rellenados
  const mapeo = findProductCart.map((product) => (
    <li key={Math.random()} className="cart-list-item">
      <div className="title-summary">
        <h3 className="fs-500">{product?.title}</h3>
        <p>{product?.summary}</p>
      </div>
      <div className="cart-price-container">
        <button
          onClick={() => HandleRemoveItemFromCart(product?.id)}
          className="cart-small-btn cart-sb-red"
        >
          x
        </button>
        <p className="cart-price fs-600">{formatter.format(product?.price)}</p>
      </div>
    </li>
  ));

  // Mapear sobre productos encontrado en el carrito y retornar el array precio y sumarlos
  const subTotal = findProductCart
    .map((product) => {
      return Number(product?.price);
    })
    .reduce((acc, price) => acc + price, 0);

  // Coger subTotal y calcular impuesto
  const taxDue = subTotal * (21 / 100);

  //  La suma total
  const total = subTotal + taxDue;

  // Manejando el código de promoción
  const [promoCod, setPromoCod] = React.useState("");
  const inputPromoRef = useRef();

  function handlePromoCod() {
    setPromoCod(inputPromoRef.current.value);
  }

  // Manejar el estado de desabililitar el próximo botón y guardar shopCart en localStorage

  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    setIsDisabled(shopCart.length === 0);
    localStorage.setItem("SarajevoShopCart", JSON.stringify(shopCart));
  }, [shopCart]);

  return (
    <div className="cart-container box-shadow-blue">
      <h2 className="ff-title fs-700 color-black">Tú compra</h2>
      <p>En el carrito</p>
      <ol className="cart-list">{mapeo}</ol>
      <ol>
        <li className="cart-list-item">
          <p>SubTotal</p>
          <p>{formatter.format(subTotal)}</p>
        </li>
        <li className="cart-list-item">
          <p>Promoción</p>
          {!promoCod ? (
            <div className="cart-price-container">
              <button
                onClick={handlePromoCod}
                className="cart-small-btn cart-sb-green"
              >
                +
              </button>
              <input
                ref={inputPromoRef}
                className="cart-input"
                type="text"
                placeholder="Código aquí"
              />
            </div>
          ) : (
            <p>Código no encontrado</p>
          )}
        </li>
        <li className="cart-list-item">
          <p>TAX 21%</p>
          <p>{formatter.format(taxDue)}</p>
        </li>
        <li className="cart-list-item cart-total">
          <h3>TOTAL</h3>
          <p>{formatter.format(total)}</p>
        </li>
      </ol>
      <Button
        isBtnDisabled={isDisabled}
        color="green"
        title={isDisabled ? "Carro vacio" : "Datos de pagos"}
      />
    </div>
  );
}
