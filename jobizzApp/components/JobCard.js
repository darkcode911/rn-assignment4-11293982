import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const JobCard = ({ job }) => {
    return (
        <View style={styles.card}>
          <View style={styles.first}>
            <Image source={job.logo} style={styles.logo} />
            <View style={styles.third}>
              <Text style={styles.title}>{job.title}</Text>
              <Text style={styles.company}>{job.company}</Text>
            </View>
          </View>
          <View style={styles.second}>
            <Text style={styles.salary}>{job.salary}</Text>
            <Text style={styles.location}>{job.location}</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      width: 300,
      padding: 10,
      marginRight: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#rfrs',
      height: 200,
    },
    first: {
      flexDirection: 'row',

    },
    third: {
      paddingLeft: 10
    },
    logo: {
      width: 30,
      height: 30,
      marginRight: 15,
    },
    second: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingBottom: 10
    },
    info: {
      marginRight: 15,
      
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    company: {
      fontSize: 14,
      color: '#6B7280',
    },
    salary: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    location: {
      fontSize: 12,
      color: '#6B7280',
      paddingLeft: 120
 
    },
})

export default JobCard;