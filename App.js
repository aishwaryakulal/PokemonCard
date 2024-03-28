
// import { StyleSheet, Text, SafeAreaView, Platform,ScrollView } from 'react-native';
// import PokemonCard from './components/PokemonCard';
// export default function App() {
//   const charmanderData ={
//     name: "Charmander",
//     image: require("./assets/10.jpg"),
//     type:"Fire",
//     hp:39,
//     moves: ["Scratch","Ember","Growl","Leer"],
//     weaknesses:["Water","Rock"],
//   };
//   const squirtleData = {
//     name: "Squirtle",
//     image: require("./assets/6.jpg"),
//     type: "Water",
//     hp: 44,
//     moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
//     weaknesses: ["Electric", "Grass"],
//   };
  
//   const bulbasaurData = {
//     name: "Bulbasaur",
//     image: require("./assets/7.jpg"),
//     type: "Grass",
//     hp: 45,
//     moves: ["Tackle", "Vine Whip", "Leech Seed", "Growl"],
//     weaknesses: ["Fire", "Flying", "Ice", "Psychic"],
//   };
  
//   const pikachuData = {
//     name: "Pikachu",
//     image: require("./assets/8.jpg"),
//     type: "Electric",
//     hp: 35,
//     moves: ["Quick Attack", "Thunder Shock", "Growl", "Tail Whip"],
//     weaknesses: ["Ground"],
//   };
//   const charizardData = {
//     name: "Charizard",
//     image: require("./assets/5.jpg"),
//     type: "Fire",
//     hp: 78,
//     moves: ["Fire Blast", "Fly", "Slash", "Dragon Rage"],
//     weaknesses: ["Water", "Electric", "Rock"],
//   };
  

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <PokemonCard {...charmanderData}/>
//         <PokemonCard {...charizardData} />
//         <PokemonCard {...bulbasaurData} />
//         <PokemonCard {...squirtleData} />
//         <PokemonCard {...pikachuData} />
//       </ScrollView>
//     </SafeAreaView>
//   );
  
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: Platform.OS === "android" ? 25 : 0,
//   },
// });
import { SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

const charmanderData = {
  name: "Charmander",
  image: require("./assets/10.jpg"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weakness: ["Water", "Rock"],
};
const bulbasaurData = {
  name: "Bulbasaur",
  image: require("./assets/6.jpg"),
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weakness: ["Fire", "Ice", "Flying", "Psychic"],
};
const squirtleData = {
  name: "Squirtle",
  image: require("./assets/7.jpg"),
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weakness: ["Electric", "Grass"],
};
const pikachuData = {
  name: "Pikachu",
  image: require("./assets/3.jpg"),
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weakness: ["Ground"],
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...squirtleData}/>
      <PokemonCard {...bulbasaurData}/>
      <PokemonCard {...pikachuData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});