import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const id = route.params?.id;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>📄 Écran de détails</Text>
      {id && <Text>ID reçu : {id}</Text>}
    </View>
  );
}
