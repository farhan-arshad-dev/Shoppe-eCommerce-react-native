export const typography = (() => {
    const fontFamily = {
        RalewayBold: "Raleway-Bold",
        NunitoSansVariable: "NunitoSans-Variable",
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
            fontWeight: fontWeight.bold,
            lineHeight: lineHeight.xxGiant,
            fontFamily: fontFamily.RalewayBold
        },
        headlineMedium: {
            fontSize: fontSize.xxLarge,
            fontWeight: fontWeight.light,
            lineHeight: lineHeight.xxLarge,
            fontFamily: fontFamily.NunitoSansVariable
        },
        headlineSmall: {
            fontSize: fontSize.xLarge,
            fontWeight: fontWeight.light,
            lineHeight: lineHeight.xxLarge,
            fontFamily: fontFamily.NunitoSansVariable
        },
        titleSmall: {
            fontSize: fontSize.medium,
            fontWeight: fontWeight.bold,
            lineHeight: lineHeight.small,
            fontFamily: fontFamily.RalewayBold
        },
        bodyMedium: {
            fontSize: fontSize.medium,
            fontWeight: fontWeight.light,
            lineHeight: lineHeight.large,
            fontFamily: fontFamily.NunitoSansVariable
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
