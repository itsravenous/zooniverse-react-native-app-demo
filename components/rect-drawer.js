/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow weak
 */
'use strict';

import React from 'react-native';
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  StyleSheet,
  processColor,
} = React;

var Rect = require('./rect');

var RectDrawer = React.createClass({

  _panResponder: {},
  _previousLeft: 0,
  _previousTop: 0,
  _rectStyles: {},
  rect: (null : ?{ setNativeProps(props: Object): void }),

  getInitialState: function () {
    return {
      rects: []
    }
  },

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderStart: this._handlePanResponderStart,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 0;
    this._previousTop = 0;
    this._rectStyles = {
      style: {}
    };
  },

  componentDidMount: function() {
  },

  render: function() {
    var rectsDisplay = this.state.rects.map(function (rect, i) {
      return (
        <Rect
          ref={'rect'+i}
          key={'rect'+i}
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          />
      );
    });
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        <Image source={this.props.image} style={styles.subject} />
        {rectsDisplay}
      </View>
    );
  },

  _handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the rect?
    return true;
  },

  _handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the rect?
    return true;
  },

  _handlePanResponderGrant: function(e: Object, gestureState: Object) {
  },
  _handlePanResponderStart: function(e: Object, gestureState: Object) {
    this.addRect(gestureState.x0, gestureState.y0);
  },
  _handlePanResponderMove: function(e: Object, gestureState: Object) {
    var rects = this.state.rects;
    rects[rects.length - 1].width = gestureState.dx;
    rects[rects.length - 1].height = gestureState.dx;
    this.setState({
      rects: rects
    });
  },
  _handlePanResponderEnd: function(e: Object, gestureState: Object) {
  },

  addRect: function (x, y) {
    var rects = this.state.rects;
    rects.push({
      x: x,
      y: y,
      width: 0,
      height: 0
    });
    this.setState({
      rects: rects
    });
  }
});

var styles = StyleSheet.create({
  subject:{
    flex: 1,
    resizeMode: Image.resizeMode.cover
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'black'
  },
  debug: {
    fontSize: 20
  }
});

module.exports = RectDrawer;
