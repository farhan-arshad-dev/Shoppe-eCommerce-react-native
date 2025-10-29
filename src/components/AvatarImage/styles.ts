import { makeStyles } from "@/src/theme/makeStyles";

export const useStyle = makeStyles((theme) => ({
    avatarCard: {
        ...theme.shadows.medium,
        justifyContent: 'center',
        alignItems: 'center',
        width: theme.metrics.componentSizes.profilePicCard,
        height: theme.metrics.componentSizes.profilePicCard,
        borderRadius: theme.metrics.componentSizes.profilePicCard / 2,
    },
    avatarImage: {
        width: theme.metrics.componentSizes.profilePic,
        height: theme.metrics.componentSizes.profilePic,
        overflow: "hidden",
        borderRadius: theme.metrics.componentSizes.profilePic / 2,
    },
}));
