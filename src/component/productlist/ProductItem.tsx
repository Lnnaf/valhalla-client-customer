import { faExchange, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

interface ProductItemProps {
  
}
 
const ProductItem: FunctionComponent<ProductItemProps> = () => {
  return (
  <div style={{height:'400px'}}>
     <div className="product" >
											<div className="product-img">
												<img src="https://cdn.divineshop.vn/image/catalog/Anh-SP/Kh%C3%A1c/Divine-Shop-Elden-Ring-82335.jpg?hash=1658742026" alt=""/>
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
												<button className="add-to-cart-btn" ><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
  </div>
);
}
 
export default ProductItem;