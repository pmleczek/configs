interface CarouselProps {
  items: string[];
  onNext: () => void;
  onPrev: () => void;
}

export const Carousel = ({ items, onNext, onPrev }: CarouselProps) => (
  <div>
    <div onClick={onPrev}>{"<"}</div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <div onClick={() => onNext()}>{">"}</div>
  </div>
);
