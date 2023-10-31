import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Detail({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={{
            marginTop:50,
            width:"auto"
          }}
          source={require('../img/Card.png')}
          
          resizeMode='contain'
        />
      </TouchableOpacity>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: '900',
          width: 250
        }}>
          Go for a walk
          and feed the dog
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require('../img/Icon_Like.png')}
        />
      </View>

      <View>
        <Text style={{
          marginLeft: 20,
          marginRight: 20,
          lineHeight: 24,
          fontSize:20
        }}>
          Leaving for a week, French Bulldog Wilfred needs help feeding twice a day
          and walk from 26 to 30 September.
          I bought food, it will be easy.
        </Text>
      </View>


      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        gap: 10,
      }}>
        <Image
          style={styles.tinyLogo}
          source={require('../img/iconWallet.png')}
        />
        <Text style={{
          fontWeight: '500'
        }}>
          Reward 34$
        </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        gap: 10,
      }}>
        <Image
          style={styles.tinyLogo}
          source={require('../img/iconGeo.png')}
        />
        <Text style={{
          fontWeight: '500'
        }}>
          3 HERALD
        </Text>
        <Text style={{
          color: '#333',
          fontWeight: '200'
        }}>
          400m from you
        </Text>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: -50,
        marginLeft: -15
      }}>
        <Image
          style={styles.tinyLogo}
          source={require('../img/Icon_Chat.png')}
        />
        <TouchableOpacity style={{
          borderWidth: 1,
          borderColor: '#A58EFF',
          width: '60%',
          alignItems: 'center',
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#A58EFF',
          marginTop: -15
        }}>
          <Text style={{
            color: 'white',
            fontWeight:'500'
          }}>Respond</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})