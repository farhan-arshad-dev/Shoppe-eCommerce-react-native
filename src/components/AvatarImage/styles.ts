import { makeStyles } from "@/src/theme/makeStyles";

export const useStyle = makeStyles((theme) => ({
    avatarCard: {
        ...theme.shadows.medium,
        justifyContent: 'center',
        alignItems: 'center',
        width: theme.metrics.iconSize.profilePicCard,
        height: theme.metrics.iconSize.profilePicCard,
        borderRadius: theme.metrics.iconSize.profilePicCard / 2,
    },
    avatarImage: {
        width: theme.metrics.iconSize.profilePic,
        height: theme.metrics.iconSize.profilePic,
        overflow: "hidden",
        borderRadius: theme.metrics.iconSize.profilePic / 2,
    },
}));
