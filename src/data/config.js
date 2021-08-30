import {Platform} from 'react-native';
import env from 'react-native-config';

let url = 'http://192.168.43.211:4000/';

if (Platform.OS === 'web') {
  const {REACT_APP_API_URL} = process.env;
  url = REACT_APP_API_URL;
} else {
  // Load Mobile env
  const {REACT_APP_API_URL} = env;
  url = REACT_APP_API_URL;
}

export default {
  url,
  baseURL: url,
  apiDocs: `${url}api-docs/`,
  pathApi: 'api/',
  myprivatekey: 'myprivatekey',
};
