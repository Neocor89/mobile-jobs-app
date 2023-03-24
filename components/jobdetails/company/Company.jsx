import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageUrl } from '../../../ultis';

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}></View>
      <Image 
        source={{
          uri: checkImageUrl(companyLogo)
          ? companyLogo
          : 'https://res.cloudinary.com/dwoifuutn/image/upload/v1666282395/brand-logo-small_buu20k.png'
        }}
      />
    </View>
  )
}

export default Company