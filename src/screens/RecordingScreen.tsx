import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { AppText, BOLD, FOURTEEN, TWENTY } from '../common';
import FastImage from 'react-native-fast-image';
import { Delete, Play, Record, Search } from '../helper/ImageAssets';
import { colors } from '../theme/colors';
import { TouchableOpacityView } from '../common';
import NavigationService from '../navigation/NavigationService';

const RecordingScreen = () => {
  const [recordings, setRecordings] = useState([]);

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
    const updatedRecordings = recordings.filter((_, i) => i !== index);
    setRecordings(updatedRecordings);
    await AsyncStorage.setItem('recordings', JSON.stringify(updatedRecordings));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {recordings.length === 0 ? (
        <View style={styles.noRecordingsContainer}>
          <FastImage source={Search} resizeMode='contain' style={styles.image} />
          <AppText type={TWENTY} weight={BOLD} style={styles.textColor}>No Recording Found!!</AppText>
          <AppText type={FOURTEEN} color={colors.startText} style={styles.text}>There's nothing here yet. Hit the record button to capture something amazing!</AppText>
          <TouchableOpacityView style={styles.touchable} onPress={() => NavigationService.navigate('START_RECORDING_SCREEN')}>
            <FastImage source={Record} resizeMode='contain' style={styles.recordImage} />
          </TouchableOpacityView>
        </View>
      ) : (
        recordings.map((recording, index) => (
          <View key={index} style={[styles.recordingCard, { backgroundColor: recording.color, borderColor: recording.color }]}>
            <AppText type={FOURTEEN} weight={BOLD}>{recording.title}</AppText>
            <View style={styles.rowView}>
              <TouchableOpacityView>
                <FastImage source={Play} style={styles.image2} />
              </TouchableOpacityView>
              <TouchableOpacityView onPress={() => handleDelete(index)}>
                <FastImage source={Delete} style={styles.image2} />
              </TouchableOpacityView>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    width: '50%',
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
