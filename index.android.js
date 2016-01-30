/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

const RectDrawer = require('./components/rect-drawer');
const SubjectList = require('./components/subject-list');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F50000',
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
});

class AwesomeProject extends Component {
  componentDidMount() {
    // Handle back button
    React.BackAndroid.addEventListener('hardwareBackPress', () => {
      var nav = this.refs.nav;
        if (nav && nav.getCurrentRoutes().length > 1) {
            nav.pop();
            return true;
        }
        return false;
    });
  }

  render() {
    return (
      <Navigator
        ref='nav'
        initialRoute={{name: 'Select', index: 0}}
        renderScene={this.handleRoute.bind(this)} />
    );
  }

  selectSubject(img) {
    this.refs.nav.push({
      name: 'Annotate',
      index: 1,
      img: img
    });
  }

  handleRoute(route, navigator) {
    var page;
    switch (route.name) {
      case 'Select':
        page = (
          <SubjectList onItemSelect={this.selectSubject.bind(this)} />
        );
      break;
      case 'Annotate':
        page = (
          <RectDrawer image={route.img} />
        );
      break;
    }
    return (
      <View style={styles.container}>
        {page}
      </View>
    );
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
