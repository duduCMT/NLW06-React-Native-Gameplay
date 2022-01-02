import { StyleSheet } from "react-native"
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  labelCategory: {
    marginLeft: 24, 
    marginTop: 36, 
    marginBottom: 18
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: '100%',
    flexDirection: 'row',
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden',
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: -1,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  column: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  }
})