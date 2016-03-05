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
  TouchableHighlight,
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

class Button extends Component {
  render() {
    return (
      <TouchableHighlight style={this.props.style || styles.button}>
        <Text>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

class ButtonGroup extends Component {
  render() {
    return (
      <View>
        <Button text="Nearby" style={{ flex: 1, backgroundColor: "#EDEDED"}}/>
        <Button text="Map" style={{ flex: 1, backgroundColor: "#EDEDED"}}/>
        <Button text="Region" style={{ flex: 1, backgroundColor:"#EDEDED"}}/>
      </View>);
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
      <ButtonGroup />
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
    fontSize:20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: "#EDEDED"
  }
});

AppRegistry.registerComponent('respondersApp', () => respondersApp);
