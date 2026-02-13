import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

interface Props {
  source?: ImageSourcePropType;
  size?: number;
  online?: boolean;
}

export default function Avatar({ source, size = 56, online = false }: Props) {
  return (
    <View
      style={[
        styles.wrapper,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Image
        source={source}
        style={[
          styles.image,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      />
      {online && (
        <View
          style={[
            styles.dot,
            {
              right: size * 0.08,
              bottom: size * 0.08,
              width: size * 0.2,
              height: size * 0.2,
              borderRadius: (size * 0.2) / 2,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#FFF5F1",
  },
  image: {
    resizeMode: "cover",
  },
  dot: {
    position: "absolute",
    backgroundColor: "#4ADE80",
    borderWidth: 2.5,
    borderColor: "#fff",
  },
});
