import { FunctionComponent, useEffect, useState } from "react";
import Slider from "../slider/Slider";
import ProductItem from "./ProductItem";

import "./Product.css";
import { getCatories, getProducts, getProductsNewestByCategory } from "../../service/ProductService";
import { Product, ProductCategory } from "./Model";

interface ProductSectionProps {}



const partialProduct = {
  id: 1,
  name: 'Product Name',
  price: 10.0,
};

const ProductSection: FunctionComponent<ProductSectionProps> = () => {
	const [previouseCategoryId, setPreviouseCategoryId] = useState<number>();
	const [categories, setCategories] = useState<ProductCategory[]>([]);
	const [activeCategory, setActiveCategory] = useState<ProductCategory>();
	const [products, setProducts] = useState<Product[]>([]);
	const [productBlocks, setProductBlocks] = useState<any[]>([]);

	useEffect(() => {
		initData();
	}, []);
	
	const initData = async () => {
		const categoriesRes = await getCatories();
		setCategories(categoriesRes);

		const productsRes = await getProducts(1, 5, 1);
		setProducts(productsRes);
	};
	const handleCategorySelect = (selectedCategory: ProductCategory) => {
    setActiveCategory(selectedCategory);
		setPreviouseCategoryId(selectedCategory.id)
		getProductByCategory(selectedCategory.id);
  };

	const getProductByCategory = async (id: number) => {
		const productsRes = await getProductsNewestByCategory(id);
		setProducts(productsRes);
	}

	return (
		<>
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
										{categories.map((category) => {
											const isActive = activeCategory && activeCategory.id === category.id
											return (
												<li key={category.id} className={isActive ? "active" : ""}>
													<a
														data-toggle="tab"
														href="#tab1"
														aria-expanded="true"
														onClick={() => handleCategorySelect(category)}
													>
														{category.name}
													</a>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
						{/* <!-- /section title --> */}

						{/* <!-- Products tab & slick --> */}
						<Slider
							perView={4}
							spacing={10}
							items={products.map((product) =>{
								return(<ProductItem product={product} key={product.id}/>)
							})}
						/>
						{/* <!-- Products tab & slick --> */}
					</div>
					{/* <!-- /row --> */}
				</div>
				{/* <!-- /container --> */}
			</div>
		</>
	);
};

export default ProductSection;
