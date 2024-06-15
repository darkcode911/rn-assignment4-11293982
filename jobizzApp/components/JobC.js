import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const JobCardVertical = ({ job }) => {
    return (
            <View style={styles.card}>
                <View style={styles.row}>
                    <Image source={ job.logo } style={styles.logo} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{job.title}</Text>
                        <Text style={styles.company}>{job.company}</Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.salary}>{job.salary}</Text>
                    <Text style={styles.location}>{job.location}</Text>
                </View>
            </View>
        
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
        paddingLeft: 5,
        marginHorizontal: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        elevation: 1,
        
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    details: {
        alignItems: 'flex-end',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    info: {
        flex: 1,
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 14,
        color: '#6B7280',
    },
});

export default JobCardVertical;