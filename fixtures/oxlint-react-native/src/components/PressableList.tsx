interface PressableListProps {
  items: string[];
  onPress: (item: string) => void;
}

export const PressableList = ({ items, onPress }: PressableListProps) => (
  <div>
    {items.map((item, index) => (
      <div key={index} onClick={() => onPress(item)}>
        {item}
      </div>
    ))}
  </div>
);
