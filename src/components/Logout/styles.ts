import { theme } from '../../global/styles/theme'
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
  },
  noButton: {
    flex: 1,
    marginRight: 8,
    borderColor: theme.colors.secondary40,
  },
  yesButton: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  buttonText: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 16,
  },

})