import { InputField } from '@/components/ui/input-field';
import { Palette as P } from '@/constants/palette';
import { Fonts } from '@/constants/theme';
import {
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_700Bold,
  useFonts,
} from '@expo-google-fonts/lexend';
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

// ── Shared OR divider ──────────────────────────────────────────────────────
function OrDivider({ label = 'OU' }: { label?: string }) {
  return (
    <View style={orStyles.row}>
      <View style={orStyles.line} />
      <Text style={orStyles.text}>{label}</Text>
      <View style={orStyles.line} />
    </View>
  );
}

const orStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  line: { flex: 1, height: 1, backgroundColor: P.stroke },
  text: { marginHorizontal: 12, fontSize: 13, fontWeight: '600', color: P.textMuted },
});

// ── Screen ─────────────────────────────────────────────────────────────────
export default function RegisterScreen() {
    const [fontsLoaded] = useFonts({
            Lexend_400Regular,
            Lexend_600SemiBold,
            Lexend_700Bold,
          })

  const router = useRouter();
  const [nome, setNome]       = useState('');
  const [email, setEmail]     = useState('');
  const [senha, setSenha]     = useState('');
  const [confirma, setConfirma] = useState('');

  const handleRegister = async () => {
    if (!nome || !email || !senha || !confirma) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    if (senha !== confirma) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }
    // TODO: chamar API de cadastro
    console.log({ nome, email, senha });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={P.white} />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* ── Screen Header ───────────────────────────────── */}
        <View style={styles.screenHeader}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={22} color={P.dark} />
          </TouchableOpacity>

          <Text style={styles.screenTitle}>MemoRise</Text>

          <View style={styles.backBtn} />
        </View>
        <View style={styles.separator} />

        {/* ── Scrollable Form ─────────────────────────────── */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Title */}
          <Text style={styles.pageTitle}>Criar Conta</Text>
          <Text style={styles.subtitle}>
            {'Junte-se a MemoRise para dominar\nsua memória com nossos cards.'}
          </Text>

          {/* Form fields */}
          <InputField
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            leftIcon="person-outline"
            autoCapitalize="words"
            value={nome}
            onChangeText={setNome}
          />
          <InputField
            label="Email"
            placeholder="Digite seu email"
            leftIcon="mail-outline"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            label="Senha"
            placeholder="Digite a senha"
            leftIcon="lock-closed-outline"
            password
            value={senha}
            onChangeText={setSenha}
          />
          <InputField
            label="Confirme a senha"
            placeholder="Repita a senha"
            leftIcon="sync-outline"
            password
            value={confirma}
            onChangeText={setConfirma}
          />

          {/* Create account button */}
          <TouchableOpacity
            style={styles.btnDark}
            onPress={handleRegister}
            activeOpacity={0.85}
          >
            <Text style={styles.btnDarkText}>Criar Conta</Text>
          </TouchableOpacity>

          <OrDivider />

          {/* Google */}
          <TouchableOpacity style={styles.btnGoogle} activeOpacity={0.85}>
            <AntDesign name="google" size={20} color={P.white} style={{ marginRight: 10 }} />
            <Text style={styles.btnGoogleText}>Continue com Google</Text>
          </TouchableOpacity>

          {/* Login link */}
          <View style={styles.bottomRow}>
            <Text style={styles.bottomMuted}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.push('/login')} activeOpacity={0.7}>
              <Text style={styles.bottomBold}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: P.background },
  flex: { flex: 1 },

  // ── Header
  screenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  backBtn: {
    width: 36,
    height: 36,
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
  },

  // ── Content
  scrollContent: {
    paddingHorizontal: 32,
    marginTop: 32,
  },
  pageTitle: {
    fontSize: 28,
    fontFamily: Fonts.bold,
    color: P.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: P.dark,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },

  // ── Buttons
  btnDark: {
    backgroundColor: P.dark,
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  btnDarkText: {
    color: P.white,
    fontSize: 16,
    fontFamily: Fonts.bold,
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
    fontFamily: Fonts.bold,
  },

  // ── Bottom link
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  bottomMuted: { fontSize: 13, color: P.textMuted },
  bottomBold:  { fontSize: 13, fontFamily: Fonts.bold, color: P.primary },
});
