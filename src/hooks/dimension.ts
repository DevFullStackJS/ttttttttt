import {useState} from 'react';
import {Dimensions} from 'react-native';

export const useWidthHeight = () => {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const screenWidth = () => {
    setWidth(Dimensions.get('window').width);
  };
  Dimensions.addEventListener('change', screenWidth);

  const [height, setHeight] = useState(Dimensions.get('window').height);
  const screenHeight = () => {
    setHeight(Dimensions.get('window').height);
  };
  Dimensions.addEventListener('change', screenHeight);

  return {
    width,
    height,
  };
};
