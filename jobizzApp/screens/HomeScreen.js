// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const jobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,000' },
  { id: '2', title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, US', salary: '$96,000' },
  { id: '3', title: 'Product Manager', company: 'Beats', location: 'Florida, US', salary: '$84,000' },
  { id: '4', title: 'Product Manager', company: 'Facebook', location: 'Florida, US', salary: '$86,000' },
];

const JobCard = ({ job, isFeatured }) => (
  <View style={[styles.card, isFeatured && styles.featuredCard]}>
    <View style={styles.jobHeader}>
      {job.company === 'Facebook' && (
        <Ionicons name="logo-facebook" size={24} color="blue" />
      )}
      {job.company === 'Google' && (
        <Ionicons name="logo-google" size={24} color="red" />
      )}
      {job.company === 'Burger King' && (
        <MaterialCommunityIcons name="food" size={24} color="orange" />
      )}
      {job.company === 'Beats' && (
        <MaterialCommunityIcons name="headphones" size={24} color="red" />
      )}
    </View>
    <Text style={styles.jobTitle}>{job.title}</Text>
    <Text style={styles.company}>{job.company}</Text>
    <Text style={styles.location}>{job.location}</Text>
    <Text style={styles.salary}>{job.salary}</Text>
  </View>
);

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search a job or position"
      />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        horizontal
        data={[jobs[0]]}
        renderItem={({ item }) => <JobCard job={item} isFeatured />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={jobs.slice(1)}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F7F8FA' },
  profileContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  email: { color: 'gray' },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  searchInput: { 
    backgroundColor: '#E8E8E8', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  card: { 
    backgroundColor: '#FFFFFF', 
    padding: 16, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginVertical: 8, 
    borderRadius: 8,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: 300, 
    height: 150,
  },
  featuredCard: { width: 350, height: 200 },
  jobHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  jobTitle: { fontSize: 16, fontWeight: 'bold' },
  company: { color: 'gray' },
  location: { color: 'gray' },
  salary: { color: 'green', fontWeight: 'bold' },
  backgroundCol: { color: 'blue' },
});

export default HomeScreen;