import { StyleSheet, View } from "react-native";

import { MusicScreen } from "@/components/music-screen";
import { ThemedText } from "@/components/themed-text";
import { TrackRow } from "@/components/track-row";
import { favoriteTracks } from "@/constants/music";
import { Spacing } from "@/constants/theme";

export default function FavoritesScreen() {
  return (
    <MusicScreen location="Your library / Favorites">
      <View style={styles.headingRow}>
        <View>
          <ThemedText type="subtitle" style={styles.title}>
            Favorites
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.subtitle}>
            Your personal collection of repeat-worthy tracks.
          </ThemedText>
        </View>
        <View style={styles.count}>
          <ThemedText style={styles.countText}>12</ThemedText>
        </View>
      </View>
      <View style={styles.list}>
        {favoriteTracks.map((track) => (
          <TrackRow key={track.title} track={track} variant="card" favorite />
        ))}
      </View>
    </MusicScreen>
  );
}

const styles = StyleSheet.create({
  headingRow: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spacing.four,
  },
  title: { fontSize: 34, lineHeight: 40 },
  subtitle: { marginTop: Spacing.one, maxWidth: 280 },
  count: {
    alignItems: "center",
    backgroundColor: "#242936",
    borderRadius: 18,
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  countText: { color: "#f3a65a", fontWeight: "800" },
  list: { gap: Spacing.two, marginTop: Spacing.four },
});
