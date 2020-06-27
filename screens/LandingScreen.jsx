import React from 'react';
import { connect } from 'react-redux';
import { Content, Button, Text, View } from 'native-base';
import Util from '../utilities';
import BlockButton from '../components/BlockButton';

const { setUser } = Util;

function LandingScreen({ navigation, user }){
  return(
    <Content padder>
      <View>
        <BlockButton
          rounded
          block
          onPress={()=>{
            navigation.navigate('Login');
          }}>
          <Text>Log In...</Text>
        </BlockButton>
        <BlockButton
          rounded
          block
          onPress={()=>navigation.navigate("Signup")}
        >
          <Text>Sign Up...</Text>
        </BlockButton>
      </View>
    </Content>
  );
}

function mapStateToProps(store){
  return {
    user: store.userState,
  };
}

export default connect(mapStateToProps)(LandingScreen);