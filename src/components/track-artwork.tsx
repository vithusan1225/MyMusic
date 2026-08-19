import { SymbolView } from "expo-symbols";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { Track } from "@/constants/music";

type TrackArtworkProps = {
  track: Pick<Track, "color">;
  size?: number;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
};

export function TrackArtwork({
  track,
  size = 56,
  iconSize = 20,
  style,
}: TrackArtworkProps) {
  return (
    <View
      style={[
        styles.artwork,
        { backgroundColor: track.color, height: size, width: size },
        style,
      ]}
    >
      <SymbolView
        tintColor="#ffffff"
        name={{ ios: "music.note", android: "music_note", web: "music_note" }}
        size={iconSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  artwork: { alignItems: "center", borderRadius: 12, justifyContent: "center" },
});
