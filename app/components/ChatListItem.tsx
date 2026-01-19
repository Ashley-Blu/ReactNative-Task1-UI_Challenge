import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "./Avatar";

interface Props {
  id: string;
  name: string;
  message: string;
  time?: string;
  unread?: number;
  typing?: boolean;
  avatar?: any;
}

export default function ChatListItem({
  name,
  message,
  time = "14:30",
  unread = 0,
  typing,
  avatar,
}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Avatar source={avatar} />
      <View style={styles.middle}>
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.row}>
          <Text
            numberOfLines={1}
            style={[styles.message, typing && styles.typingText]}
          >
            {typing ? "Typing..." : message}
          </Text>
          {unread > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: "#F3F4F6",
    backgroundColor: "#fff",
  },
  middle: {
    flex: 1,
    marginLeft: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#A1A1A1",
    fontWeight: "500",
  },
  message: {
    fontSize: 14,
    color: "#757575",
    flex: 1,
    marginRight: 8,
    fontWeight: "400",
  },
  typingText: {
    color: "#FF6B2E",
    fontWeight: "500",
  },
  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#FF6B2E",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    shadowColor: "#FF6B2E",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
});
