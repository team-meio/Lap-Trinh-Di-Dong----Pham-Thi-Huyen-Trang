import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';

export default function AppV2() {
  return (
    <View style={{ background: '#00CCF9', flex: 1 }}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            border: '15px solid black',
            height: 140,
            width: 140,
            borderRadius: 9999,
          }}></View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 700, fontSize: 25, textAlign: 'center' }}>
          GROWS YOUR BUSINESSES
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:20}}>
        <Text style={{ fontWeight: 500, fontSize: 15, textAlign: 'center' }}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          color: 'black',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            minWidth:"100%",
            marginBottom:20
          }}>
          <Button
            style={{
              background: '#E3C000',
              // width: 58,
              height: 23,
              color: 'black',
            }}
            title="Login"
          />
          <Button
            height="23"
            width="58"
            style={{ background: '#E3C000', width: 58, height: 23 }}
            title="Sign Up"
          />
        </View>
        <Text style={{ fontWeight: 500, fontSize: 15, textAlign: 'center' }}>
          HOW WE WORK?
        </Text>
      </View>
    </View>
  );
}
