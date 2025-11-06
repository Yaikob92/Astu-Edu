import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeScreen({ children }) {
  const insets = useSafeAreaInsets();
  return (
    <View styles={[styles.container, { paddinTop: insets.top }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet({
  container: {
    flex: 1,
  },
});
