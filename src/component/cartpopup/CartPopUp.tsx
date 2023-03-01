import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

import "./CartPopup.css"

const Product = {};

interface CartPopUpProps {
	open: boolean;
	product?: Product;
}

export interface Product {
	name: string;
	quantity: string;
	price: string;
	subTotal: string;
}

const product: Product = {
	name: "Product 1",
	quantity: "3",
	price: "200",
	subTotal: "600",
};

const CartPopUp: FunctionComponent<CartPopUpProps> = (props) => {
	return (
		<>
			<div className={"dropdown " + (props.open ? "open" : "")}>
				<div className="cart-dropdown">
					<div className="cart-list">
						<div className="product-widget">
							<div className="product-img"></div>
							<div className="product-body">
								<h3 className="product-name">
									<a href="#">{product.name}</a>
								</h3>
								<h4 className="product-price">
									<span className="qty">
										{product.quantity}x
									</span>
									${product.price}
								</h4>
							</div>
							<button className="delete">
								<i className="fa fa-close"></i>
							</button>
						</div>
					</div>
					<div className="cart-summary">
						<small>3 Item(s) selected</small>
						<h5>SUBTOTAL: ${product.subTotal}</h5>
					</div>
					<div className="cart-btns">
						<a href="#">View Cart</a>
						<a href="#">
							Checkout{" "}
							<i className="fa fa-arrow-circle-right"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartPopUp;
