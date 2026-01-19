import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TABS = ["Chat", "Status", "Calls"];

export default function ChatBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.tabs}>
      {TABS.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(index)}
          style={[styles.tab, activeTab === index && styles.activeTab]}
          activeOpacity={0.7}
        >
          <Text
            style={[styles.tabText, activeTab === index && styles.activeText]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    backgroundColor: "#FFF5F1",
    borderRadius: 14,
    padding: 5,
    alignItems: "center",
    gap: 2,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 2,
  },
  activeTab: {
    backgroundColor: "#FF6B2E",
    shadowColor: "#FF6B2E",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: {
    color: "#B89F99",
    fontWeight: "600",
    fontSize: 14,
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
});
