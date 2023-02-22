import { FunctionComponent } from "react";
import "./TopHeader";
import {
	faDollar,
	faEnvelopeOpen,
	faMapMarked,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import MainHeader from "./MainHeader";
interface TopHeaderProps {}

const TopHeader: FunctionComponent<TopHeaderProps> = () => {
	return (
		<>
			<div id="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li>
							<a href="#">
								<i>
									<FontAwesomeIcon icon={faPhone} />{" "}
								</i>
								+021-95-51-84
							</a>
						</li>
						<li>
							<a href="#">
								<i>
									<FontAwesomeIcon icon={faEnvelopeOpen} />
								</i>{" "}
								email@email.com
							</a>
						</li>
						<li>
							<a href="#">
								<i>
									<FontAwesomeIcon icon={faMapMarked} />
								</i>
								1734 Stonecoal Road
							</a>
						</li>
					</ul>
					<ul className="header-links pull-right">
						<li>
							<a href="#">
								<i>
									<FontAwesomeIcon icon={faDollar} />
								</i>
								USD
							</a>
						</li>
						<li>
							<a href="#">
								<i>
									<FontAwesomeIcon icon={faUser} />
								</i>
								My Account
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default TopHeader;
