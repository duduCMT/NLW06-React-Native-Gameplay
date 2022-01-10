import { theme } from '../../global/styles/theme'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: 'transparent',  
  },
  secondaryButtonView: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary30,
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 56,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18,
  }
})