import React from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder }: SearchBarProps) => (
  <div>
    <input
      type="text"
      placeholder={placeholder}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onSearch(event.target.value)
      }
    />
  </div>
);
