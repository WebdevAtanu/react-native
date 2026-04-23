import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  // =========== container ==================
  mainContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10
  },

  // =========== button ==================
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // =========== text input ==================
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10
  },

  // =========== flat list ==================
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default function Index() {

  const buttonClicked = () => {
    console.log("Button Clicked")
    Alert.alert("Button Clicked"); // Show alert dialog when button is clicked
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggelSwitch = () => setIsEnabled(previousState => !previousState);

  const [text, setText] = useState('');

  return (
    <>
      {/* =========== scroll view ================== */}
      <ScrollView style={styles.mainContainer}>
        <StatusBar style="dark" />

        {/* =========== text ================== */}
        <Text style={{ fontSize: 20 }}>Hello World 🔥</Text>

        {/* =========== buttons ================== */}
        <View style={styles.container}>
          {/* normal button */}
          <Button color="blue" title="Click me" onPress={buttonClicked} />

          {/* touchable opacity */}
          <TouchableOpacity style={styles.button} onPress={buttonClicked}>
            <Text style={styles.buttonText}>Click me</Text>
          </TouchableOpacity>

          {/* pressable */}
          <Pressable style={styles.button} onPress={buttonClicked}>
            <Text style={styles.buttonText}>Click me</Text>
          </Pressable>
        </View>

        {/* =========== switch ================== */}
        <View style={styles.container}>
          <Switch
            value={isEnabled}
            onValueChange={toggelSwitch}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} />
        </View>

        {/* =========== text input ================== */}
        <View style={styles.container}>
          <TextInput
            placeholder="Enter your name"
            value={text} onChangeText={setText}
            style={styles.input}
            keyboardAppearance='dark'
            keyboardType='phone-pad'
            multiline={true}
            numberOfLines={2} />
          <Button title="Submit" onPress={() => alert(text)} />
        </View>

        {/* =========== image ================== */}
        <View style={styles.container}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Albert_Einstein_sticks_his_tongue.jpg/250px-Albert_Einstein_sticks_his_tongue.jpg' }} style={{ width: 50, height: 50 }} />
        </View>

        <View style={{ borderWidth: 1, borderColor: 'black' }}>
          {
            [...Array(20)].map((_, i) => (
              <Text key={i}>Item {i}</Text>
            ))
          }
        </View>

        {/* =========== link page ================== */}
        <View style={styles.container}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <Link href="/flatList">
            Go to Flat List
          </Link>

          <TouchableOpacity onPress={() => router.push('/flatList')}>
            <Text>Go to Flat List</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
