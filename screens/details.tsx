import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Importando ícones
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Details = ({ route }) => {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <View style={styles.detail}>
        <MaterialIcons name="location-on" size={20} color="black" style={styles.detailIcon} />
        <Text style={styles.detailText}>{todo.location}</Text>
      </View>
      <View style={styles.detail}>
        <FontAwesome name="clock-o" size={20} color="black" style={styles.detailIcon} />
        <Text style={styles.detailText}>{new Date(todo.createdAt).toLocaleString()}</Text>
      </View>
      <View style={[styles.detail, { marginBottom: 0 }]}>
        <MaterialIcons name="notes" size={20} color="black" style={styles.detailIcon} />
        <Text style={styles.detailText}>{todo.notes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 5,
  },
  notes: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});

export default Details;
