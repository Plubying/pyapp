import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

const transactions = [
  { id: '1', name: 'John Doe', time: 'Feb, 26 4:50 PM', amount: '-$890', color: '#6D28D9' },
  { id: '2', name: 'Laim Smith', time: 'Feb, 26 4:50 PM', amount: '+$890', color: '#EF4444' },
  { id: '3', name: 'Ben Stokes', time: 'Feb, 26 4:50 PM', amount: '-$890', color: '#4F46E5' },
  { id: '4', name: 'Joe Root', time: 'Feb, 26 4:50 PM', amount: '+$890', color: '#06B6D4' },
];

export default function WalletScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.greeting}>
        Hello, John <ThemedText>👋</ThemedText>
      </ThemedText>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={styles.cardChip} />
            <IconSymbol name="wifi" size={18} color="#fff" />
          </View>
          <ThemedText style={styles.cardNumber}>3456 4567 5437 3278</ThemedText>
          <View style={styles.cardBottomRow}>
            <View style={styles.cardLogo} />
            <View />
          </View>
        </View>
      </View>

      <ThemedView style={styles.transactionsCard}>
        <ThemedText type="subtitle">Last Transactions</ThemedText>

        <FlatList
          data={transactions}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <View style={styles.txRow}>
              <View style={[styles.avatar, { backgroundColor: item.color }]}>
                <ThemedText style={styles.avatarInitial}>{item.name.charAt(0)}</ThemedText>
              </View>
              <View style={styles.txMeta}>
                <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
                <ThemedText style={styles.txTime}>{item.time}</ThemedText>
              </View>
              <ThemedText style={[styles.amount, item.amount.startsWith('+') ? styles.positive : styles.negative]}>
                {item.amount}
              </ThemedText>
            </View>
          )}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  greeting: {
    marginTop: 8,
  },
  cardContainer: {
    marginTop: 6,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    height: 140,
    borderRadius: 16,
    backgroundColor: '#FF7043',
    padding: 16,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardChip: {
    width: 40,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 16,
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLogo: {
    width: 36,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  transactionsCard: {
    marginTop: 18,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#0f1720',
    flex: 1,
  },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: '#222',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarInitial: {
    color: '#fff',
    fontWeight: '700',
  },
  txMeta: {
    flex: 1,
  },
  txTime: {
    opacity: 0.7,
    fontSize: 12,
    marginTop: 2,
  },
  amount: {
    fontWeight: '700',
  },
  positive: {
    color: '#10B981',
  },
  negative: {
    color: '#F97316',
  },
});
