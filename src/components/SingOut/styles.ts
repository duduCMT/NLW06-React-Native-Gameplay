import { theme } from './../../global/styles/theme'
import { StyleSheet } from "react-native"
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginBottom: getBottomSpace(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleArea: {
    flexDirection: 'row'
  },
  title: {
    color: theme.colors.heading,
    fontSize: 24,
    fontFamily: theme.fonts.title500,
  },
  titleAppName: {
    fontFamily: theme.fonts.title700,  
  },
  buttons: {
    marginTop: 24,
    flexDirection: 'row'
  },

})