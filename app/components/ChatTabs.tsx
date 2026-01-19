import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function ChatBar() {
return (
<View style={styles.tabs}>
<TouchableOpacity style={[styles.tab, styles.activeTab]}>
<Text style={[styles.tabText, styles.activeText]}>Chat</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.tab}>
<Text style={styles.tabText}>Status</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.tab}>
<Text style={styles.tabText}>Calls</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
tabs: {
flexDirection: 'row',
backgroundColor: '#FFF5F1',
borderRadius: 12,
padding: 6,
alignItems: 'center',
},
tab: { flex: 1, alignItems: 'center', paddingVertical: 10, borderRadius: 10 },
activeTab: { backgroundColor: '#FF6B2E' },
tabText: { color: '#CDB9AE', fontWeight: '600' },
activeText: { color: '#fff' },
});