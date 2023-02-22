import { FunctionComponent } from "react";
import Header from "../header/Header";
import AdsSection from "../hotdeal/AdsSection";
import ProductSection from "../productlist/ProductsSection";

interface MainHomePageProps {}

const MainHomePage: FunctionComponent<MainHomePageProps> = () => {
	return (
		<>
			<Header />
			<AdsSection />
			<ProductSection/>
			<ProductSection/>
		</>
	);
};

export default MainHomePage;
