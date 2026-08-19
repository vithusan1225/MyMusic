import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";

import { MusicScreen } from "@/components/music-screen";
import { ThemedText } from "@/components/themed-text";
import { TrackArtwork } from "@/components/track-artwork";
import { tracks } from "@/constants/music";
import { Spacing } from "@/constants/theme";

export default function PlayerScreen() {
  return (
    <MusicScreen location="Now playing" scroll={false}>
      <View style={styles.content}>
        <View style={styles.playerContent}>
          <TrackArtwork
            track={tracks[0]}
            size={260}
            iconSize={74}
            style={styles.cover}
          />
          <View style={styles.trackHeader}>
            <View>
              <ThemedText type="subtitle" style={styles.trackTitle}>
                Midnight City
              </ThemedText>
              <ThemedText themeColor="textSecondary">M83</ThemedText>
            </View>
            <Pressable
              accessibilityLabel="Add to favorites"
              style={styles.heartButton}
            >
              <SymbolView
                tintColor="#e85d75"
                name={{
                  ios: "heart",
                  android: "favorite_border",
                  web: "favorite_border",
                }}
                size={22}
              />
            </Pressable>
          </View>
          <View style={styles.progressArea}>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
              <View style={styles.progressKnob} />
            </View>
            <View style={styles.timeRow}>
              <ThemedText type="small" themeColor="textSecondary">
                1:42
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                4:03
              </ThemedText>
            </View>
          </View>
          <View style={styles.controls}>
            <SymbolView
              tintColor="#f7f8fa"
              name={{ ios: "shuffle", android: "shuffle", web: "shuffle" }}
              size={20}
            />
            <Pressable accessibilityLabel="Previous track">
              <SymbolView
                tintColor="#f7f8fa"
                name={{
                  ios: "backward.end.fill",
                  android: "skip_previous",
                  web: "skip_previous",
                }}
                size={25}
              />
            </Pressable>
            <Pressable accessibilityLabel="Play" style={styles.playButton}>
              <SymbolView
                tintColor="#11131a"
                name={{
                  ios: "play.fill",
                  android: "play_arrow",
                  web: "play_arrow",
                }}
                size={28}
              />
            </Pressable>
            <Pressable accessibilityLabel="Next track">
              <SymbolView
                tintColor="#f7f8fa"
                name={{
                  ios: "forward.end.fill",
                  android: "skip_next",
                  web: "skip_next",
                }}
                size={25}
              />
            </Pressable>
            <SymbolView
              tintColor="#f7f8fa"
              name={{ ios: "repeat", android: "repeat", web: "repeat" }}
              size={20}
            />
          </View>
        </View>
      </View>
    </MusicScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: Spacing.four,
  },
  playerContent: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingBottom: Spacing.five,
  },
  cover: {
    borderRadius: 28,
    shadowColor: "#e85d75",
    shadowOpacity: 0.35,
    shadowRadius: 28,
  },
  trackHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spacing.five,
    width: "100%",
  },
  trackTitle: { fontSize: 28, lineHeight: 34 },
  heartButton: {
    alignItems: "center",
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  progressArea: { marginTop: Spacing.five, width: "100%" },
  progressTrack: {
    backgroundColor: "#303644",
    borderRadius: 3,
    height: 5,
    position: "relative",
    width: "100%",
  },
  progressFill: {
    backgroundColor: "#f3a65a",
    borderRadius: 3,
    height: 5,
    width: "42%",
  },
  progressKnob: {
    backgroundColor: "#f3a65a",
    borderRadius: 6,
    height: 12,
    left: "40%",
    position: "absolute",
    top: -4,
    width: 12,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spacing.one,
  },
  controls: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spacing.five,
    width: "100%",
  },
  playButton: {
    alignItems: "center",
    backgroundColor: "#f3a65a",
    borderRadius: 32,
    height: 64,
    justifyContent: "center",
    width: 64,
  },
});
