import { Image, Text, View } from "react-native";
import AppLogoImage from "@/assets/images/app-logo.png"
import { useRouter } from "expo-router";
import PrimaryButton from "@/src/components/PrimaryButton";
import { useEffect } from "react";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { makeStyles } from "@/src/theme/makeStyles";
import TertiaryButton from "@/src/components/TertiaryButton";
import LongArrowIcon from "@/src/components/LongArrowIcon";

export default function Index() {
  const router = useRouter();

  const commonStyles = useCommonStyles();
  const styles = useStyle();

  const onStartedPressed = () => {
    router.push("/auth/register");
  };

  const onLoginPressed = () => {
    router.push("/auth/login");
  };

  // Temp code
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("/auth/register");
  //   }, 500);

  //   return () => clearTimeout(timer);
  // });

  return (
    <View style={commonStyles.screenContainer} >

      <View style={[commonStyles.centerContent, styles.logoContainer]}>
        <View style={[commonStyles.centerContent, styles.logoCard]}>
          <Image source={AppLogoImage} />
        </View>
        <Text style={styles.title}>Shoppe</Text>
        <Text style={styles.description}>Beautiful eCommerce UI Kit{"\n"}for your online store</Text>
      </View>

      <View>
        <PrimaryButton text={"Let's get started"} onPress={onStartedPressed} />

        <TertiaryButton
          containerStyle={styles.loginTextContainer}
          text={"I already have an account"}
          onPress={onLoginPressed}>
          <LongArrowIcon />
        </TertiaryButton>
      </View>
    </View>
  );
}

const useStyle = makeStyles((theme) => ({
  logoContainer: {
    flex: 1,
  },
  logoCard: {
    ...theme.shadows.medium,
    width: 134,
    height: 134,
    borderRadius: 67,
  },
  title: {
    ...theme.typography.fontStyle.hero,
    marginTop: 24,
  },
  description: {
    ...theme.typography.fontStyle.headlineSmall,
    color: theme.colors.primaryText,
    textAlign: "center",
    marginTop: theme.metrics.spacing.large,
  },
  loginTextContainer: {
    alignItems: "flex-end",
    marginVertical: theme.metrics.spacing.xLarge,
  },
}));
