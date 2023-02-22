import { FunctionComponent } from "react";
import NavigationMenu from "../menu/Navigation";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

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
