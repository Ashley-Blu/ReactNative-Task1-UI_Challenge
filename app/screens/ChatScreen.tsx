import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import ChatListItem from "../../components/ChatListItem";
import TabBar from "../../components/ChatTabs";
import FloatingButton from "../../components/FloatingButton";
import Header from "../../components/Header";
import NewChatModal from "../../components/NewChatModal";
import { CHATS } from "../../data/chats";

export default function ChatScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateChat = (name: string, message: string) => {
    // TODO: wire up to your actual chat creation logic
    console.log("New chat →", { name, message });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.tabWrap}>
        <TabBar />
      </View>
      <FlatList
        data={CHATS}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => (
          <ChatListItem {...item} index={index} totalChats={CHATS.length} />
        )}
        scrollIndicatorInsets={{ right: 1 }}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton onPress={() => setModalVisible(true)} />

      <NewChatModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCreateChat={handleCreateChat}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabWrap: {
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});
