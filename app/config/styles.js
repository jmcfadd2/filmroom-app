import colors from "./colors";


export default {
  text: {
    fontSize: 18,
    color: 'grey',
    fontFamily: Platform.OS == 'android' ? "Roboto" : 'Avenir'
  },
  screen: {
    padding: 20,
    backgroundColor: colors.secondary
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 20
  }
}