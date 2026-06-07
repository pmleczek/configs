interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => (
  <div>
    <div onClick={() => onDecrement()}>{"-"}</div>
    <span>{count}</span>
    <div onClick={() => onIncrement()}>{"+"}</div>
  </div>
);
