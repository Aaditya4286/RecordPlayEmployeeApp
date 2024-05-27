import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Toolbar } from '../common';

const MyRecordScreen = () => {

  return (
    <Toolbar
    title="My Recorder"
    isBack
    // btnIcon={addClientIcon}
  />
  );
};

const styles = StyleSheet.create({

});

export default MyRecordScreen;
