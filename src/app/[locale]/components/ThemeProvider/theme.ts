"use client";

import type React from "react";

import { createTheme, inputBaseClasses, outlinedInputClasses } from "@mui/material";

import { colors } from "./colors";

declare module "@mui/material/styles" {
  type GradientPalette = {
    primary: string;
  };

  interface Palette {
    gradients: GradientPalette;
  }

  interface PaletteOptions {
    gradients: GradientPalette;
  }

  interface TypographyVariants {
    DisplayH1: React.CSSProperties;
    DisplayH2: React.CSSProperties;
    DisplayH3: React.CSSProperties;
    DisplayH4: React.CSSProperties;
    DisplayH5: React.CSSProperties;

    BodySubhead: React.CSSProperties;
    BodyL: React.CSSProperties;
    BodyMB: React.CSSProperties;
    BodyM: React.CSSProperties;
    BodySB: React.CSSProperties;
    BodyS: React.CSSProperties;
    BodyFootNote: React.CSSProperties;

    LabelL: React.CSSProperties;
    LabelM: React.CSSProperties;
    LabelS: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    DisplayH1: React.CSSProperties;
    DisplayH2: React.CSSProperties;
    DisplayH3: React.CSSProperties;
    DisplayH4: React.CSSProperties;
    DisplayH5: React.CSSProperties;

    BodySubhead: React.CSSProperties;
    BodyL: React.CSSProperties;
    BodyMB: React.CSSProperties;
    BodyM: React.CSSProperties;
    BodySB: React.CSSProperties;
    BodyS: React.CSSProperties;
    BodyFootNote: React.CSSProperties;

    LabelL: React.CSSProperties;
    LabelM: React.CSSProperties;
    LabelS: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // Default MUI variants
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;

    // Custom variants

    DisplayH1: true;
    DisplayH2: true;
    DisplayH3: true;
    DisplayH4: true;
    DisplayH5: true;

    BodySubhead: true;
    BodyL: true;
    BodyMB: true;
    BodyM: true;
    BodySB: true;
    BodyS: true;
    BodyFootNote: true;

    LabelL: true;
    LabelM: true;
    LabelS: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    small: false;
    medium: true;
    large: true;
  }

  interface SvgIconPropsColorOverrides {
    grey: true;
  }
}

export const theme = createTheme({
  palette: {
    gradients: {
      primary: "linear-gradient(90deg, #3222FF 0%, #FFA4C0 100%)",
    },
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
    fontSize: 16,
    allVariants: {
      fontOpticalSizing: "auto",
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: "24px",
    },

    DisplayH1: {
      fontSize: 56,
      fontWeight: 600,
      lineHeight: "64px",
      letterSpacing: "0",
    },
    DisplayH2: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "32px",
      letterSpacing: "0",
    },
    DisplayH3: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "28px",
      letterSpacing: "0",
    },
    DisplayH4: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0",
      fontStyle: "italic",
    },
    DisplayH5: {
      fontSize: 40,
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "0",
    },

    BodySubhead: {
      fontSize: 20,
      lineHeight: "28px",
      letterSpacing: "0",
      fontWeight: 700,
      color: colors.blueGrey[50],
    },
    BodyL: {
      fontSize: 18,
      lineHeight: 1.3,
      letterSpacing: "0",
      fontWeight: 400,
      color: colors.blueGrey[50],
    },
    BodyMB: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: 600,
      color: colors.blueGrey[50],
    },
    BodyM: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: 400,
      color: colors.blueGrey[50],
    },
    BodySB: {
      fontSize: 14,
      lineHeight: "22px",
      letterSpacing: "0",
      fontWeight: 600,
      color: colors.blueGrey[50],
    },
    BodyS: {
      fontSize: 14,
      lineHeight: "22px",
      letterSpacing: "0",
      fontWeight: 400,
      color: colors.blueGrey[50],
    },
    BodyFootNote: {
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0",
      fontWeight: 600,
      color: colors.blueGrey[50],
    },
    LabelL: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0",
      fontWeight: 700,
      color: colors.blueGrey[50],
    },
    LabelM: {
      fontSize: 16,
      lineHeight: "22px",
      letterSpacing: "0",
      fontWeight: 700,
      color: colors.blueGrey[50],
    },
    LabelS: {
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0",
      fontWeight: 700,
      color: colors.blueGrey[50],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 470,
      md: 720,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.base.white,
        },

        button: {
          cursor: "pointer",
          border: "none",
          background: "none",
          padding: 0,
          margin: 0,
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: () => ({
          paddingTop: "0 !important",
          paddingBottom: "0 !important",
        }),
      },
    },

    MuiTypography: {
      defaultProps: {
        variant: "BodyMB",

        variantMapping: {
          DisplayH1: "h1",
          DisplayH2: "h2",
          DisplayH3: "h3",
          DisplayH4: "h4",
          DisplayH5: "h5",
          BodySubhead: "p",
          BodyL: "p",
          BodyMB: "p",
          BodyM: "p",
          BodySB: "p",
          BodyS: "p",
          BodyFootNote: "p",
          LabelL: "p",
          LabelM: "p",
          LabelS: "p",
        },
      },
      styleOverrides: {
        root: () => ({
          color: colors.blueGrey[50],
          transition: "color 0.2s",
        }),
      },
      variants: [
        {
          props: { variant: "inherit" },
          style: () => ({
            color: "inherit",
          }),
        },
      ],
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.LabelL,
          height: "40px",
          [theme.breakpoints.down("md")]: {
            height: "36px",
          },
          width: "fit-content",
          borderRadius: "1000px",
          padding: "8px 12px",
          textTransform: "none",
          borderWidth: "1px",
          whiteSpace: "nowrap",
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },

          "&:focus": {
            boxShadow: "none",
          },

          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                "&": {
                  background: colors.accent,
                  color: theme.palette.common.white,
                  borderColor: "transparent",
                },
              },
            },
            {
              props: { variant: "contained", color: "secondary" },
              style: {
                "&": {
                  backgroundColor: colors.accentMuted,
                  color: colors.accent,
                  boxShadow: "none !important",
                },
              },
            },
          ],
        }),

        startIcon: {
          margin: 0,
          marginRight: 8,
          color: "inherit",
        },

        endIcon: {
          margin: 0,
          marginLeft: 8,
          color: "inherit",
        },
      },
      variants: [
        {
          props: { fullWidth: true },
          style: {
            width: "100%",
          },
        },
      ],
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...theme.typography.BodyMB,
          color: colors.secondary,
          lineHeight: 1.3,
          position: "static",
          marginBottom: "8px",
          transform: "unset",
          transition: "color 0.2s",
          zIndex: "unset",

          "&::after": {
            display: ownerState.required ? "initial" : "none",
            content: '"*"',
            color: colors.accent,
          },

          "&.Mui-focused": {
            color: colors.secondary,
          },

          "&.Mui-error": {
            color: colors.secondary,
          },
        }),
        asterisk: {
          display: "none",
        },
      },
      variants: [],
    },

    MuiTextField: {
      defaultProps: {
        size: "medium",
        slotProps: {
          inputLabel: {
            shrink: true,
          },
        },
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",

          [`& .${inputBaseClasses.root}`]: {
            backgroundColor: colors.white,
            borderRadius: "1000px",
            transition: "border-color 0.2s",
            padding: "0 12px",
          },

          [`& .${inputBaseClasses.input}`]: {
            ...theme.typography.BodyM,
            padding: "0",
            color: colors.blueGrey[50],
            transition: "color 0.2s",
          },

          [`& .MuiInputBase-inputAdornedStart`]: {
            paddingLeft: "8px",
          },

          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: colors.white,
            top: 0,
            transition: "border-color 0.2s",

            "& legend": {
              display: "none",
            },
          },

          "&:hover:not(.Mui-focused)": {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: `${colors.accent} !important`,
              borderWidth: "2px !important",
            },
          },

          "&.Mui-focused": {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: colors.accent,
              borderWidth: "2px",
            },
          },
        }),
      },
      variants: [
        {
          props: { size: "medium" },
          style: {
            [`& .${inputBaseClasses.root}`]: {
              height: "56px",

              "&.Mui-focused svg": {
                color: colors.accent,
              },

              svg: {
                color: colors.silver,
              },
            },
          },
        },

        {
          props: { error: true },
          style: () => ({
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: colors.red,
              borderWidth: "2px !important",
            },

            "& .MuiInputBase-root::before": {
              borderBottomColor: `${colors.red} !important`,
            },
            "& .MuiInputBase-root::after": {
              borderBottomColor: `${colors.red} !important`,
            },
          }),
        },
      ],
    },

    MuiSvgIcon: {
      defaultProps: {
        fontSize: "medium",
      },
      styleOverrides: {
        root: () => ({
          transition: "color 0.2s",
        }),
      },
      variants: [
        {
          props: { fontSize: "medium" },
          style: () => ({
            width: "16px",
            height: "16px",
          }),
        },
        {
          props: { fontSize: "large" },
          style: () => ({
            width: "24px",
            height: "24px",
          }),
        },
      ],
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: () => ({
          minHeight: "56px",
          margin: 0,
          borderRadius: "1000px",
          padding: "16px 20px",
          backgroundColor: colors.white,
          cursor: "pointer",
          transition: "background-color 0.2s, color 0.2s",

          "&:has(.Mui-checked)": {
            backgroundColor: colors.accent,

            "& .MuiFormControlLabel-label": {
              color: colors.base.white,
            },

            "& .MuiTypography-root": {
              color: colors.base.white,
            },
          },

          "&:hover": {
            backgroundColor: colors.accent,

            "& .MuiFormControlLabel-label": {
              color: colors.base.white,
            },

            "& .MuiTypography-root": {
              color: colors.base.white,
            },
          },
        }),
        label: ({ theme }) => ({
          ...theme.typography.BodyMB,
          color: colors.blueGrey[50],
          transition: "color 0.2s",
        }),
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          color: theme.palette.grey[500],
          display: "none",

          "&.Mui-checked": {
            color: colors.accent,
          },
        }),
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: () => ({
          padding: 0,
          display: "none",
          "&.Mui-checked": {
            color: colors.accent,
          },
        }),
      },
    },
  },
});
