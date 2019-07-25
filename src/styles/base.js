import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const colors = {
  primary: "#2d8fce",
  primary_dark: "#170030",
  secondary: "#347d94",
  tertiary: "#760080",
  dark: "#171718",
  light_gray: "#929292",
  light_green: "#54c442",
  black: "#151515",
  dark_gray: "rgb(70,79,95)",
};

export const padding = {
  x_sm: 5,
  sm: 10,
  sm_md: 15,
  md: 20,
  md_md: 25,
  lg: 30,
  lg_md: 35,
  xl: 40
};

export const fonts = {
  x_sm: 8,
  ex_sm: 10,
  sm: 12,
  sm_md: 15,
  md: 18,
  md_md: 21,
  lg: 28,
  ex_lg: 35,
  primary: "Cochin"
};

const baseStyles = {
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  header: {
    backgroundColor: colors.primary,
    fontSize: fonts.lg,
    fontWeight: "bold"
  },
  footer: {
    backgroundColor: colors.primary,
    fontSize: fonts.lg,
    fontWeight: "bold"
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
  textSecondary: {
    color: colors.light_gray,
    fontSize: fonts.md_md
  },
  textSecondaryMd: {
    color: colors.light_gray,
    fontSize: fonts.md,
    paddingLeft: 7
  },
  textRanking: {
    color: colors.light_gray,
    fontSize: fonts.ex_lg
  },
  iconPrimary: {
    color: "#ffffff",
    fontSize: 25
  },
  backgroundPrimary: {
    backgroundColor: "#BC0000"
  },
  tabStyle: {
    backgroundColor: colors.secondary,
    color: "#fff"
  },
  logoStyle: {
    width: dimensions.fullWidth,
    resizeMode: "contain",
    marginTop: 25
  },
  inputLogin: {
    color: "#fff",
    padding: 12,
    fontSize: 20
  },
  inputSet: {
    color: "#000",
    padding: 8,
    fontSize: 18,
    flex: 1,
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  textSet: {
    color: "#000",
    paddingTop: 18,
    paddingBottom: 18,
    fontSize: 18
  },
  versus: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  versusMid: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  centerAll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15
  },
  primaryHeading: {
    color: "#000",
    fontSize: 25
  },
  spinnerTextStyle: {
    color: "#fff",
    fontSize: 28
  }
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides });
}
