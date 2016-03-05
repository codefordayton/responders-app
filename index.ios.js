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
  View,
  TextInput
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
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress && this.props.onPress(this.props);
  }

  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight onPress={this.onPress}>
          <Text>
            {this.props.text}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 'nearby' };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(props) {
    this.setState({
      current: props.id
    });
  }

  getBaseStyle() {
    return { backgroundColor: "#EDEDED", flex: 1, height: 48}
  }

  getSelectedStyle() {
    const base = this.getBaseStyle();
    base["backgroundColor"] = "#555555";
    return base;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Button text="Nearby"
            id="nearby"
            onPress={this.setCurrent}
            style={this.state.current === "nearby" ? this.getSelectedStyle() : this.getBaseStyle()}
          />
          <Button text="Map"
            id="map"
            onPress={this.setCurrent}
            style={this.state.current === "map" ? this.getSelectedStyle() :  this.getBaseStyle()}
          />
          <Button text="Region"
            id="region"
            onPress={this.setCurrent}
            style={this.state.current === "region" ? this.getSelectedStyle() : this.getBaseStyle()}
          />
        </View>
      </View>);
  }
}

class TextInputGroup extends Component {
  render() {
    return (
      <View>
        <Text>
          NEW MESSAGE
        </Text>
          <TextInput
            style={{height: 80, borderColor: 'black', borderWidth: 1}}
            multiline={true}
            defaultValue={"Type a message (160 characters maximum)..."}
            onChangeText={(text) => this.setState({text})}
            value={this.props.text}
        />
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
      <TextInputGroup />

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
