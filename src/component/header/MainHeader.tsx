import {
	faBars,
	faHeart,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useState } from "react";
import CartPopUp from "../cartpopup/CartPopUp";
import SearchBar from "../searchbar/SearchBar";

interface MainHeaderProps {}

const MainHeader: FunctionComponent<MainHeaderProps> = () => {
	const [openCart, setOpenCart] = useState(false);
	const onOpenCart = () =>{
		console.log('x');
		
		setOpenCart(!openCart);
	}
	return (
		<div id="header">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="header-logo">
							<a href="#" className="logo">
								<img src="./img/logo.png" alt="" />
							</a>
						</div>
					</div>
					<div className="col-md-6">
						<div className="header-search">
							<SearchBar />
						</div>
					</div>
					<div className="col-md-3 clearfix">
						<div className="header-ctn">
							<div>
								<a href="#">
									<i>
										<FontAwesomeIcon icon={faHeart} />
									</i>
									<span>Your Wishlist</span>
									<div className="qty">2</div>
								</a>
							</div>
							<div className="dropdown">
								<a onClick={onOpenCart}
								>
									<i>
										<FontAwesomeIcon
											icon={faShoppingCart}
										/>
									</i>
									<span>Your Cart</span>
									<div className="qty">3</div>
									{openCart ? <div className="dropdown-backdrop"></div> : <></>}
								</a>
								<CartPopUp open={openCart} />
							</div>
							<div className="menu-toggle">
								<a href="#">
									<i>
										<FontAwesomeIcon icon={faBars} />
									</i>
									<span>Menu</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHeader;
