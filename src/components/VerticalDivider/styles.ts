import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    divider: {
        width: 1,
        height: "100%",
        backgroundColor: theme.colors.divider,
        marginHorizontal: 8,
    },
}));