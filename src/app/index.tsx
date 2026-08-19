import { Link } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";

import { MusicScreen } from "@/components/music-screen";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TrackArtwork } from "@/components/track-artwork";
import { recentTracks } from "@/constants/music";
import { Spacing } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <MusicScreen location="Home / Discover">
      <View style={styles.greeting}>
        <ThemedText type="small" themeColor="textSecondary">
          Good evening
        </ThemedText>
        <ThemedText type="subtitle" style={styles.title}>
          Find your rhythm.
        </ThemedText>
      </View>
      <ThemedView style={styles.featured}>
        <View style={styles.featuredArt}>
          <SymbolView
            tintColor="#ffffff"
            name={{ ios: "waveform", android: "music_note", web: "music_note" }}
            size={56}
          />
        </View>
        <View style={styles.featuredCopy}>
          <ThemedText type="small" style={styles.overline}>
            YOUR MIX
          </ThemedText>
          <ThemedText style={styles.featuredTitle}>Late night drive</ThemedText>
          <ThemedText type="small" style={styles.featuredDescription}>
            A warm collection for wherever the night takes you.
          </ThemedText>
          <Link href="/player" asChild>
            <Pressable style={styles.playCta}>
              <ThemedText style={styles.playCtaText}>Play mix</ThemedText>
              <SymbolView
                tintColor="#11131a"
                name={{
                  ios: "play.fill",
                  android: "play_arrow",
                  web: "play_arrow",
                }}
                size={16}
              />
            </Pressable>
          </Link>
        </View>
      </ThemedView>
      <View style={styles.sectionHeader}>
        <ThemedText style={styles.sectionTitle}>Recently played</ThemedText>
        <Link href="/songs">
          <ThemedText type="small" style={styles.seeAll}>
            See all
          </ThemedText>
        </Link>
      </View>
      <View style={styles.recentRow}>
        {recentTracks.map((track) => (
          <Link key={track.title} href="/player" asChild>
            <Pressable style={styles.recentCard}>
              <TrackArtwork
                track={track}
                size={84}
                iconSize={25}
                style={styles.recentArt}
              />
              <ThemedText style={styles.recentTitle} numberOfLines={1}>
                {track.title}
              </ThemedText>
            </Pressable>
          </Link>
        ))}
      </View>
    </MusicScreen>
  );
}

const styles = StyleSheet.create({
  greeting: { marginTop: Spacing.four },
  title: { fontSize: 34, lineHeight: 40, marginTop: Spacing.one },
  featured: {
    backgroundColor: "#232936",
    borderRadius: 22,
    flexDirection: "row",
    gap: Spacing.three,
    marginTop: Spacing.four,
    overflow: "hidden",
    padding: Spacing.three,
  },
  featuredArt: {
    alignItems: "center",
    backgroundColor: "#e85d75",
    borderRadius: 16,
    height: 142,
    justifyContent: "center",
    width: 112,
  },
  featuredCopy: { flex: 1, justifyContent: "center", gap: Spacing.one },
  overline: {
    color: "#f3a65a",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  featuredTitle: { color: "#ffffff", fontSize: 22, fontWeight: "800" },
  featuredDescription: { color: "#b5bbc8", fontSize: 13, lineHeight: 18 },
  playCta: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#f3a65a",
    borderRadius: 18,
    flexDirection: "row",
    gap: Spacing.one,
    marginTop: Spacing.one,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  playCtaText: { color: "#11131a", fontSize: 13, fontWeight: "800" },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spacing.five,
  },
  sectionTitle: { fontSize: 19, fontWeight: "800" },
  seeAll: { color: "#e85d75", fontWeight: "700" },
  recentRow: {
    flexDirection: "row",
    gap: Spacing.two,
    marginTop: Spacing.three,
  },
  recentCard: { flex: 1, gap: Spacing.two },
  recentArt: { borderRadius: 16 },
  recentTitle: { fontSize: 13, fontWeight: "700" },
});
