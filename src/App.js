import React, { Component } from "react";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    deletedCartItems: 0,
    shopItems: [],
    cartItems: [],
    testing: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/shop-item")
      .then((response) => this.setState({ shopItems: response.data }))
      .catch((error) => console.error(error));

    axios
      .get("http://localhost:8080/api/cart-item")
      .then((response) => this.setState({ cartItems: response.data }))
      .catch((error) => console.error(error));
  }

  handleIncrement = (cartItem) => {
    const cartItems = [...this.state.cartItems];
    const index = cartItems.indexOf(cartItem);
    cartItems[index] = { ...cartItem };
    cartItems[index].quantity++;
    this.setState({ cartItems: cartItems });
  };

  handleDecrement = (cartItem) => {
    const cartItems = [...this.state.cartItems];
    const index = cartItems.indexOf(cartItem);
    cartItems[index] = { ...cartItem };

    cartItems[index].quantity > 1
      ? cartItems[index].quantity--
      : (cartItems[index].quantity = cartItems[index].quantity + 0);

    this.setState({ cartItems: cartItems });
  };

  handleDelete = (cartItemID) => {
    const cartItems = this.state.cartItems.filter((c) => c.id !== cartItemID);

    const deleted = this.state.deletedCartItems + 1;
    this.setState({ cartItems: cartItems, deletedCartItems: deleted });
  };

  handleReset = () => {
    const cartItems = this.state.cartItems.map((cartItem) => {
      cartItem.quantity = 0;
      return cartItem;
    });
    this.setState({ cartItems: cartItems });
  };

  handleAdd = (shopItem) => {
    let cartItems = [...this.state.cartItems];
    const deleted = this.state.deletedCartItems;

    const cartItemsFiltered = this.state.cartItems.filter(
      (cartItem) => cartItem.product_id === shopItem.id
    );

    cartItemsFiltered.length > 0
      ? cartItems[
          cartItems.findIndex((cartItem) => cartItem.product_id === shopItem.id)
        ].quantity++
      : cartItems.unshift({
          id: cartItems.length + deleted + 1,
          product_id: shopItem.id,
          quantity: 1,
          item: shopItem.name,
          cost: shopItem.price,
          image: shopItem.file,
          description: shopItem.description,
        });

    this.setState({ cartItems: cartItems });
  };

  getTotalQuantity = () => {
    const cartItems = this.state.cartItems;
    const totalQuantity = cartItems.reduce(
      (sum, cartItem) => (sum = sum + cartItem.quantity),
      0
    );
    this.setState({ totalQuantity: totalQuantity });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalQuantity={this.state.cartItems.reduce(
            (sum, cartItem) => (sum = sum + cartItem.quantity),
            0
          )}
          totalPrice={this.state.cartItems.reduce(
            (sum, cartItem) => (sum = sum + cartItem.cost * cartItem.quantity),
            0
          )}
          cartItems={this.state.cartItems}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Shop
                handleAdd={this.handleAdd}
                shopItems={this.state.shopItems}
              />
            }
          ></Route>
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cartItems={this.state.cartItems}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                totalCartItems={
                  this.state.cartItems.filter(
                    (cartItem) => cartItem.quantity > 0
                  ).length
                }
                totalQuantity={this.state.cartItems.reduce(
                  (sum, cartItem) => (sum = sum + cartItem.quantity),
                  0
                )}
                totalPrice={this.state.cartItems.reduce(
                  (sum, cartItem) =>
                    (sum = sum + cartItem.cost * cartItem.quantity),
                  0
                )}
              />
            }
          ></Route>
        </Routes>
        <footer className="footer section text-center">
          <div className="container light">
            <div className="row">
              <p>
                <span className="m-5">romari_12345@yahoo.com</span>
                <span className="m-5">561-410-8124</span>
              </p>
            </div>
            <div className="row">
              <h4>Developed by Romari Bartley</h4>
              <span>Theme from Themefisher</span>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
