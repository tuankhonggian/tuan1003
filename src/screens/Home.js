import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { data } from '../../data';
const { Products } = data
export default function Home({navigation}) {
    return (
        <ScrollView>
            <View>
                <View style={styles.flR}>
                    <SafeAreaView style={styles.Input}>
                        <Input
                            placeholder='Search'
                            leftIcon={
                                <Icon
                                    name='search'
                                    size={24}
                                    color='gray'
                                />
                            }
                        />
                    </SafeAreaView>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../img/Icon_Filter.png')}
                    />
                </View>

                <View style={styles.flrText}>
                    <Text style={{
                        fontWeight:'700',
                        fontSize:24
                    }}>
                        Next to you
                    </Text>
                    <Text style={{
                        color:"#333",
                        fontWeight:'200'
                    }}>
                On the map >
                    </Text>
                </View>
                <ScrollView horizontal={true}>
                    {Products.map((product) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')} key={product.id}>
                        <View  style={styles.box}>
                            <Image source={product.img} style={{
                                margin: 20
                            }} />
                            <View style={styles.flRImg}>
                                <Text style={{
                                    width: 150,
                                    fontSize: 20,
                                    fontWeight: '500',
                                    marginLeft: 30
                                }}>{product.name}</Text>
                                <Image source={product.imgDes} style={styles.imageDes} />
                            </View>
                        </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.flrText}>
                    <Text style={{
                        fontWeight:'700',
                        fontSize:24
                    }}>
                        Categories
                    </Text>
                    <Text style={{
                        color:"#333",
                        fontWeight:'200'
                    }}>
                See all >
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin:20,
                    backgroundColor:'white',
                    padding:10,
                    borderRadius:10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap:20
                    }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/Icon_Moving.png')}
                        />
                        <View>
                            <Text style={{
                                fontWeight:'500'
                            }}>
                                Moving and things
                            </Text>
                            <Text style={{
                                fontSize:12,
                                fontWeight:'200',
                                color:'#333'
                            }}>
                                24 tasks
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            fontSize:20
                        }}>
                            >
                        </Text>
                    </View>
                </View>


                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin:20,
                    marginTop: -10,
                    backgroundColor:'white',
                    padding:10,
                    borderRadius:10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap:20
                    }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/Icon_House.png')}
                        />
                        <View>
                            <Text style={{
                                fontWeight:'500'
                            }}>
                                Help around the house
                            </Text>
                            <Text style={{
                                fontSize:12,
                                fontWeight:'200',
                                color:'#333'
                            }}>
                                5 tasks
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            fontSize:20
                        }}>
                            >
                        </Text>
                    </View>
                </View>
                <View style={{
                    width: "100%",
                    height: 80,
                    alignItems: "center",
                    display:'flex',
                    justifyContent:'center',
                    backgroundColor:'white',
                    paddingBottom:30
                }}>
                    <View style={{
                        width: "80%",
                        height: 24,
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                    }}>
                        <Image
                            style={styles.menubar}
                            source={require('../img/menu.png')}
                            resizeMode="contain"
                        />
                        <Image
                            style={styles.menubar}
                            source={require('../img/heart.png')}
                            resizeMode="contain"
                        />
                        <Image
                        style={styles.menubar}
                        style={{
                            marginBottom:20
                        }}
                        source={require('../img/add.png')}
                        resizeMode="contain"
                        />
                        <Image
                        style={styles.menubar}
                        source={require('../img/topic.png')}
                        resizeMode="contain"
                        />
                        <Image
                        style={styles.menubar}
                        source={require('../img/user.png')}
                        resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    flR: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center'
    },
    flrText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center',
        marginTop:-5
    },
    flRImg: {
        width: 250,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Input: {
        width: '80%'
    },
    imageDes: {
        width: 100,
        height: 100
    },
    box: {
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
    },
    menubar : {
        display:'flex',
    },
})