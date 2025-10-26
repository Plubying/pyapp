import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Link } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function OnboardingScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.illustration}
          contentFit="contain"
        />

        <View style={styles.textBlock}>
          <ThemedText type="title" style={styles.title}>
            Easy <ThemedText type="title" style={styles.highlight}>Wallet</ThemedText>
            {'\n'}with the simplest way
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            Best payment Method, connect your money to your friends, family, brand or experience
          </ThemedText>
        </View>

        <Link href="./wallet">
          <Link.Trigger>
            <TouchableOpacity style={styles.cta} activeOpacity={0.8}>
              <IconSymbol name="arrow.right" size={28} color="#fff" />
            </TouchableOpacity>
          </Link.Trigger>
        </Link>

        <View style={styles.dotsRow}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Link href="./wallet">
          <Link.Trigger>
            <ThemedText style={styles.skip}>Skip</ThemedText>
          </Link.Trigger>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#0f1720',
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 18,
  },
  illustration: {
    width: 220,
    height: 180,
  },
  textBlock: {
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 8,
  },
  title: {
    textAlign: 'center',
    lineHeight: 34,
  },
  highlight: {
    color: '#24D6B6',
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.8,
    marginTop: 4,
  },
  cta: {
    marginTop: 8,
    backgroundColor: '#24D6B6',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4b5563',
  },
  dotActive: {
    width: 12,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#24D6B6',
  },
  skip: {
    marginTop: 12,
    opacity: 0.9,
  },
});
