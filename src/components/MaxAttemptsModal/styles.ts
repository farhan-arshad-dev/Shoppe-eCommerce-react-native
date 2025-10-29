import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    overlay: {
        backgroundColor: theme.colors.overlay,
    },
    modalContainer: {
        width: "90%",
        backgroundColor: theme.colors.background,
        borderRadius: theme.metrics.borderRadius.xlarge,
        alignItems: "center",
        paddingTop: theme.metrics.spacing.xxxLarge,
        paddingBottom: theme.metrics.spacing.large,
    },
    iconCard: {
        ...theme.shadows.medium,
        position: "absolute",
        alignSelf: "center",

        width: theme.metrics.componentSizes.modalInfoIcon,
        height: theme.metrics.componentSizes.modalInfoIcon,
        borderRadius: theme.metrics.componentSizes.modalInfoIcon / 2,

        top: theme.metrics.spacing.xxxLarge * -1,
        backgroundColor: theme.colors.background,
    },
    outerCircle: {
        width: theme.metrics.componentSizes.modalInfoOuterCircle,
        height: theme.metrics.componentSizes.modalInfoOuterCircle,
        borderRadius: theme.metrics.componentSizes.modalInfoOuterCircle / 2,
        backgroundColor: theme.colors.infoCardOutter,
    },
    innerCircle: {
        width: theme.metrics.componentSizes.modalInfoInnerCircle,
        height: theme.metrics.componentSizes.modalInfoInnerCircle,
        backgroundColor: theme.colors.infoCardInner,
        borderRadius: theme.metrics.componentSizes.modalInfoInnerCircle / 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.colors.background,
        borderWidth: theme.metrics.spacing.xxxSmall,
    },
    message: {
        ...theme.typography.fontStyle.bodyXLarge,
        textAlign: "center",
        lineHeight: theme.typography.lineHeight.xLarge,
        fontFamily: theme.typography.fontFamily.NunitoSansRegular,
        color: theme.colors.primaryText,
        fontWeight: theme.typography.fontWeight.regular,
        marginVertical: theme.metrics.spacing.large,
        paddingHorizontal: theme.metrics.spacing.xSmall,
    },
    okayButton: {
        backgroundColor: theme.colors.primaryText,
        borderRadius: theme.metrics.borderRadius.large,
    },
}));
