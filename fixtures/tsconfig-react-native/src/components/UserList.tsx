import { FlatList, Text } from "react-native";

interface User {
  id: string;
  name: string;
  email: string;
}

export const UserList = ({ users }: { users: User[] }) => (
  <FlatList<User>
    data={users}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <Text>
        {item.name} — {item.email}
      </Text>
    )}
  />
);
