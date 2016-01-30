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

var Rect = React.createClass({
  setNativeProps: function (nativeProps) {
    this._root.setNativeProps(nativeProps);
  },

  render: function () {
    var styl = {
      left: this.props.x,
      top: this.props.y,
      borderWidth: styles.rect.borderWidth,
      borderColor: styles.rect.borderColor,
      backgroundColor: styles.rect.backgroundColor,
      position: styles.rect.position
    };
    return (
      <View
        style={styl}
        ref={component => this._root = component}
        {...this.props} />
    );
  }

});

var styles = {
  rect: {
    borderWidth: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: 'rgba(255, 255, 255, 1)',
    position: 'absolute',
    left: 0,
    top: 0
  }
};

module.exports = Rect;
