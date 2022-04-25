import React, {ReactElement, useState, memo} from 'react';
import {Alert} from 'react-native';

const get = (url: string) =>
  new Promise<any>((resolve, reject): void => {
    fetch(url)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(e => {
        console.log(e);
        Alert.alert('Please try again later!'); //TODO
        reject(e);
      });
  });

export {get};
