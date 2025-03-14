import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {mainNavigations} from '../constants/navigations.ts';
import FeedScreen from '../screens/FeedScreen.tsx';
import MailListScreen from '../screens/MailListScreen.tsx';
import ProfileScreen from '../screens/ProfileScreen.tsx';
import Icon from '@react-native-vector-icons/material-design-icons';
import {ThemeColors} from '../constants/colors.ts';
import {useColors} from '../hooks/useColors.ts';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const colors = useColors();
  const styles = createStyles(colors);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.boxBackground,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name={mainNavigations.FEED}
        component={FeedScreen}
        options={{
          title: '피드',
          tabBarIcon: ({color, size}) => (
            <Icon name="newspaper-variant-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={mainNavigations.MAIL_LIST}
        component={MailListScreen}
        options={{
          title: '메일',
          tabBarIcon: ({color, size}) => (
            <Icon name="email-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={mainNavigations.PROFILE}
        component={ProfileScreen}
        options={{
          title: '내 정보',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({});

export default MainTabNavigator;
