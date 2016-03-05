/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  StatusBar,
  Text,
  View
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}><Text style={{fontWeight: '200'}}>MUSTER </Text>OHIO</Text>
      </View>
    );
  }
}

class respondersApp extends Component {
  render() {
    return (
     <View>
       <StatusBar
         backgroundColor="blue"
         barStyle="light-content"
       />

      <Header />
      <View>
        <Text>
          Test
        </Text>
      </View>
      <Navigator
         initialRoute={{statusBarHidden: true}}
         renderScene={(route, navigator) =>
           <View>
             <StatusBar hidden={route.statusBarHidden} />
           </View>
         }
      />
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    backgroundColor: "#9A0E0E",
    color: "#FFFFFF",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 10,
    borderStyle: "solid",
    borderColor: "#9A0E0E"
  },
  headerText: {
    color: "#FFFFFF",
    textAlign:"center",
    fontSize:20
  }
});

AppRegistry.registerComponent('respondersApp', () => respondersApp);
