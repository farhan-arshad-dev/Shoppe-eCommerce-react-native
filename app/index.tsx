import { Image, Text, View } from "react-native";
import AppLogoImage from "@/assets/images/app-logo.png"
import { useRouter } from "expo-router";
import PrimaryButton from "@/src/components/PrimaryButton";
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

  return (
    <View style={commonStyles.containerWithPadding} >

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
    width: theme.metrics.componentSizes.logoCard,
    height: theme.metrics.componentSizes.logoCard,
    borderRadius: theme.metrics.componentSizes.logoCard / 2,
  },
  title: {
    ...theme.typography.fontStyle.hero,
    marginTop: theme.metrics.spacing.xLarge,
  },
  description: {
    ...theme.typography.fontStyle.bodyXLarge,
    color: theme.colors.primaryText,
    textAlign: "center",
    marginTop: theme.metrics.spacing.large,
  },
  loginTextContainer: {
    alignItems: "flex-end",
    marginVertical: theme.metrics.spacing.xLarge,
  },
}));
