import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      width: '100%',
      height: '25%',
      backgroundColor: '#7646FF',
    },
    navigation: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 50
      },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: -5
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10
    },
    searchingBar: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        // borderColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 10,
        backgroundColor: 'white'
    },
    menuIcon: {
      width: 50,
      height: 50,
      marginRight: 2,
    },
    appIcon: {
      width: 20,
      height: 20,
    },
    plusIcon: {
      width: 30,
      height: 30,
    },
    bellIcon: {
      width: 50,
      height: 50,
      marginRight: 5,
    },
    headerTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    content: {
      flex: 1,
      // ... các style cho nội dung màn hình
    },
  });

export default styles;