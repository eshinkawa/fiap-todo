import { AntDesign } from '@expo/vector-icons'; // Importando o ícone de seta
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Overview = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('https://run.mocky.io/v3/9e5d4c35-c66a-40a9-af17-8c00fc91ffe3');
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Details', { todo: item })}>
          <Text>{item.title}</Text>
          <AntDesign name="right" size={12} color="black" />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  title: {
    fontSize: 18,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
});

export default Overview;
