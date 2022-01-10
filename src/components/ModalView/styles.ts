import { theme } from './../../global/styles/theme'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  defaultContainer: {
    flex: 10,
  },
  adaptiveContainer: {
    
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'flex-end',
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  },
})