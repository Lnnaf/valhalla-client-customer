import { useKeenSlider } from "keen-slider/react";
import { FunctionComponent } from "react";
import Slider from "../slider/Slider";
import AdsConntent from "./AdsContent";
import "./AdsSection";

interface AdsSectionProps {}

const AdsSection: FunctionComponent<AdsSectionProps> = () => {
	const items = [<AdsConntent />, <AdsConntent />];
	return (
		<>
			<Slider perView={1} spacing={0} items={items} />
		</>
	);
};

export default AdsSection;
