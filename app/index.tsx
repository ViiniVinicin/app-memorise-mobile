import { Palette as P } from '@/constants/palette';
import { Fonts } from '@/constants/theme';
import {
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_700Bold,
  useFonts,
} from '@expo-google-fonts/lexend';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_600SemiBold,
    Lexend_700Bold,
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={P.background} />

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Ionicons name="book-outline" size={22} color={P.dark} />
            <Text style={styles.logoText}>MemoRise</Text>
          </View>

          <TouchableOpacity style={styles.helpBtn} activeOpacity={0.7}>
            <Ionicons name="help-circle-outline" size={28} color={P.dark} />
          </TouchableOpacity>
        </View>

        <View style={styles.heroCard}>
          <Image
            source={require('../assets/images/MemoRiseLogo1.png')}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.titleDark}>{'Desbloqueie\nSeu'}</Text>
          <Text style={styles.titlePink}>Potencial</Text>
          <Text style={styles.subtitle}>
            {'Domine qualquer assunto com\nflashcards interativos.'}
          </Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => router.push('/register')}
            activeOpacity={0.85}
          >
            <Text style={styles.btnPrimaryText}>Comece Agora →</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => router.push('/login')}
            activeOpacity={0.85}
          >
            <Text style={styles.btnSecondaryText}>Entre ↪</Text>
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
    paddingHorizontal: 32,
  },

   /* -------- Header ---------*/

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  logoText: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: P.dark,
    letterSpacing: 0.2,
  },

  helpBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* -------- Central Container ---------*/

  heroCard: {
    width: '100%',
    height: 320,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 32,
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

   /* -------- Text ---------*/

  textBlock: {
    alignItems: 'center',
    marginBottom: 32,
  },

  titleDark: {
    fontFamily: Fonts.bold,
    fontSize: 38,
    color: P.dark,
    textAlign: 'center',
    lineHeight: 46,
  },

  titlePink: {
    fontFamily: Fonts.bold,
    fontSize: 38,
    color: P.primary,
    textAlign: 'center',
    marginBottom: 26,
    lineHeight: 46,
  },

  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: P.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },

  /* -------- Buttons ---------*/

  buttons: {
    gap: 16,
  },

  btnPrimary: {
    backgroundColor: P.primary,
    borderRadius: 14,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnPrimaryText: {
    color: P.white,
    fontSize: 16,
    fontFamily: Fonts.bold,
    letterSpacing: 0.3,
  },

  btnSecondary: {
    backgroundColor: P.secondary,
    borderRadius: 14,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnSecondaryText: {
    color: P.white,
    fontSize: 16,
    fontFamily: Fonts.semibold,
  },
});