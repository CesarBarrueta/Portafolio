import React from 'react';
import { SafeAreaView} from 'react-native';
import PokemonList from './src/components/PokemonList'

export default function App() {
  return (
      <SafeAreaView>
        <PokemonList></PokemonList>
      </SafeAreaView>
  );
}

