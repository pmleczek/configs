import { useState } from "react";
import { TextInput, View } from "react-native";

export const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [value, setValue] = useState("");

  const handleChange = (text: string) => {
    setValue(text);
    onSearch(text);
  };

  return (
    <View>
      <TextInput value={value} onChangeText={handleChange} placeholder="Search..." />
    </View>
  );
};
