import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Avatar from './Avatar';


interface Props {
id: string;
name: string;
message: string;
time?: string;
unread?: number;
typing?: boolean;
avatar?: any;
}


export default function ChatListItem({ name, message, time = '14:30', unread = 0, typing, avatar }: Props) {
return (
<TouchableOpacity activeOpacity={0.8} style={styles.container}>
<Avatar source={avatar} />
<View style={styles.middle}>
<View style={styles.row}>
<Text style={styles.name}>{name}</Text>
<Text style={styles.time}>{time}</Text>
</View>
<View style={styles.row}>
<Text numberOfLines={1} style={styles.message}>{typing ? 'Typing...' : message}</Text>
{unread > 0 ? (
<View style={styles.badge}><Text style={styles.badgeText}>{unread}</Text></View>
) : null}
</View>
</View>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
container: { flexDirection: 'row', paddingVertical: 14, paddingHorizontal: 16, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F3F4F6', backgroundColor: '#fff' },
middle: { flex: 1, marginLeft: 12 },
row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
name: { fontSize: 16, fontWeight: '700', color: '#111827' },
time: { fontSize: 12, color: '#9CA3AF' },
message: { fontSize: 14, color: '#6B7280', flex: 1, marginRight: 8 },
badge: { minWidth: 20, height: 20, borderRadius: 10, backgroundColor: '#FF4D2E', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
badgeText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});