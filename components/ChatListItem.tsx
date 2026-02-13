import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";
import Avatar from "./Avatar";

interface ChatListItemProps {
  id: string;
  name: string;
  message: string;
  time?: string;
  unread?: number;
  typing?: boolean;
  avatar?: any;
  seen?: boolean;
  index: number;
  totalChats: number;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function ChatListItem({
  name,
  message,
  time = "14:30",
  unread = 0,
  typing = false,
  avatar,
  seen = true,
  onPress,
}: ChatListItemProps) {
  const showUnreadBadge = unread > 0;
  const showUnseenStyle = !seen && unread === 0;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      {/* Avatar */}
      <Avatar source={avatar} />

      {/* Content */}
      <View style={styles.content}>
        {/* Top Row (Name + Time) */}
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.timeRow}>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>

        {/* Bottom Row (Message + Badge/Dot) */}
        <View style={styles.bottomRow}>
          <Text
            numberOfLines={1}
            style={[styles.message, typing && styles.typingText]}
          >
            {typing ? "Typing..." : message}
          </Text>

          {showUnreadBadge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unread}</Text>
            </View>
          )}

          <View>{seen && <Text style={styles.ticks}>✓✓</Text>}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.8,
    borderBottomColor: "#F3F4F6",
  },

  content: {
    flex: 1,
    marginLeft: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginRight: 8,
  },

  time: {
    fontSize: 12,
    fontWeight: "600",
    color: "#9CA3AF",
    
  },

  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  ticks: {
    fontSize: 12,
    color: "#FF6B2E",
    fontWeight: "600",
    marginLeft: 14,
  },

  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: "400",
    color: "#6B7280",
    marginRight: 8,
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
    elevation: 2,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
});
