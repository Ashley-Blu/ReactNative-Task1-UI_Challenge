import React from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import TabBar from '../components/ChatTabs';
import ChatListItem from '../components/ChatListItem';
import FloatingButton from '../components/FloatingButton';
import { CHATS } from '../data/chats';

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
      />

      <FloatingButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabWrap: { paddingHorizontal: 16, paddingTop: 8 },
});
