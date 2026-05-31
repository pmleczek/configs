import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface CardProps {
  title: string;
  subtitle?: string;
  onPress: () => void;
}

export const Card = ({ title, subtitle, onPress }: CardProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
    <View>
      <Text style={styles.title}>{title}</Text>
      {subtitle !== undefined && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { padding: 16, borderRadius: 12, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "700" },
  subtitle: { fontSize: 14, color: "#666" },
});
