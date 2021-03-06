import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 16,
  },
  guildIconContainer: {
    height: 68,
    width: 64,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 7.
  },
  playersInfo: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  player: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
  },

})