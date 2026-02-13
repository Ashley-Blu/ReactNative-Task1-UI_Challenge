import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function FloatingButton({ onPress }: { onPress?: () => void }) {
return (
<TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.9}>
<Ionicons name="add" size={28} color="#fff" />
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
button: {
position: 'absolute',
right: 20,
bottom: 28,
width: 64,
height: 64,
borderRadius: 32,
backgroundColor: '#FF6B2E',
alignItems: 'center',
justifyContent: 'center',
elevation: 6,
shadowColor: '#000',
shadowOpacity: 0.2,
shadowOffset: { width: 0, height: 4 },
shadowRadius: 8,
},
});