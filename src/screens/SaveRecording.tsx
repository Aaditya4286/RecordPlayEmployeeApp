import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { AppSafeAreaView, AppText, BOLD, SIXTEEN, TWELVE, TouchableOpacityView, WHITE } from '../common';
import { colors } from '../theme/colors';
import { tickIcon } from '../helper/ImageAssets';
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationService from '../navigation/NavigationService';

const SaveRecording = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { recordingDuration } = route.params || {};
    const [recordingTitle, setRecordingTitle] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const colorOptions = ['#FFF3FC', '#EFE8FF', '#FFDFDF', '#D9FFDD', '#E2F2FF', '#FFEDD8'];

    const handleSubmit = () => {
        if (selectedColor && recordingTitle) {
            NavigationService.navigate('Recording', { recordingTitle, selectedColor });
        }
    };
    

    return (
        <AppSafeAreaView>
            <View>
                <AppText type={SIXTEEN} color={'#333333'} weight={BOLD} style={styles.text}>
                    Save Recording
                </AppText>
                <TextInput
                    style={styles.textInput}
                    placeholder="Recording 1"
                    value={recordingTitle}
                    onChangeText={setRecordingTitle}
                />
                <AppText type={TWELVE} color={'#333333'} weight={BOLD} style={styles.text2}>
                    Select Card Color
                </AppText>
                <View style={styles.colorPickerContainer}>
                    {colorOptions.map((color) => (
                        <TouchableOpacity
                            key={color}
                            style={[
                                styles.colorSwatch,
                                { backgroundColor: color },
                            ]}
                            onPress={() => setSelectedColor(color)}
                        >
                            {selectedColor === color && (
                                <Image source={tickIcon} style={styles.tickIcon} />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacityView
                    style={[
                        styles.button,
                        { 
                            backgroundColor: selectedColor ? colors.headerColor : colors.headerColor + '33',
                            opacity: selectedColor ? 1 : 0.5
                        },
                    ]}
                    disabled={!selectedColor}
                    onPress={handleSubmit}
                >
                    <AppText type={SIXTEEN} color={WHITE} weight={BOLD} style={styles.text3}>
                        Submit
                    </AppText>
                </TouchableOpacityView>
            </View>
        </AppSafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 43,
        borderRadius: 4,
        padding: 12,
        marginTop: 12,
        width: '50%',
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        paddingVertical: 9,
    },
    text2: {
        paddingVertical: 9,
        paddingLeft: 18,
    },
    text3: {
        textAlign: 'center',
    },
    textInput: {
        borderRadius: 6,
        borderWidth: 1,
        padding: 8,
        height: 46,
        borderColor: '#DDDDDD',
        marginHorizontal: 16,
        marginTop: 16,
    },
    colorPickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        padding: 8,
        borderColor: '#DDDDDD',
        marginHorizontal: 16,
    },
    colorSwatch: {
        width: 40,
        height: 40,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tickIcon: {
        width: 18,
        height: 16,
    },
});

export default SaveRecording;
