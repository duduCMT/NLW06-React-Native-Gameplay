import { theme } from './../../global/styles/theme'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletStatus: {
    height: 8,
    width: 8,
    borderRadius: 16,
    marginRight: 8,
  },
  nameStatus: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  }
})