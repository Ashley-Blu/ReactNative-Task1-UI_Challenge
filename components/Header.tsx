import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HALODEK</Text>

      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
          <Image
            source={require("../assets/icons/search.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
          <Image
            source={require("../assets/icons/dots.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FF6B2E",
    letterSpacing: 1,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#111827",
  },
});
