/**
 * Cola Bubble
 */

var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
} = ReactNative;

var Cola = require('cola-api');
var { Bubble } = Cola;

var MyBubble = Bubble.createBubbleClass({

  componentDidMount: function() {
    Bubble.setSendEnabled(true);
  },

  render: function() {

    var primary, secondary;
  	if (this.props[Bubble.BUBBLE_MODE] == Bubble.BUBBLE_OUTGOING_MODE) {
      primary = secondary = 'white';
    }
    else {
      primary = '#525252';
      secondary = '#7B7B7B';
    }

    return (
      <View style={{flex: 1, justifyContent:'center'}}>
        <Text style={{fontSize:28, textAlign:'center', color:primary, marginBottom: 12}}>
          {'Greetings Earthling!'}
        </Text>
        <Text style={{fontSize:16, textAlign:'center', color:secondary}}>
          {'I have solved all the worlds energy problems. I am going to blow it up! '}
        </Text>
      </View>
    );
  }
});
