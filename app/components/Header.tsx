import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HALODEK</Text>

      <View style={styles.actions}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/search.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.actionText}>⋮</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    gap: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  actionText: {
    fontSize: 24,
    marginTop: -2,
  },
});
