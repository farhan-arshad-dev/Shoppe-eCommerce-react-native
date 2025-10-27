export const typography = (() => {
    const fontFamily = {
        RalewayBold: "Raleway-Bold",
        NunitoSansLight: "NunitoSans-Light",
        NunitoSansBold: "NunitoSans-Bold",
        PoppinsMedium: "Poppins-Medium",
    };

    const fontSize = {
        xSmall: 10,
        small: 12,
        medium: 14,
        large: 16,
        xLarge: 20,
        xxLarge: 22,
        xxxLarge: 24,
        huge: 28,
        xHuge: 32,
        xxHuge: 36,
        giant: 40,
        xGiant: 44,
        xxGiant: 48,
        xxxGiant: 50,
        ultra: 52,
    };

    const lineHeight = {
        xSmall: 16,
        small: 18,
        medium: 22,
        large: 24,
        xLarge: 30,
        xxLarge: 32,
        xxxLarge: 34,
        huge: 38,
        xHuge: 44,
        xxHuge: 50,
        giant: 54,
        xGiant: 58,
        xxGiant: 62,
        ultra: 66,
    };

    const fontWeight = {
        thin: "100" as const,
        extraLight: "200" as const,
        light: "300" as const,
        regular: "400" as const,
        medium: "500" as const,
        semiBold: "600" as const,
        bold: "700" as const,
        extraBold: "800" as const,
        black: "900" as const,
    };

    const fontStyle = {
        hero: {
            fontSize: fontSize.ultra,
            lineHeight: lineHeight.xxGiant,
            fontWeight: fontWeight.bold,
            fontFamily: fontFamily.RalewayBold
        },
        displayLarge: {
            fontSize: fontSize.xxxGiant,
            lineHeight: lineHeight.giant,
            fontWeight: fontWeight.bold,
            fontFamily: fontFamily.RalewayBold
        },
        headlineLarge: {
            fontSize: fontSize.huge,
            lineHeight: lineHeight.huge,
            fontWeight: fontWeight.bold,
            fontFamily: fontFamily.RalewayBold
        },
        headlineMedium: {
            fontSize: fontSize.xxLarge,
            lineHeight: lineHeight.xxLarge,
            fontWeight: fontWeight.bold,
            fontFamily: fontFamily.RalewayBold
        },
        headlineSmall: {
            fontSize: fontSize.xLarge,
            lineHeight: lineHeight.xxLarge,
            fontWeight: fontWeight.bold,
            fontFamily: fontFamily.RalewayBold
        },
        headlineXSmall: {
            fontSize: fontSize.large,
            lineHeight: lineHeight.large,
            fontWeight: fontWeight.bold,
            fontFamily: fontFamily.NunitoSansBold
        },
        titleSmall: {
            fontSize: fontSize.medium,
            lineHeight: lineHeight.small,
            fontWeight: fontWeight.bold,
            fontFamily: fontFamily.RalewayBold
        },
        bodyXXLarge: {
            fontSize: fontSize.xxLarge,
            lineHeight: lineHeight.xxLarge,
            fontWeight: fontWeight.light,
            fontFamily: fontFamily.NunitoSansLight
        },
        bodyXLarge: {
            fontSize: fontSize.xLarge,
            lineHeight: lineHeight.xxLarge,
            fontWeight: fontWeight.light,
            fontFamily: fontFamily.NunitoSansLight
        },
        bodyLarge: {
            fontSize: fontSize.large,
            lineHeight: lineHeight.large,
            fontWeight: fontWeight.light,
            fontFamily: fontFamily.NunitoSansLight
        },
        bodyMedium: {
            fontSize: fontSize.medium,
            lineHeight: lineHeight.medium,
            fontWeight: fontWeight.medium,
            fontFamily: fontFamily.PoppinsMedium
        },
    };
    return {
        fontFamily,
        fontSize,
        lineHeight,
        fontWeight,
        fontStyle,
    };
})();
