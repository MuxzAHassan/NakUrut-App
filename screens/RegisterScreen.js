import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, KeyboardAvoidingView, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import  DateTimePicker from '@react-native-community/datetimepicker';
import { ToggleButton } from 'react-native-paper';

export default function RegisterScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(currentDate);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 40,
      color: '#B5651D',
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      marginBottom: 15,
    },
    button: {
      width: '100%',
      backgroundColor: '#B5651D',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    link: {
      marginTop: 15,
      color: '#2E86C1',
      alignSelf: 'flex-start',
    },
    label: {
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 8,
    },
    toggle: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    activeToggle: {
        backgroundColor: '#d3d3d3',
        borderColor: '#d3d3d3',
    },
  });

  const gotoLogin = () => {
    // For now, just navigate to LoginScreen
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ flexGrow: 1,}}>
    <View style={styles.container}>
        <Image source={require('../assets/NakUrut Logo only.png')} style={{width: 150, height: 150, marginBottom: 15}} resizeMode='contain'/>
        <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      {/*Pressable function for gender selection*/}
      <View style={{ width: '100%', alignItems: 'flex-start', marginBottom: 10 }}>
        <Text style={styles.label}>Gender</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Pressable
                    onPress={() => setGender('male')}
                    style={[
                        styles.toggle,
                        gender === 'male' && styles.activeToggle
                    ]}
                >
                    <Text style={styles.text}>Male</Text>
                </Pressable>

                <Pressable
                    onPress={() => setGender('female')}
                    style={[
                        styles.toggle,
                        gender === 'female' && styles.activeToggle
                    ]}
                >
                    <Text style={styles.text}>Female</Text>
                </Pressable>
            </View>
        </View>
        
        {/*Date picker function for Date of Birth selection*/}    
      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text placeholder="Date of Birth">{dateOfBirth ? dateOfBirth.toDateString() : 'Please select your Date of Birth'}</Text>
      </TouchableOpacity>
        {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
        )}

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={gotoLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}