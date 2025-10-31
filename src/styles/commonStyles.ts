import { makeStyles } from "../theme/makeStyles";

export const useCommonStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    containerWithPadding: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.metrics.spacing.large,
    },
    centerContent: {
        justifyContent: "center",
        alignItems: "center",
    },
    fullWidth: {
        width: "100%",
    },
    fullFlex: {
        flex: 1,
        width: "100%",
    },
    fillParent: {
        width: "100%",
        height: "100%",
    },
    centerFull: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundContainer: {
        position: "absolute",
        width: "100%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    authInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.colors.surface,
        paddingHorizontal: theme.metrics.spacing.large,
        paddingVertical: theme.metrics.spacing.medium,
        borderRadius: theme.metrics.borderRadius.xxHuge,
        marginBottom: theme.metrics.spacing.xSmall,
    },
    profileCard: {
        marginBottom: theme.metrics.spacing.xxLarge,
    },
    slimButton: {
        alignSelf: "center",
        width: theme.metrics.screenWidth / 2,
        paddingVertical: theme.metrics.spacing.small,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.metrics.spacing.medium,
        marginTop: theme.metrics.spacing.huge,
    },
    listHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.metrics.spacing.small,
    },
    listTitle: {
        ...theme.typography.fontStyle.headlineSmall,
        color: theme.colors.primaryText,
        marginRight: theme.metrics.spacing.xSmall,
    },
    horizontalListGap: {
        gap: theme.metrics.spacing.xSmall,
    },
    bannerView: {
        width: "100%",
        aspectRatio: 2.5,
    },
}));
