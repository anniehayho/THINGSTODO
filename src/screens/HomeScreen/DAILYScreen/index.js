import {
  View,
  Text,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, { Component, useState } from 'react';
import styles from './styles';
import menuIcon from '../../../assets/images/menuIcon.png';
import appIcon from '../../../assets/images/appIcon.png';
import plusIcon from '../../../assets/images/plusIcon.png';
import bellIcon from '../../../assets/images/bellIcon.png';
import CustomInput from '../../../components/CustomInput';
import searchIcon from '../../../assets/images/searchIcon.png';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const HomeScreen = ({ navigation }) => {

  const [searching, setSearching] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.header}>
        <View style={styles.navigation}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={menuIcon} style={styles.menuIcon} />
            </TouchableOpacity>

            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>ThingsTOD</Text>
              <Image source={appIcon} style={styles.appIcon} />
            </View>
            
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity>
              <Image source={bellIcon} style={styles.bellIcon} ></Image>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={plusIcon} style={styles.plusIcon} ></Image>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{padding: 20}}>
          <View style={{ padding: 10, paddingLeft: 15, backgroundColor: '#fff', borderRadius: 6, width: '100%', height: 40, flexDirection: 'row' }}>
            <TextInput placeholder='Search Task'/>
            <Image source={searchIcon} style={{ width: 20, height: 20, marginLeft: 220, alignItems: 'baseline'}}/>
          </View>
        </View> */}
        
      </View>
      {/* Phần nội dung màn hình bên dưới header */}
      <View style={styles.content}>
        {/* ... */}
      </View>
    </View>
  );
};

export default HomeScreen;