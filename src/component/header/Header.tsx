import { FunctionComponent } from "react";
import NavigationMenu from "../menu/Navigation";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

import "./Header.css";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	return (
		<>
			<TopHeader />
			<MainHeader />
			<NavigationMenu />
		</>
	);
};

export default Header;
