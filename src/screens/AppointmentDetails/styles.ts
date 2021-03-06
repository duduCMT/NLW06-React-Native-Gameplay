import { theme } from './../../global/styles/theme'
import { StyleSheet } from "react-native"
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#000',
  },
  banner: {
    width: '100%',
    height: 234,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight: 21,
  },
  listHeader: {
    marginTop: 24,
  },
  members: {
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  },
})