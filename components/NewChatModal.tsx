import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  visible: boolean;
  onClose: () => void;
  onCreateChat: (name: string, message: string) => void;
}

export default function NewChatModal({ visible, onClose, onCreateChat }: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCreate = () => {
    if (!name.trim()) return;
    onCreateChat(name.trim(), message.trim());
    setName("");
    setMessage("");
    onClose();
  };

  const handleClose = () => {
    setName("");
    setMessage("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={handleClose}
    >
      {/* Backdrop */}
      <Pressable style={styles.backdrop} onPress={handleClose} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.sheet}
      >
        {/* Handle bar */}
        <View style={styles.handle} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>New Chat</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeBtn} hitSlop={8}>
            <Ionicons name="close" size={22} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Name field */}
        <Text style={styles.label}>Name or number</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. John Doe or +27 82 000 0000"
          placeholderTextColor="#bbb"
          value={name}
          onChangeText={setName}
          autoFocus
          returnKeyType="next"
        />

        {/* Message field */}
        <Text style={styles.label}>First message (optional)</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Type a message…"
          placeholderTextColor="#bbb"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={3}
          returnKeyType="done"
        />

        {/* CTA */}
        <TouchableOpacity
          style={[styles.createBtn, !name.trim() && styles.createBtnDisabled]}
          onPress={handleCreate}
          activeOpacity={0.85}
          disabled={!name.trim()}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={18} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.createBtnText}>Start Chat</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingBottom: 36,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 16,
    // Elevation for Android
    elevation: 12,
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E0E0E0",
    marginTop: 12,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    letterSpacing: -0.4,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#111",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  createBtn: {
    backgroundColor: "#FF6B2E",
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 4,
  },
  createBtnDisabled: {
    backgroundColor: "#FFB89A",
  },
  createBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.2,
  },
});