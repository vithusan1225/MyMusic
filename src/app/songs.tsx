import { StyleSheet, View } from "react-native";

import { MusicScreen } from "@/components/music-screen";
import { ThemedText } from "@/components/themed-text";
import { TrackRow } from "@/components/track-row";
import { tracks } from "@/constants/music";
import { Spacing } from "@/constants/theme";

export default function SongsScreen() {
  return (
    <MusicScreen location="Your library / Songs">
      <ThemedText type="subtitle" style={styles.title}>
        All songs
      </ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>
        Everything you have been listening to lately.
      </ThemedText>
      <View style={styles.list}>
        {tracks.map((track) => (
          <TrackRow key={track.title} track={track} />
        ))}
      </View>
    </MusicScreen>
  );
}

const styles = StyleSheet.create({
  title: { marginTop: Spacing.four, fontSize: 34, lineHeight: 40 },
  subtitle: { marginTop: Spacing.one },
  list: { gap: Spacing.two, marginTop: Spacing.four },
});
