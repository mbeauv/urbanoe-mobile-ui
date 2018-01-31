// @flow
import React from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';

type Props = {
  backGroundImage: number,
  logoImage: number,
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
  },
  logoImage: {
    height: 200,
    resizeMode: 'contain',
  },
});

const Splash = ({ backGroundImage, logoImage } : Props) => (
  <Image
    source={backGroundImage}
    style={styles.backgroundImage}
  >
    <View style={styles.logoContainer}>
      <Image
        source={logoImage}
        style={styles.logoImage}
      />
    </View>
  </Image>
);

export default Splash;
