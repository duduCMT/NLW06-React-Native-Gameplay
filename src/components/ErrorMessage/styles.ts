import { theme } from '../../global/styles/theme'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 24,
  },
  message: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    lineHeight: 22,
    width: '90%',
    textAlign: 'center',
    marginTop: 16,
  },
})