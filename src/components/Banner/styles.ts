import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    banner: {
        overflow: "hidden",
        borderRadius: theme.metrics.borderRadius.medium,
    },
}));
