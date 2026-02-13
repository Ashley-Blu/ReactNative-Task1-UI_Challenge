import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import ChatListItem from "../components/ChatListItem";
import TabBar from "../components/ChatTabs";
import FloatingButton from "../components/FloatingButton";
import Header from "../components/Header";
import { CHATS } from "../data/chats";

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.tabWrap}>
        <TabBar />
      </View>

      <FlatList
        data={CHATS}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <ChatListItem {...item} />}
        scrollIndicatorInsets={{ right: 1 }}
        showsVerticalScrollIndicator={false}
      />

      <FloatingButton />
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
