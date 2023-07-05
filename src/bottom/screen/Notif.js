import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Notif = () => {
  return (
    <View>

      <ScrollView>
        
      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      <View style={styles.bar}>
        <Image style={styles.img} source={require('./img/baby.png')} />
        <View style={{marginTop: 10, marginHorizontal: 5,}}>
        <Text  style={styles.txt}>Machanic</Text>
        <Text  style={styles.txt2}>We have an Excting offer for you near to yo...</Text> 
        </View>
        <Text style={styles.txt3}>2 Day Ago</Text>
      </View>


      </ScrollView>

    </View>
  )
}

export default Notif

const styles = StyleSheet.create({
    bar:{
        flexDirection: 'row',
        backgroundColor: '#00bfff',
        paddingVertical: 10,
        paddingHorizontal: 8,
        width: "90%",
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10 
    },
    img:{
        height: 50,
        width: 50,
    },
    txt:{
        color: 'white',
        fontSize: 16,
        
        },
    txt2:{
        color: 'white',
        fontSize: 13,
        marginTop: 3
        },
    txt3:{
        color: 'white',
        fontSize: 15,
        marginBottom: 5,
        right: 40
        },
})