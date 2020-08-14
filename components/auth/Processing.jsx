/* eslint-disable no-fallthrough */
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import models from '../../models';
import util from '../../utilities';
import {
  Center, Text, ScreenBase, ActivityIndicator,
} from '../../styled/components';

export default function Processing(props) {
  const { navigation, route } = props;
  const { params } = route;

  async function createSession() {
    const response = await models.Session.createSession(params.token);
    const session = response.data;

    switch (response.code) {
      case 'SESSION_CREATED':
        AsyncStorage.setItem('@session', session);
        util.Actions.setSession(session);
        navigation.replace('view', { account: { id: session.id } });
      case 'INVALID_TOKEN':
      case 'EXPIRED_TOKEN':
        navigation.replace('sign-in', { badToken: true });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (params && params.token) {
      createSession();
    }
  }, [params]);

  return (
    <ScreenBase>
      <Center>
        <Text>Loggin in...</Text>
        <ActivityIndicator />
      </Center>
    </ScreenBase>
  );
}