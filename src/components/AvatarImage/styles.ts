import { makeStyles } from "@/src/theme/makeStyles";

export const useStyle = makeStyles((theme) => ({
    avatarCard: {
        ...theme.shadows.medium,
        justifyContent: 'center',
        alignItems: 'center',
        width: theme.metrics.iconCardSize.profilePicCard,
        height: theme.metrics.iconCardSize.profilePicCard,
        borderRadius: theme.metrics.iconCardSize.profilePicCard / 2,
    },
    avatarImage: {
        width: theme.metrics.iconCardSize.profilePic,
        height: theme.metrics.iconCardSize.profilePic,
        overflow: "hidden",
        borderRadius: theme.metrics.iconCardSize.profilePic / 2,
    },
}));
