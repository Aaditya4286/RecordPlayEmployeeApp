import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { Delete, Play, Record, Search, Stopped } from '../helper/ImageAssets';
import { colors } from '../theme/colors';
import { AppText, BOLD, FOURTEEN, TWENTY, TouchableOpacityView } from '../common';
import NavigationService from '../navigation/NavigationService';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

const RecordingScreen = () => {
  const [recordings, setRecordings] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const fetchRecordings = async () => {
    try {
      const savedRecordings = await AsyncStorage.getItem('recordings');
      if (savedRecordings) {
        setRecordings(JSON.parse(savedRecordings));
      }
    } catch (error) {
      console.error('Failed to load recordings', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchRecordings();
    }, [])
  );

  const handleDelete = async (index) => {
    Alert.alert(
      "Delete Recording",
      "Are you sure you want to delete this recording?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            const updatedRecordings = recordings.filter((_, i) => i !== index);
            setRecordings(updatedRecordings);
            await AsyncStorage.setItem('recordings', JSON.stringify(updatedRecordings));
          },
          style: "destructive"
        }
      ],
      { cancelable: true }
    );
  };

  const handlePlayPause = async (index) => {
    if (playingIndex === index) {
      await audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removePlayBackListener();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        await audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
      }
      await audioRecorderPlayer.startPlayer(recordings[index].path);
      setPlayingIndex(index);
      audioRecorderPlayer.addPlayBackListener((e) => {
        if (e.currentPosition === e.duration) {
          audioRecorderPlayer.stopPlayer();
          audioRecorderPlayer.removePlayBackListener();
          setPlayingIndex(null);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {recordings.length === 0 ? (
          <View style={styles.noRecordingsContainer}>
            <FastImage source={Search} resizeMode='contain' style={styles.image} />
            <AppText type={TWENTY} weight={BOLD} style={styles.textColor}>No Recording Found!!</AppText>
            <AppText type={FOURTEEN} color={colors.startText} style={styles.text}>There's nothing here yet. Hit the record button to capture something amazing!</AppText>
          </View>
        ) : (
          recordings.map((recording, index) => (
            <View key={index} style={[styles.recordingCard, { backgroundColor: recording.color, borderColor: recording.color }]}>
              <AppText type={FOURTEEN} weight={BOLD}>{recording.title}</AppText>
              <View style={styles.rowView}>
                <TouchableOpacityView onPress={() => handlePlayPause(index)}>
                  <FastImage source={playingIndex === index ? Stopped : Play} style={styles.image2} />
                </TouchableOpacityView>
                <TouchableOpacityView onPress={() => handleDelete(index)}>
                  <FastImage source={Delete} style={styles.image2} />
                </TouchableOpacityView>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      <TouchableOpacityView style={styles.touchable} onPress={() => NavigationService.navigate('START_RECORDING_SCREEN')}>
        <FastImage source={Record} resizeMode='contain' style={styles.recordImage} />
      </TouchableOpacityView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRecordingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 89,
    width: 89,
  },
  textColor: {
    color: colors.headerColor,
    marginVertical: 10,
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 20,
  },
  touchable: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  recordImage: {
    height: 64,
    width: 64,
  },
  recordingCard: {
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    width: '80%',
  },
  rowView: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  image2: {
    height: 32,
    width: 32,
  },
});

export default RecordingScreen;
