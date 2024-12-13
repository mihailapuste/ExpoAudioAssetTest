/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useAudioPlayer} from 'expo-audio';
import React from 'react';

import {
  Button,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const player = useAudioPlayer(null);

  const handleBundledFileTest = () => {
    console.log('Bundled file test button pressed');

    // get local file
    // Add your logic here
    player.replace(require('./assets/test.mp3'));

    player.play();
  };

  const handleStreamingFileTest = () => {
    console.log('Streaming file test button pressed');
    // Add your logic here
    player.replace({
      uri: 'https://www.myinstants.com/media/sounds/vid_20190911_004414_001-online-audio-converter.mp3',
    });
    player.play();
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{marginVertical: 10}}>
        <Button title="bundled file test" onPress={handleBundledFileTest} />
      </View>

      <View style={{marginVertical: 10}}>
        <Button title="streaming file test" onPress={handleStreamingFileTest} />
      </View>
    </SafeAreaView>
  );
}

export default App;
