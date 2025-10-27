import { makeStyles } from "@/src/theme/makeStyles";

export const useStyle = makeStyles((theme) => ({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: theme.metrics.spacing.large,
    },
}));
