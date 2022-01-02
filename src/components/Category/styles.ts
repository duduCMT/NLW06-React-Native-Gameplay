import { theme } from './../../global/styles/theme'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: '97%',
    height: '97%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 7,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 8,
  },
  defaultCheck: {
    width: 12,
    height: 12,
    position: 'absolute',
    right: 7,
    top: 7,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 4,
  },
  check: {
    backgroundColor: theme.colors.secondary100,
  },
  checked: {
    backgroundColor: theme.colors.primary, 
    borderColor: 'transparent',
  }
})