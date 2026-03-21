import { Palette as P } from '@/constants/palette';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={P.background} />

      <View style={styles.container}>

        {/* ── Header ─────────────────────────────────────── */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Ionicons name="book-outline" size={22} color={P.dark} />
            <Text style={styles.logoText}>MemoRise</Text>
          </View>

          <TouchableOpacity style={styles.helpBtn} activeOpacity={0.7}>
            <Ionicons name="help-circle-outline" size={20} color={P.dark} />
          </TouchableOpacity>
        </View>

        {/* ── Hero Card ──────────────────────────────────── */}
        {/*
          Replace the placeholder below with:
          <Image
            source={require('@/assets/images/hero.png')}
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover"
          />
        */}
        <View style={styles.heroCard}>
          <View style={styles.heroPlaceholder}>
            <Ionicons name="school-outline" size={72} color={P.textMuted} />
          </View>
        </View>

        {/* ── Text Block ─────────────────────────────────── */}
        <View style={styles.textBlock}>
          <Text style={styles.titleDark}>{'Desbloqueie\nSeu'}</Text>
          <Text style={styles.titlePink}>Potencial</Text>
          <Text style={styles.subtitle}>
            {'Domine qualquer assunto com\nflashcards interativos.'}
          </Text>
        </View>

        {/* ── Buttons ────────────────────────────────────── */}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => router.push('/register')}
            activeOpacity={0.85}
          >
            <Text style={styles.btnPrimaryText}>Comece Agora  →</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => router.push('/login')}
            activeOpacity={0.85}
          >
            <Text style={styles.btnSecondaryText}>Entre  ↩</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: P.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 36,
  },

  // ── Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '700',
    color: P.dark,
    letterSpacing: 0.2,
  },
  helpBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1.5,
    borderColor: P.stroke,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Hero
  heroCard: {
    flex: 1,
    maxHeight: 260,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: P.containerBg,
    marginBottom: 28,
  },
  heroPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Text
  textBlock: {
    alignItems: 'center',
    marginBottom: 36,
  },
  titleDark: {
    fontSize: 38,
    fontWeight: '800',
    color: P.dark,
    textAlign: 'center',
    lineHeight: 46,
  },
  titlePink: {
    fontSize: 38,
    fontWeight: '800',
    color: P.primary,
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 15,
    color: P.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },

  // ── Buttons
  buttons: {
    gap: 12,
  },
  btnPrimary: {
    backgroundColor: P.primary,
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimaryText: {
    color: P.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  btnSecondary: {
    backgroundColor: P.secondaryMuted,
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondaryText: {
    color: P.textMuted,
    fontSize: 16,
    fontWeight: '600',
  },
});
