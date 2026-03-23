import { InputField } from '@/components/ui/input-field';
import { Palette as P } from '@/constants/palette';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Fonts } from '@/constants/theme';
import {
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_700Bold,
  useFonts,
} from '@expo-google-fonts/lexend';

// ── Shared OR divider ──────────────────────────────────────────────────────
function OrDivider({ label = 'OR' }: { label?: string }) {
  return (
    <View style={orStyles.row}>
      <View style={orStyles.line} />
      <Text style={orStyles.text}>{label}</Text>
      <View style={orStyles.line} />
    </View>
  );
}

const orStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 24 },
  line: { flex: 1, height: 1, backgroundColor: P.stroke },
  text: { marginHorizontal: 12, fontSize: 13, fontWeight: '600', color: P.textMuted },
});

// ── Screen ─────────────────────────────────────────────────────────────────
export default function LoginScreen() {
    const [fontsLoaded] = useFonts({
        Lexend_400Regular,
        Lexend_600SemiBold,
        Lexend_700Bold,
      })

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
    }
    // TODO: chamar API de login
    console.log({ email, senha });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={P.white} />

      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {/* ── Screen Header ───────────────────────────────── */}
          <View style={styles.screenHeader}>
            <TouchableOpacity
              onPress={() => router.replace('/')}
              style={styles.backBtn}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={22} color={P.dark} />
            </TouchableOpacity>

            <Text style={styles.screenTitle}>MemoRise</Text>

            {/* Placeholder to keep title truly centered */}
            <View style={styles.backBtn} />
          </View>
          <View style={styles.separator} />

          {/* ── Scrollable Form ─────────────────────────────── */}
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.pageTitle}>Bem Vindo!</Text>

            <InputField
              label="Email"
              placeholder="Digite seu Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <InputField
              label="Senha"
              placeholder="Digite sua senha"
              password
              value={senha}
              onChangeText={setSenha}
            />

            {/* Forgot password */}
            <TouchableOpacity
              style={styles.forgotBtn}
              onPress={() => router.push('/forgot-password')}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Enter button */}
            <TouchableOpacity
              style={styles.btnDark}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text style={styles.btnDarkText}>Entre  ↩</Text>
            </TouchableOpacity>

            <OrDivider />

            {/* Google */}
            <TouchableOpacity style={styles.btnGoogle} activeOpacity={0.85}>
              <AntDesign name="google" size={20} color={P.white} style={{ marginRight: 10 }} />
              <Text style={styles.btnGoogleText}>Continue com Google</Text>
            </TouchableOpacity>

            {/* Sign up link */}
            <View style={styles.bottomRow}>
              <Text style={styles.bottomMuted}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/register')} activeOpacity={0.7}>
                <Text style={styles.bottomBold}>Sign up for free</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: P.background },
  flex: { flex: 1 },

  container: {
    flex: 1,
    paddingHorizontal: 32,
  },

  scrollContent: {
    marginTop: 64,
  },

  // ── Header
  screenHeader: {
      height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: P.dark,
  },
  separator: {
    height: 1,
    backgroundColor: P.stroke,
    marginHorizontal: -32,
  },

  // ── Content
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: P.dark,
    marginBottom: 64,
  },

  // ── Forgot
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: 32,
    marginBottom: 64,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '600',
    color: P.primary,
  },

  // ── Buttons
  btnDark: {
    backgroundColor: P.dark,
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDarkText: {
    color: P.white,
    fontSize: 16,
    fontWeight: '700',
  },
  btnGoogle: {
    backgroundColor: P.primary,
    borderRadius: 14,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGoogleText: {
    color: P.white,
    fontSize: 16,
    fontWeight: '700',
  },

  // ── Bottom link
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  bottomMuted: { fontSize: 13, color: P.textMuted },
  bottomBold: { fontSize: 13, fontWeight: '700', color: P.dark },
});
