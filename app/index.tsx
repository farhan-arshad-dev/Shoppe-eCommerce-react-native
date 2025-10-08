import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppLogoImage from "@/assets/images/app-logo.png"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();

  const onStartedPressed = () => {
    router.push("/auth/register");
  };

  const onLoginPressed = () => {
    router.push("/auth/login");
  };

  return (
    <View style={styles.container} >

      <View style={styles.centerContent}>
        <View style={styles.logoCard}>
          <Image source={AppLogoImage} />
        </View>
        <Text style={styles.title}>Shoppe</Text>
        <Text style={styles.description}>Beautiful eCommerce UI Kit{"\n"}for your online store</Text>
      </View>

      <View style={styles.footerContent}>
        <TouchableOpacity style={styles.startButton} onPress={onStartedPressed}>
          <Text style={styles.startButtonText}>Let&apos;s get started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginTextContainer} onPress={onLoginPressed}>
          <Text style={styles.loginText}>I already have an account</Text>
          <View style={styles.loginArrowIcon}>
            <FontAwesome6 name="arrow-right-long" size={14} color="#ffffff" />
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  centerContent: {
    flex: 1,
    justifyContent: "center", // center vertically in remaining space
    alignItems: "center",
  },
  logoCard: {
    backgroundColor: "#ffffff",

    width: 134,
    height: 134,
    borderRadius: 67, // Half of the width/height
    justifyContent: 'center',
    alignItems: 'center',

    // iOS Shadow
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 4,

    // Android Shadow
    elevation: 4,
  },
  title: {
    fontSize: 52,
    marginTop: 24,
    fontWeight: "bold"
  },

  description: {
    fontSize: 18,
    marginTop: 18,
    fontWeight: "300",
    color: "#202020",
    textAlign: "center",
    lineHeight: 33
  },
  footerContent: {
    width: "100%",
  },
  startButton: {
    justifyContent: "center",
    marginHorizontal: 24,
    backgroundColor: "#004CFF",
    borderRadius: 16,
  },
  startButtonText: {
    color: "#F3F3F3",
    margin: 16,
    fontFamily: "Nunito Sans",
    fontSize: 22,
    fontWeight: "300",
    textAlign: "center", // ✅ centers text horizontally
  },
  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    marginVertical: 24,
  },
  loginText: {
    color: "#202020",
    opacity: 0.9,
  },
  loginArrowIcon: {
    height: 30,
    width: 30,
    marginHorizontal: 16,
    backgroundColor: "#004CFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  }
});
