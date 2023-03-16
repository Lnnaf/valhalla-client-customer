import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FunctionComponent, useMemo } from "react";

interface SliderProps {
  items: JSX.Element[];
  perView: number;
  spacing: number;
}

const Slider: FunctionComponent<SliderProps> = (props) => {
  const { items, perView, spacing } = props;
  const memoizedItems = useMemo(() => items, [items]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
			initial: 0,
      loop: true,
			range: {
				align: true,
				min: items.length-1,
				max: 0,
			},
      slides: {
        perView: perView,
        spacing: spacing
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
          clearNextTimeout();
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
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
      }
    ]
  );



  return (
    <div ref={sliderRef} className="keen-slider">
      {memoizedItems.map((object, i) => (
        <div key={i} className="keen-slider__slide number-slide6">
          {object}
        </div>
      ))}
    </div>
  );
};

export default Slider;
