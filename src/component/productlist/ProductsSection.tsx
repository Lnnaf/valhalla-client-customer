import { FunctionComponent } from "react";
import Slider from "../slider/Slider";
import ProductItem from "./ProductItem";

interface ProductSectionProps {
  
}
 
const ProductSection: FunctionComponent<ProductSectionProps> = () => {
  return ( <>
  
  <div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* className row --> */}
				<div className="row">

					{/* <!-- section title --> */}
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">New Products</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab1" aria-expanded="true">Laptops</a></li>
									<li className=""><a data-toggle="tab" href="#tab1" aria-expanded="false">Smartphones</a></li>
									<li className=""><a data-toggle="tab" href="#tab1" aria-expanded="false">Cameras</a></li>
									<li className=""><a data-toggle="tab" href="#tab1" aria-expanded="false">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /section title --> */}

					{/* <!-- Products tab & slick --> */}
					<Slider perView={5} spacing= {10} items = {[<ProductItem/>, <ProductItem/>, <ProductItem/>, <ProductItem/>, <ProductItem/>, <ProductItem/>, <ProductItem/>]} />
					{/* <!-- Products tab & slick --> */}
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
  
  
  </> );
}
 
export default ProductSection;