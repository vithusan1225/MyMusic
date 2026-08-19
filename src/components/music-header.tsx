import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";

type MusicHeaderProps = {
  location: string;
};

export function MusicHeader({ location }: MusicHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <ThemedView style={styles.logo}>
          <SymbolView
            tintColor="#ffffff"
            name={{ ios: "waveform", android: "music_note", web: "music_note" }}
            size={20}
          />
        </ThemedView>
        <View>
          <ThemedText style={styles.brand}>Melo</ThemedText>
          <ThemedText
            type="small"
            themeColor="textSecondary"
            style={styles.location}
          >
            {location}
          </ThemedText>
        </View>
      </View>
      <Pressable accessibilityLabel="Open profile" style={styles.profileButton}>
        <ThemedText style={styles.profileText}>MV</ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: Spacing.three,
  },
  brandRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: Spacing.two,
  },
  logo: {
    alignItems: "center",
    backgroundColor: "#e85d75",
    borderRadius: 14,
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  brand: {
    fontSize: 21,
    fontWeight: "800",
    letterSpacing: 0,
  },
  location: {
    fontSize: 12,
    lineHeight: 16,
  },
  profileButton: {
    alignItems: "center",
    backgroundColor: "#242936",
    borderColor: "#353b4a",
    borderRadius: 18,
    borderWidth: 1,
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  profileText: {
    color: "#f7f8fa",
    fontSize: 11,
    fontWeight: "800",
  },
});
