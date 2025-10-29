import { makeStyles } from "@/src/theme/makeStyles";

export const useStyles = makeStyles((theme) => ({
    slide: {
        overflow: "hidden",
        borderRadius: theme.metrics.borderRadius.medium,
    },
}));
