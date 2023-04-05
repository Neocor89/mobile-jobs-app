import { View, Text, Image } from 'react-native'

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageUrl } from '../../../ultis';

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
      <Image 
        source={{
          uri: checkImageUrl(companyLogo)
          ? companyLogo
          : 'https://res.cloudinary.com/dwoifuutn/image/upload/v1666282395/brand-logo-small_buu20k.png'
        }}
        style={styles.logoImage}
      />
    </View>

    <View style={styles.jobTitleBox}>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
    </View>

    <View style={styles.companyInfoBox}>
      <Text style={styles.companyName}>{companyName}</Text>
      <View style={styles.locationBox}>
        <Image 
          source={icons.location}
          resizeMode="contain"
          style={styles.locationImage}
        />
        <Text style={styles.locationName0}>{location}</Text>
      </View>
    </View>
    </View>
  )
}

export default Company