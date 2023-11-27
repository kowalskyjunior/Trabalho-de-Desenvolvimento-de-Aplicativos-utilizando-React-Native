import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function TaskItem({ data, removeTask }) {
  const [isClicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(!isClicked);
  };

  return (
    <Pressable onLongPress={removeTask} onPress={handlePress} style={[styles.container, isClicked && styles.clickedContainer]}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    padding: 14,
    width: '100%',
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '10px solid #5A5590'
  },
  clickedContainer: {
    textDecorationLine: 'line-through', // Adapte a cor conforme necessário
  },
  text: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
