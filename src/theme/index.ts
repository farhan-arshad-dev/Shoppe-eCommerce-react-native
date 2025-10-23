import { colors } from "./colors";
import { typography } from "./typography";
import { metrics } from "./metrics";
import { createShadows } from "./shadows";

export const theme = {
    colors,
    typography,
    metrics,
    get shadows() {
        return createShadows(this)
    },
};

export type ThemeType = typeof theme;
