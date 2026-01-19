import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';


interface Props { source?: ImageSourcePropType; size?: number; online?: boolean }


export default function Avatar({ source, size = 56, online = false }: Props) {
return (
<View style={[styles.wrapper, { width: size, height: size, borderRadius: size / 2 }]}>
<Image source={source} style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} />
{online && <View style={[styles.dot, { right: 4, bottom: 4 }]} />}
</View>
);
}


const styles = StyleSheet.create({
wrapper: { position: 'relative', overflow: 'hidden', backgroundColor: '#eee' },
image: { resizeMode: 'cover' },
dot: { position: 'absolute', width: 12, height: 12, borderRadius: 6, backgroundColor: '#4ADE80', borderWidth: 2, borderColor: '#fff' },
});