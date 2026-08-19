import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { MusicHeader } from "@/components/music-header";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

type MusicScreenProps = PropsWithChildren<{
  location: string;
  scroll?: boolean;
}>;

export function MusicScreen({
  children,
  location,
  scroll = true,
}: MusicScreenProps) {
  const content = <>{children}</>;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.inner}>
          <MusicHeader location={location} />
          {scroll ? (
            <ScrollView
              contentContainerStyle={styles.content}
              showsVerticalScrollIndicator={false}
            >
              {content}
            </ScrollView>
          ) : (
            content
          )}
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { alignItems: "center", flex: 1 },
  inner: { flex: 1, maxWidth: MaxContentWidth, width: "100%" },
  content: {
    maxWidth: MaxContentWidth,
    paddingBottom: BottomTabInset + Spacing.four,
    paddingHorizontal: Spacing.four,
    width: "100%",
  },
});
