import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Track } from "@/constants/music";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { TrackArtwork } from "./track-artwork";

type TrackRowProps = {
  track: Track;
  variant?: "plain" | "card";
  favorite?: boolean;
  onPress?: () => void;
};

export function TrackRow({
  track,
  variant = "plain",
  favorite = false,
  onPress,
}: TrackRowProps) {
  const theme = useTheme();
  const content = (
    <>
      <TrackArtwork
        track={track}
        size={variant === "card" ? 58 : 54}
        iconSize={variant === "card" ? 20 : 18}
      />
      <View style={styles.info}>
        <ThemedText style={styles.title}>{track.title}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {track.artist}
        </ThemedText>
      </View>
      {variant === "plain" && track.duration && (
        <ThemedText type="small" themeColor="textSecondary">
          {track.duration}
        </ThemedText>
      )}
      {favorite ? (
        <SymbolView
          tintColor="#e85d75"
          name={{ ios: "heart.fill", android: "favorite", web: "favorite" }}
          size={18}
        />
      ) : (
        <SymbolView
          tintColor={theme.textSecondary}
          name={{ ios: "ellipsis", android: "more_vert", web: "more_vert" }}
          size={20}
        />
      )}
    </>
  );

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        variant === "card" && styles.card,
        pressed && styles.pressed,
      ]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: Spacing.two,
    paddingVertical: Spacing.two,
  },
  card: {
    backgroundColor: "#171b24",
    borderColor: "#252b38",
    borderRadius: 16,
    borderWidth: 1,
    padding: Spacing.two,
  },
  info: { flex: 1, gap: 2 },
  title: { fontSize: 16, fontWeight: "700" },
  pressed: { opacity: 0.65 },
});
