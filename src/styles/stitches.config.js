import { createStitches } from "@stitches/react";

export const {styled, getCssText, css} = createStitches({
    media: {
        xs: "(max-width: 320px)",
        sm: "(max-width: 480px)",
        md: "(max-width: 720px)",
        lg: "(max-width: 1020px)"
    }
})