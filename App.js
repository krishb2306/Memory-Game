/*
So this is my NBA Memory Game. Starting at the Home Screen you can pick between trying to match the East or West teams, 
and there is an instructions button for anyone new that doesn’t know how to game works.

After you pick a side you are brought to their respective screen. 
On the top you can see your current number of attempts, and the high score will set itself after you finish the game. 
After this if you press play again the high score will set itself to the lowest number of attempts you get, 
since technically the lower number is better in this game. After you press a card you cannot click it again, 
and once you match a pair you cannot press that same pair again.

My custom component is the pink square which is later rendered through a flatlist. This pink square is a base image, and when pressed it
switches to another image of the team logo on a pink background. I did this so that all logos had an even size and that it looked uniform
as if you were looking at the other side of the card.

Once you match all the cards, a popup will show and it will ask you if you want to return home or play again. 

One small bug I found was that when you get a match wrong, if you quickly press the home button while its wrong a 
react native popup will show at the bottom of the screen saying you cannot update a variable without being on the screen. 
It’s a small issue but I couldn’t get it to not show if you were to do that.

Another small bug is on the home screen the east button doesn’t work at certain angles, and you have to click it far to the left. 
I also dont know why this is happening and I tried changing the width and height.

You can also spam click all the buttons and sometimes it doesnt register, but this is one of those bugs if you were trying to break the app.

The final bug I found is on android the custom font doesnt work so its just the base text. I also wasnt able to test the final product on android
because my expo go at home has a network error. I was able to finish the app using the simulator, but from previous testing the sizing should be
fine on android.

Other than this the app works as intended and doesnt crash.
*/


import React, {useState, useEffect} from 'react';
import { View, Text, Modal, Pressable, SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground, Vibration, Alert, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import MemoryBox from './memorybox';


function HomeScreen({navigation}) {
  const[modalOpen, setModal] = useState(false)
  const [loaded] = useFonts({
    Gameplay: require('./assets/fonts/Gameplay.ttf'),//custom font
  });
  if (!loaded) {
    return <AppLoading/>;
  } else {
  return (
    <View style = {styles.container}>
    <SafeAreaView style = {styles.safeAreaStyle}>
    <StatusBar style="auto" />
    <View style={styles.titleContainer}>
    
      <Text style = {styles.mainFont}>  MEMORY  </Text>
      <Text style = {styles.mainFont}>  GAME  </Text>
      <Text style = {styles.subText}>NBA EDITION</Text>
    </View>

    <View style = {styles.homeScreenSpacer}>

    </View>

    <View style={styles.selectionContainer}>
      <View style = {styles.column}>
      <TouchableOpacity style={{width: 100, height: 100, flexDirection:"row",alignItems:'center',justifyContent:'center'}} onPress={() => {navigation.navigate('East'); Vibration.vibrate()}}>
    <Image
        style={styles.confImage}
        source={
          require('./assets/theEast.gif')
        }
  
      />
    </TouchableOpacity>
      </View>

      <View style = {styles.column}>
      <Image
        style={styles.NBAimage}
        source={
          require('./assets/nbalogo.png')
        }
      />
      </View>
      <View style = {styles.column}>
      <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}} onPress={() => {navigation.navigate('West'); Vibration.vibrate()}}>
    <Image
        style={styles.confImage}
        source={
          require('./assets/theWest.gif')
        }
        
      />
    </TouchableOpacity>
      </View>
    </View>
    <View style = {styles.instructionsCont}>
    <TouchableOpacity
      style = {styles.instructionsButton} 
        
        onPress={() => {setModal(true)}}
      >
        <Text style = {styles.instructionsFont}>INSTRUCTIONS</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalOpen}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal(false);
          }}
        >
           <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Select East or West to start. Match the team logos by clicking on the squares in the fewest rounds possible. Good Luck!</Text>
              <Pressable
                style={[styles.instructModalButton, styles.buttonClose]}
                onPress={() => setModal(false)}
              >
                <Text style={styles.modalButtonTextStyle}>Got it!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
    </SafeAreaView>
    
    </View>
  );
}
}
function EastScreen({navigation}) {
  useEffect(() => {
    if(open == true){
      shuffle(items)
      setOpen(false)
    }
  
  },[]);
  const eastArray = [
    {key: 0, name: "Bulls", flipped: false, enabled: true,source: require('./assets/East/bulls.png') },
    {key: 1, name: "Bulls", flipped: false,enabled: true, source: require('./assets/East/bulls.png')},
    {key: 2, name: "Nets", flipped: false,enabled: true, source: require('./assets/East/nets.png')},
    {key: 3, name: "Nets", flipped: false,enabled: true, source: require('./assets/East/nets.png')},
    {key: 4, name: "Heat", flipped: false,enabled: true, source: require('./assets/East/heat.png')},
    {key: 5, name: "Heat", flipped: false,enabled: true, source: require('./assets/East/heat.png')},
    {key: 6, name: "Bucks", flipped: false,enabled: true, source: require('./assets/East/bucks.png')},
    {key: 7, name: "Bucks",flipped: false,enabled: true, source: require('./assets/East/bucks.png')},
    {key: 8, name: "76ers",flipped: false,enabled: true, source: require('./assets/East/sixers.png')},
    {key: 9, name: "76ers",flipped: false,enabled: true, source: require('./assets/East/sixers.png')},
    {key: 10, name: "Cavs",flipped: false,enabled: true,source: require('./assets/East/cavs.png')},
    {key: 11, name: "Cavs",flipped: false,enabled: true, source: require('./assets/East/cavs.png')},
    {key: 12, name: "Raptors",flipped: false,enabled: true, source: require('./assets/East/raptors.png')},
    {key: 13, name: "Raptors",flipped: false,enabled: true, source: require('./assets/East/raptors.png')},
    {key: 14, name: "Hornets",flipped: false,enabled: true, source: require('./assets/East/hornets.png')},
    {key: 15, name: "Hornets",flipped: false,enabled: true, source: require('./assets/East/hornets.png')},
    {key: 16, name: "Wizards",flipped: false,enabled: true, source: require('./assets/East/wizards.png')},
    {key: 17, name: "Wizards",flipped: false,enabled: true, source: require('./assets/East/wizards.png')},
    {key: 18, name: "Celtics",flipped: false,enabled: true, source: require('./assets/East/celtics.png')},
    {key: 19, name: "Celtics",flipped: false,enabled: true, source: require('./assets/East/celtics.png')},
    {key: 20, name: "Knicks",flipped: false,enabled: true, source: require('./assets/East/knicks.png')},
    {key: 21, name: "Knicks",flipped: false,enabled: true, source: require('./assets/East/knicks.png')},
    {key: 22, name: "Hawks",flipped: false,enabled: true, source: require('./assets/East/hawks.png')},
    {key: 23, name: "Hawks",flipped: false,enabled: true, source: require('./assets/East/hawks.png')},
    {key: 24, name: "Pacers",flipped: false,enabled: true, source: require('./assets/East/pacers.png')},
    {key: 25, name: "Pacers",flipped: false,enabled: true, source: require('./assets/East/pacers.png')},
    {key: 26, name: "Pistons",flipped: false,enabled: true, source: require('./assets/East/pistons.png')},
    {key: 27, name: "Pistons",flipped: false,enabled: true, source: require('./assets/East/pistons.png')},
    {key: 28, name: "Magic",flipped: false,enabled: true, source: require('./assets/East/magic.png')},
    {key: 29, name: "Magic",flipped: false,enabled: true, source: require('./assets/East/magic.png')},
  ];
  const[count,setCount] = useState(0);
  const[open,setOpen] = useState(true);
  const[items, setItems] = useState(eastArray)
  const[firstClick, setFirst] = useState(-1)
  const[round,setRound] = useState(0);
  const[highscore, setHigh] = useState(0);
  const[total, setTotal] = useState(0);
  const[finalModal, setModal] = useState(false)
  const[score, saveScore] = useState(16)
  const[openRound, saveOpenRound] = useState(1)
  const[changeScore, setChangeScore] = useState(false)
  
  
  function shuffle(items){
    setItems(items.sort(() => Math.random() - 0.5))
  }

  function reset(valid){
    setTotal(0)
    setRound(0)
    shuffle(items)
    setItems(
        items.map((item) =>
          valid == true
             ?{ ...item, flipped: false, enabled: true}
             :{ ...item}
        )
      )
  }

  function renderRows({index}) {
    return (
      <MemoryBox
      onPressFunction = {() => {onPress(index);}} 
      data = {items}
      keyContent = {index}
      />
    )
  }
  
  function onPress(key) {
    setCount(count + 1);
    
    if (count >= 1 && items[firstClick].name == items[key].name) { // when true
      setItems(
        items.map((item, index) =>
          index == firstClick || index == key
            ? { ...item,flipped: true, enabled: false}
            : { ...item}
        ),
        
      )
      console.log('Correct')

      setFirst(-1)
      setCount(0)
      setTotal(total+1)
      setRound(round +1)
      setHigh(round + 1)

    } 
    
    else if (count >= 1 && items[firstClick].name != items[key].name) { // when false
      setItems(
        items.map((item, index) =>
          index == key
            ? { ...item, flipped: true, enabled: false,}
            : { ...item, enabled: false}
        )
      );
      setRound(round +1)
      setHigh(round+ 1)
      
      console.log('Incorrect')

      const oneSecond = setTimeout(() => { // stops the entire game for a second to reset the wrong
        setItems(
          items.map((item, index) =>
          index == firstClick || index == key
              ? { ...item, flipped: false, enabled: true,}
              : { ...item}
          )
        );
      setCount(0)
    }, 1000)
    return() => clearTimeout(oneSecond) 
    
    } 
    
    else { // when its just one
      setFirst(key);
      setItems(
        items.map((item, index) =>
          index == key
            ? { ...item, flipped: true, enabled: false,}
            : { ...item }
        )
      );
      
    }
    
    if(total == 14 && count != 0){
      if(highscore<=score || openRound == 1){
      saveOpenRound(0)
      setChangeScore(true)
      saveScore(highscore+1)
      console.log("saved:"+score)
      }
      setModal(true)
    }

    
  }
 
  return (
    <View style = {styles.container}>
    <SafeAreaView style = {styles.safeAreaStyle}>
      <View style = {styles.highScoreCont}>
        <View style = {styles.highScoreStyle}>
        <Text style = {styles.baseText}>ATTEMPTS</Text>
        <Text style = {styles.scoreText}>{round}</Text>

        </View>
        <Image
        style={styles.gameConfImage}
        source={
          require('./assets/theEast.gif')
        }
      />
        <View style = {styles.highScoreStyle}>
        <Text style = {styles.baseText}>HIGHSCORE</Text>
        <Text style = {styles.scoreText}>{changeScore == true ? score : 0}</Text>

        </View>

      
      </View>
      <View style = {styles.topGameSpacer}>

      </View>

      <View style = {styles.gameSect}>
       <FlatList
        scrollEnabled= {false}
        data = {items}
        renderItem={renderRows}
        keyExtractor={item => item.key}
        numColumns={5}
       />

      </View>
      <View style = {styles.bottomGameSpacer}>

      
      </View>
      <View style = {styles.buttonSect}>
      <TouchableOpacity
      style = {styles.buttonStyle} 
        
        onPress={() => {reset(true);}}
      >
        <Text style = {styles.baseText}>RESET</Text>
        </TouchableOpacity>

      <TouchableOpacity
      style = {styles.buttonStyle} 
        
        onPress={() => {navigation.navigate('Home');}}
      >
        <Text style = {styles.baseText}>HOME</Text>
        </TouchableOpacity>

      
      </View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={finalModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal(false);
          }}
        >
           <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Congrats on finishing the game! Feel free to try out the West side now, or play again to get a better score.</Text>
          
              <View style = {styles.modalButtonCont}>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => {setModal(false); reset(true)}}
              >
                <Text style={styles.modalButtonTextStyle}>Replay</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => {setModal(false); navigation.navigate("West")}}
              >
                <Text style={styles.modalButtonTextStyle}>West</Text>
              </Pressable>
              </View>
              </View>
            
          </View>
        </Modal>
      
    </SafeAreaView>
    </View>
  );
}
function WestScreen({navigation}) {
  useEffect(() => {
    if(open == true){
      shuffle(items)
      setOpen(false)
    }
  
  },[]);
  const westArray = [
    {key: 0, name: "Suns", flipped: false, enabled: true,source: require('./assets/West/suns.png')},
    {key: 1, name: "Suns", flipped: false,enabled: true, source: require('./assets/West/suns.png')},
    {key: 2, name: "Warriors", flipped: false,enabled: true, source: require('./assets/West/warriors.png')},
    {key: 3, name: "Warriors", flipped: false,enabled: true, source: require('./assets/West/warriors.png')},
    {key: 4, name: "Grizzlies", flipped: false,enabled: true, source: require('./assets/West/grizzlies.png')},
    {key: 5, name: "Grizzlies", flipped: false,enabled: true, source: require('./assets/West/grizzlies.png')},
    {key: 6, name: "Jazz", flipped: false,enabled: true, source: require('./assets/West/jazz.png')},
    {key: 7, name: "Jazz",flipped: false,enabled: true, source: require('./assets/West/jazz.png')},
    {key: 8, name: "Mavs",flipped: false,enabled: true, source: require('./assets/West/mavs.png')},
    {key: 9, name: "Mavs",flipped: false,enabled: true, source: require('./assets/West/mavs.png')},
    {key: 10, name: "Nuggets",flipped: false,enabled: true,source: require('./assets/West/nuggets.png')},
    {key: 11, name: "Nuggets",flipped: false,enabled: true, source: require('./assets/West/nuggets.png')},
    {key: 12, name: "Timberwolves",flipped: false,enabled: true, source: require('./assets/West/timberwolves.png')},
    {key: 13, name: "Timberwolves",flipped: false,enabled: true, source: require('./assets/West/timberwolves.png')},
    {key: 14, name: "Lakers",flipped: false,enabled: true, source: require('./assets/West/lakers.png')},
    {key: 15, name: "Lakers",flipped: false,enabled: true, source: require('./assets/West/lakers.png')},
    {key: 16, name: "Clippers",flipped: false,enabled: true, source: require('./assets/West/clippers.png')},
    {key: 17, name: "Clippers",flipped: false,enabled: true, source: require('./assets/West/clippers.png')},
    {key: 18, name: "Blazers",flipped: false,enabled: true, source: require('./assets/West/blazers.png')},
    {key: 19, name: "Blazers",flipped: false,enabled: true, source: require('./assets/West/blazers.png')},
    {key: 20, name: "Kings",flipped: false,enabled: true, source: require('./assets/West/kings.png')},
    {key: 21, name: "Kings",flipped: false,enabled: true, source: require('./assets/West/kings.png')},
    {key: 22, name: "Spurs",flipped: false,enabled: true, source: require('./assets/West/spurs.png')},
    {key: 23, name: "Spurs",flipped: false,enabled: true, source: require('./assets/West/spurs.png')},
    {key: 24, name: "Pelicans",flipped: false,enabled: true, source: require('./assets/West/pelicans.png')},
    {key: 25, name: "Pelicans",flipped: false,enabled: true, source: require('./assets/West/pelicans.png')},
    {key: 26, name: "Thunder",flipped: false,enabled: true, source: require('./assets/West/thunder.png')},
    {key: 27, name: "Thunder",flipped: false,enabled: true, source: require('./assets/West/thunder.png')},
    {key: 28, name: "Rockets",flipped: false,enabled: true, source: require('./assets/West/rockets.png')},
    {key: 29, name: "Rockets",flipped: false,enabled: true, source: require('./assets/West/rockets.png')},
  ];
  const[count,setCount] = useState(0);
  const[open,setOpen] = useState(true);
  const[items, setItems] = useState(westArray)
  const[firstClick, setFirst] = useState(-1)
  const[round,setRound] = useState(0);
  const[highscore, setHigh] = useState(0);
  const[total, setTotal] = useState(0);
  const[finalModal, setModal] = useState(false)
  const[score, saveScore] = useState(16)
  const[openRound, saveOpenRound] = useState(1)
  const[changeScore, setChangeScore] = useState(false)
  
  function shuffle(items){
    setItems(items.sort(() => Math.random() - 0.5))
  }

  function reset(valid){
    setTotal(0)
    setRound(0)
    shuffle(items)
    setItems(
        items.map((item) =>
          valid == true
             ?{ ...item, flipped: false, enabled: true}
             :{ ...item}
        )
      )
  }

  function renderRows({index}) {
    return (
      <MemoryBox
      onPressFunction = {() => {onPress(index);}} 
      data = {items}
      keyContent = {index}
      />
    )
  }


  function onPress(key) {
    setCount(count + 1);
    
    if (count >= 1 && items[firstClick].name == items[key].name) { // when true
      setItems(
        items.map((item, index) =>
          index == firstClick || index == key
            ? { ...item,flipped: true, enabled: false}
            : { ...item}
        ),
        
      )
      console.log('Correct')
      setFirst(-1)
      setCount(0)
      setTotal(total+1)
      setRound(round +1)
      setHigh(round+ 1)
    
    } 
    
    else if (count >= 1 && items[firstClick].name != items[key].name) { // when false
      setItems(
        items.map((item, index) =>
          index == key
            ? { ...item, flipped: true, enabled: false,}
            : { ...item, enabled: false }
        )
      );
      setRound(round +1)
      setHigh(round+ 1)
      console.log('Incorrect')

      const oneSecond = setTimeout(() => { // stops the entire game for a second to reset the wrong
        setItems(
          items.map((item, index) =>
          index == firstClick || index == key
              ? { ...item, flipped: false, enabled: true,}
              : { ...item}
          )
        );
      setCount(0)
    }, 1000)
    return() => clearTimeout(oneSecond) 
    
    } 
    
    else { // when its just one
      setFirst(key);
      setItems(
        items.map((item, index) =>
          index == key
            ? { ...item, flipped: true, enabled: false,}
            : { ...item }
        )
      );
      
    }
    
    if(round >= highscore){
      setHigh(round)
    }

    if(total == 14 && count != 0){
      if(highscore<=score || openRound == 1){
      saveOpenRound(0)
      setChangeScore(true)
      saveScore(highscore+1)
      console.log("saved:"+score)
      }
      setModal(true)
    }
  }
 
  return (
    <View style = {styles.container}>
    <SafeAreaView style = {styles.safeAreaStyle}>
      <View style = {styles.highScoreCont}>
        <View style = {styles.highScoreStyle}>
        <Text style = {styles.baseText}>ATTEMPTS</Text>
        <Text style = {styles.scoreText}>{round}</Text>

        </View>
        <Image
        style={styles.gameConfImage}
        source={
          require('./assets/theWest.gif')
        }
      />
        <View style = {styles.highScoreStyle}>
        <Text style = {styles.baseText}>HIGHSCORE</Text>
        <Text style = {styles.scoreText}>{changeScore == true ? score : 0}</Text>

        </View>

      
      </View>
      <View style = {styles.topGameSpacer}>

      </View>

      <View style = {styles.gameSect}>
       <FlatList
        scrollEnabled= {false}
        data = {items}
        renderItem={renderRows}
        keyExtractor={item => item.key}
        numColumns={5}
       />

      </View>
      <View style = {styles.bottomGameSpacer}>

      
      </View>
      <View style = {styles.buttonSect}>
      <TouchableOpacity
      style = {styles.buttonStyle} 
        
        onPress={() => {reset(true);}}
      >
        <Text style = {styles.baseText}>RESET</Text>
        </TouchableOpacity>

      <TouchableOpacity
      style = {styles.buttonStyle} 
        
        onPress={() => {navigation.navigate('Home');}}
      >
        <Text style = {styles.baseText}>HOME</Text>
        </TouchableOpacity>

      
      </View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={finalModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal(false);
          }}
        >
           <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Congrats on finishing the game! Feel free to try out the East side now, or play again to get a better score.</Text>
          
              <View style = {styles.modalButtonCont}>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => {setModal(false); reset(true)}}
              >
                <Text style={styles.modalButtonTextStyle}>Replay</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => {setModal(false); navigation.navigate("East")}}
              >
                <Text style={styles.modalButtonTextStyle}>East</Text>
              </Pressable>
              </View>
              </View>
            
          </View>
        </Modal>
      
    </SafeAreaView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="East" component={EastScreen} />
        <Stack.Screen name="West" component={WestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  startCont: {
    backgroundColor: "green",
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    margin: 5,
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "#F9DBBD"
  },
  safeAreaStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  mainFont: {
    fontWeight: "bold",
    fontSize: 45,
    color: "#450920",
    fontFamily: "Gameplay",
    margin: 5,
    backgroundColor: "#DA627D",
  },
  titleContainer: {
    flex: 0.1,
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 15
  },
  selectionContainer: {
    flex: 0.5,
    //backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row"
  },
  NBAimage: {
    width: 285,
    height: 285
  },
  confImage: {
    width: 85,
    height: 100,
    marginLeft: 25,
    marginRight: 25,
    resizeMode: "contain"
  },
  highScoreCont: {
    flex: 0.15,
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  gameSect: {
    flex: 0.5,
    //backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  buttonSect: {
    flex: 0.1,
    //backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomGameSpacer: {
    flex: 0.1,
    //backgroundColor: "#C95D63",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  buttonStyle: {
    backgroundColor: "#DA627D",
    height: 50,
    width: 115,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 75
  },
  highScoreStyle: {
    backgroundColor: "#DA627D",
    borderRadius: 15,
    //borderColor: "#496DDB",
    //borderWidth: 1,
    width: "30%",
    height: "80%",
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#450920",
    fontFamily: "Gameplay"
  },
  scoreText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    margin: 7,
    fontFamily: "Gameplay"
  },
  gameConfImage: {
    width: 80,
    height: 100,
    resizeMode: "contain"
  },
  subText: {
    color: "#450920",
    fontSize: 17,
    fontWeight: "bold",
    margin: 5
  },
  column: {
    //backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%"
  },
  homeScreenSpacer: {
    flex: 0.07,
    //backgroundColor: "#C95D63",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  instructionsCont: {
    flex: 0.1,
    //backgroundColor: "#C95D63",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  instructionsButton: {
    backgroundColor: "#DA627D",
    height: 50,
    width: 260,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  instructionsFont: {
    fontWeight: "bold",
    fontSize: 27,
    color: "#450920",
    fontFamily: "Gameplay",
    margin: 5,
  },
  topGameSpacer: {
    flex: 0.05,
    //backgroundColor: "#C95D63",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFA5AB",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    marginLeft: 50
  },
  instructModalButton: {
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: "#C95D63",
  },
  modalButtonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#450920",
    fontWeight: "bold"
  },
  modalButtonCont: {
    width: "43%",
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    
  },

});
export default App;