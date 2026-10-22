import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  // State navigasi antar layar: 'login' atau 'home'
  const [currentScreen, setCurrentScreen] = useState('login');

  // State penyimpanan input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Aksi tombol login
  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Perhatian', 'Harap isi email dan password Anda.');
      return;
    }
    setCurrentScreen('home');
  };

  // Aksi tombol logout
  const handleLogout = () => {
    setEmail('');
    setPassword('');
    setCurrentScreen('login');
  };

  // Aksi klik menu
  const handleMenuPress = (menuTitle) => {
    Alert.alert('Menu Dipilih', `Membuka halaman ${menuTitle}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#800020" />

      {currentScreen === 'login' ? (
        /* ================= HALAMAN LOGIN ================= */
        <View style={styles.screenCenter}>
          <View style={styles.formContainer}>
            {/* Header Judul */}
            <View style={styles.headerBlock}>
              <Text style={styles.appTitle}>MY APP</Text>
              <Text style={styles.appSubtitle}>UTS MOBILE 1</Text>
            </View>

            {/* Input Email */}
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder="nama@email.com"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Input Password */}
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Password</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Masukkan password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>

            {/* Tombol Login */}
            <TouchableOpacity
              style={styles.btnPrimary}
              activeOpacity={0.8}
              onPress={handleLogin}
            >
              <Text style={styles.btnPrimaryText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        /* ================= HALAMAN HOME ================= */
        <ScrollView contentContainerStyle={styles.scrollCenter}>
          <View style={styles.homeContainer}>
            {/* Header Halaman */}
            <Text style={styles.homeTitle}>HOME PAGE</Text>

            {/* Kotak Profil */}
            <View style={styles.profileBox}>
              <Image
                source={require('./assets/profile.jpg')}
                style={styles.avatarImage}
                resizeMode="cover"
              />
              <Text style={styles.profileName}>
                {email ? email.split('@')[0].toUpperCase() : 'RASYA PRATAMA'}
              </Text>
              <Text style={styles.profileSub}>Teknik Informatika</Text>
            </View>

            {/* 4 Menu Pilihan (Grid 2x2) */}
            <View style={styles.menuContainer}>
              <View style={styles.menuRow}>
                <TouchableOpacity
                  style={styles.menuCard}
                  activeOpacity={0.7}
                  onPress={() => handleMenuPress('Menu 1 (Jadwal)')}
                >
                  <Text style={styles.menuCardTitle}>MENU 1</Text>
                  <Text style={styles.menuCardSub}>Jadwal Kuliah</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuCard}
                  activeOpacity={0.7}
                  onPress={() => handleMenuPress('Menu 2 (Nilai)')}
                >
                  <Text style={styles.menuCardTitle}>MENU 2</Text>
                  <Text style={styles.menuCardSub}>Nilai Akademik</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.menuRow}>
                <TouchableOpacity
                  style={styles.menuCard}
                  activeOpacity={0.7}
                  onPress={() => handleMenuPress('Menu 3 (Tugas)')}
                >
                  <Text style={styles.menuCardTitle}>MENU 3</Text>
                  <Text style={styles.menuCardSub}>Tugas Kuliah</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuCard}
                  activeOpacity={0.7}
                  onPress={() => handleMenuPress('Menu 4 (Akun)')}
                >
                  <Text style={styles.menuCardTitle}>MENU 4</Text>
                  <Text style={styles.menuCardSub}>Pengaturan</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Tombol Logout */}
            <TouchableOpacity
              style={styles.btnLogout}
              activeOpacity={0.8}
              onPress={handleLogout}
            >
              <Text style={styles.btnLogoutText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

/* ================= DESAIN TEMA: MAROON & WHITE ================= */
const MAROON = '#800020';      // Maroon elegan
const WHITE = '#FFFFFF';       // Putih bersih
const DARK = '#1F2937';        // Teks utama hitam keabuan
const MUTED = '#6B7280';       // Teks sekunder abu-abu lembut
const BORDER_LIGHT = '#E5E7EB';// Border halus abu-abu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  screenCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  scrollCenter: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 36,
  },

  /* Form Container */
  formContainer: {
    width: '100%',
    maxWidth: 340,
  },
  headerBlock: {
    alignItems: 'center',
    marginBottom: 36,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: MAROON,
    letterSpacing: 2,
  },
  appSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: MUTED,
    marginTop: 4,
    letterSpacing: 1,
  },

  /* Input Field */
  fieldBlock: {
    marginBottom: 18,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: DARK,
    marginBottom: 6,
  },
  textInput: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: BORDER_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: DARK,
    backgroundColor: '#FAFAFA',
  },

  /* Tombol Login */
  btnPrimary: {
    width: '100%',
    height: 48,
    backgroundColor: MAROON,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btnPrimaryText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.2,
  },

  /* Halaman Home */
  homeContainer: {
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
  },
  homeTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: MAROON,
    letterSpacing: 1.5,
    marginBottom: 24,
  },

  /* Box Profil */
  profileBox: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: MAROON,
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: WHITE,
    marginBottom: 24,
  },
  avatarImage: {
    width: 85,
    height: 85,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: MAROON,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    color: DARK,
  },
  profileSub: {
    fontSize: 12,
    color: MUTED,
    marginTop: 2,
  },

  /* Grid Menu */
  menuContainer: {
    width: '100%',
    marginBottom: 28,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  menuCard: {
    flex: 0.48,
    height: 72,
    borderWidth: 1.5,
    borderColor: BORDER_LIGHT,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  menuCardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: MAROON,
    letterSpacing: 0.5,
  },
  menuCardSub: {
    fontSize: 11,
    color: MUTED,
    marginTop: 2,
  },

  /* Tombol Logout */
  btnLogout: {
    width: '100%',
    height: 46,
    borderWidth: 1.5,
    borderColor: MAROON,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  btnLogoutText: {
    color: MAROON,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
  },
});