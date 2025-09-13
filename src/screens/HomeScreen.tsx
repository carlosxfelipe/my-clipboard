import React, { useCallback, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
} from 'react-native';
import ClipboardX from '../native/ClipboardX';

function generatePixKey(): string {
  const hex = (len: number) =>
    Array.from({ length: len }, () =>
      Math.floor(Math.random() * 16).toString(16),
    ).join('');
  const y = ['8', '9', 'a', 'b'][Math.floor(Math.random() * 4)];
  return `${hex(8)}-${hex(4)}-4${hex(3)}-${y}${hex(3)}-${hex(12)}`;
}

export default function HomeScreen() {
  const [pixKey, setPixKey] = useState<string>(generatePixKey());

  const onCopy = useCallback(async () => {
    await ClipboardX.setString(pixKey);
    Alert.alert('Copiado!', 'Chave PIX copiada para a área de transferência.');
  }, [pixKey]);

  const onRegenerate = useCallback(() => {
    setPixKey(generatePixKey());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chave PIX (simulada)</Text>
      <View style={styles.keyBox}>
        <Text selectable style={styles.keyText}>
          {pixKey}
        </Text>
      </View>
      <View style={styles.actions}>
        <Pressable
          onPress={onCopy}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Copiar chave</Text>
        </Pressable>
        <Pressable
          onPress={onRegenerate}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Gerar outra</Text>
        </Pressable>
      </View>
    </View>
  );
}

const mono = Platform.select({ ios: 'Menlo', android: 'monospace' });

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: '600', color: '#000' },
  keyBox: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    backgroundColor: '#fafafa',
  },
  keyText: { fontSize: 16, color: '#000', fontFamily: mono },
  actions: { flexDirection: 'row', gap: 12 },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonPressed: { opacity: 0.85 },
  buttonText: { color: '#fff', fontWeight: '600' },
  secondaryButtonText: { color: '#000', fontWeight: '600' },
});
