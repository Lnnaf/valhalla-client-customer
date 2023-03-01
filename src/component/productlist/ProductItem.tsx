import { faExchange, faEye, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Product } from "./Model";

interface ProductItemProps {
	product: Product; 
}
 
const ProductItem: FunctionComponent<ProductItemProps> = (props) => {
  return (
  <div style={{height:'400px'}}>
     <div className="product" >
											<div className="product-img">
												<img src={props.product.images[0].url} alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><a href="#" >product name goes here</a></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist" ><i><FontAwesomeIcon icon={faHeart}/></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare" ><i><FontAwesomeIcon icon={faExchange}/></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view" ><i><FontAwesomeIcon icon={faEye}/></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn" ><i><FontAwesomeIcon icon={faShoppingCart}/></i> add to cart</button>
											</div>
										</div>
  </div>
);
}
 
export default ProductItem;