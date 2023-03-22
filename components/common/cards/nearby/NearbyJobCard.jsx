import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageUrl } from '../../../../ultis'

import styles from './nearbyjobcard.style'


const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{ uri: checkImageUrl(job.employer_logo)
              ? job.employer_logo
              : 'https://res.cloudinary.com/dwoifuutn/image/upload/v1666282395/brand-logo-small_buu20k.png'
            }}
            resizeMode="contain"
            style={styles.logoImage}
          />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName}  numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employement_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard;