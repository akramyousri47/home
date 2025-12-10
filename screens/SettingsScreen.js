import { View, Text, Switch } from 'react-native';
import React, { useState } from 'react';

export default function SettingsScreen() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>⚙️ Paramètres</Text>

      <View style={{ marginTop: 20 }}>
        <Text>Activer une option :</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
    </View>
  );
}
