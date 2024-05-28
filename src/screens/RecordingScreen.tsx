import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AppText, BOLD, FOURTEEN, TWENTY } from '../common';
import FastImage from 'react-native-fast-image';
import { Delete, Play, Record, Search } from '../helper/ImageAssets';
import { colors } from '../theme/colors';
import { TouchableOpacityView } from '../common';
import NavigationService from '../navigation/NavigationService';
import { useRoute } from '@react-navigation/native';

const RecordingScreen = (hasRecordings) => {
  const route = useRoute();
  // const { recordingTitle, selectedColor } = route.params || {};
  const [recordings, setRecordings] = useState([]);
  //*Dummy data for just UI
  // useEffect(() => {
  //   setRecordings([
  //     { recordingTitle: "Recording 1", selectedColor: "#B494FD" },
  //     { recordingTitle: "Recording 2", selectedColor: "#77C2FF" },
  //     { recordingTitle: "Recording 3", selectedColor: "#ED8D8D" },
  //     { recordingTitle: "Recording 4", selectedColor: "#FEB4EB" },
  //   ]);
  // }, []);

  // useEffect(() => {
  // }, [recordings]);

  //*actual data that will be displayed through API & params through saverecording screen====>

  // const addRecording = () => {
  //   setRecordings([...recordings, { recordingTitle, selectedColor }]);
  // };

  return (
    <>
      {hasRecordings ? (
        //    <View style={styles.recordingsContainer}>
        //    {recordings.map((recording, index) => (
        //      <View key={index} style={[styles.recordingCard, { backgroundColor: recording.selectedColor, borderColor: recording.selectedColor }]}>
        //        <AppText type={FOURTEEN} weight={BOLD} style={styles.text2}>{recording.recordingTitle}</AppText>
        //      </View>
        //    ))}
        //  </View>
        <>
          <View style={styles.mainCotainer}>
            <View style={styles.rowView}>
              <View style={styles.recordingsContainer}>
                <View style={styles.cardView}>
                  <AppText type={FOURTEEN} weight={BOLD} style={styles.text2}>Recording 1</AppText>
                  <FastImage source={Play} resizeMode='contain' style={styles.image2} />
                  <FastImage source={Delete} resizeMode='contain' style={styles.image2} />
                </View>
              </View>

              <View style={styles.recordingsContainer2}>
                <View style={styles.cardView}>
                  <AppText type={FOURTEEN} weight={BOLD} style={styles.text2}>Recording 2</AppText>
                  <FastImage source={Play} resizeMode='contain' style={styles.image2} />
                  <FastImage source={Delete} resizeMode='contain' style={styles.image2} />
                </View>
              </View>
            </View>

            <View style={styles.rowView}>
              <View style={styles.recordingsContainer3}>
                <View style={styles.cardView}>
                  <AppText type={FOURTEEN} weight={BOLD} style={styles.text2}>Recording 3</AppText>
                  <FastImage source={Play} resizeMode='contain' style={styles.image2} />
                  <FastImage source={Delete} resizeMode='contain' style={styles.image2} />
                </View>
              </View>

              <View style={styles.recordingsContainer4}>
                <View style={styles.cardView}>
                  <AppText type={FOURTEEN} weight={BOLD} style={styles.text2}>Recording 4</AppText>
                  <FastImage source={Play} resizeMode='contain' style={styles.image2} />
                  <FastImage source={Delete} resizeMode='contain' style={styles.image2} />
                </View>
              </View>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.container}>
          <FastImage source={Search} resizeMode='contain' style={styles.image} />
          <AppText type={TWENTY} weight={BOLD} style={styles.textColor}>No Recording Found!!</AppText>
          <AppText type={FOURTEEN} color={colors.startText} style={styles.text}>There's nothing here yet. Hit the record button to capture something amazing!</AppText>
          <TouchableOpacityView style={styles.touchable} onPress={() => NavigationService.navigate('START_RECORDING_SCREEN')}>
            <FastImage source={Record} resizeMode='contain' style={styles.recordImage} />
          </TouchableOpacityView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCotainer: {
    alignItems: 'center',

  },
  cardView: {
    flexDirection: 'row'
  },
  recordingsContainer: {
    height: 96,
    backgroundColor: '#FFF3FC',
    borderColor: '#FEB4EB',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 9
  },
  recordingsContainer2: {
    height: 96,
    backgroundColor: '#EFE8FF',
    borderColor: '#B494FD',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 9
  },
  recordingsContainer3: {
    height: 96,
    backgroundColor: '#FFDFDF',
    borderColor: '#ED8D8D',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 9
  },
  recordingsContainer4: {
    height: 96,
    backgroundColor: '#E2F2FF',
    borderColor: '#77C2FF',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 9
  },
  rowView: {
    flexDirection: "row",
    marginTop: 10,
    width: '80%',
    justifyContent: 'space-between'
  },
  image: {
    height: 89,
    width: 89,
  },
  image2: {
    height: 32,
    width: 32,
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 20,
  },
  textColor: {
    color: colors.headerColor,
    marginVertical: 10,
  },
  text2: {
    color: '#333333',
    marginTop:5
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
  },
});

export default RecordingScreen;
