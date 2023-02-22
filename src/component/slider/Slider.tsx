import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FunctionComponent, useState } from "react";

interface SliderProps {
  items: JSX.Element[];
  perView: number;
  spacing : number;
}

const Slider: FunctionComponent<SliderProps> = (props) => {
	const [sliderRef] = useKeenSlider(
		{
			loop: true,
      slides: {
        perView: props.perView,
        spacing: props.spacing
      }
		},
		[
			(slider) => {
				let timeout: number | undefined;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					},  4000);
				}
				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			},
		]
	);
	return (
    <div ref={sliderRef} className="keen-slider">
          {props.items.map(function(object, i){
        return  <div className="keen-slider__slide number-slide6">{object}</div> ;
    })}
    </div>
	);
};

export default Slider;
