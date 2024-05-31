import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, PermissionsAndroid, Platform, Linking, Alert } from 'react-native';
import { AppSafeAreaView, AppText, BOLD, FORTY, Toolbar, TouchableOpacityView } from '../common';
import { Audio, StartRecord, NotRight, NotCross, YesCross, YesRight, StopRecord } from '../helper/ImageAssets';
import FastImage from 'react-native-fast-image';
import { colors } from '../theme/colors';
import NavigationService from '../navigation/NavigationService';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

const StartRecordingScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [iconsVisible, setIconsVisible] = useState(false);
  const [recordingPath, setRecordingPath] = useState('');

  useEffect(() => {
    const requestAudioPermissions = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          ]);

          if (
            granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log('You can use the audio recording and storage');
          } else {
            Alert.alert(
              'Permissions Denied',
              'You need to grant audio recording and storage permissions to use this feature. Please enable them in your device settings.',
              [{ text: 'OK', onPress: () => Linking.openSettings() }]
            );
          }
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestAudioPermissions();
  }, []);


  useEffect(() => {
    if (isRecording) {
      const id = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
      setIconsVisible(true);
    } else if (!isRecording && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRecording]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return (
      <>
        <Text style={{ color: hrs > 0 ? colors.headerColor : colors.gray }}>{hrs.toString().padStart(2, '0')}</Text>:
        <Text style={{ color: mins > 0 || hrs > 0 ? colors.headerColor : colors.gray }}>{mins.toString().padStart(2, '0')}</Text>:
        <Text style={{ color: secs > 0 || mins > 0 || hrs > 0 ? colors.headerColor : colors.gray }}>{secs.toString().padStart(2, '0')}</Text>
      </>
    );
  };

  const handleRecordPress = async () => {
    if (isRecording) {
      const result = await audioRecorderPlayer.stopRecorder();
      setRecordingPath(result);
      setIsRecording(false);
    } else {
      const path = 'recording.m4a';
      await audioRecorderPlayer.startRecorder(path);
      setIsRecording(true);
    }
  };

  const handleStopPress = async () => {
    if (isRecording) {
      const result = await audioRecorderPlayer.stopRecorder();
      setRecordingPath(result);
    }
    setIsRecording(false);
    setTimer(0);
    setIconsVisible(false);
  };

  const handleSavePress = () => {
    NavigationService.navigate('SAVE_RECORDING', { recordingPath });
  };

  return (
    <AppSafeAreaView>
      <Toolbar title="Recording" isBack />
      <View style={styles.container}>
        <FastImage source={Audio} resizeMode='contain' style={styles.image} />
        <AppText type={FORTY} color={colors.recordText} weight={BOLD}>{formatTime(timer)}</AppText>
        <View style={styles.imageView}>
          <TouchableOpacityView onPress={handleStopPress}>
            <FastImage source={iconsVisible ? YesCross : NotCross} resizeMode='contain' style={styles.image2} />
          </TouchableOpacityView>
          <TouchableOpacityView onPress={handleRecordPress}>
            <FastImage source={isRecording ? StopRecord : StartRecord} resizeMode='contain' style={styles.image3} />
          </TouchableOpacityView>
          <TouchableOpacityView onPress={handleSavePress} disabled={!iconsVisible}>
            <FastImage source={iconsVisible ? YesRight : NotRight} resizeMode='contain' style={styles.image2} />
          </TouchableOpacityView>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    position: "absolute",
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    paddingBottom: 20,
  },
  image: {
    height: 160,
    width: 160,
    alignSelf: 'center'
  },
  image2: {
    height: 50,
    width: 50,
  },
  image3: {
    height: 66,
    width: 66,
  },
});

export default StartRecordingScreen;
