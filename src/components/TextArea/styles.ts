import { theme } from '../../global/styles/theme'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    height: 95,
    width: '100%',
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    backgroundColor: theme.colors.secondary40,
    fontSize: 13,
    textAlign: 'center',
    borderRadius: 8,
    marginRight: 4,
  },
  title: {
    color: '#000',
  },
})