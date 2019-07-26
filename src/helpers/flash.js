import {Alert} from 'react-native';

const flash = (title, message, onCancel, onOk) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancelar',
        onPress: onCancel,
        style: 'cancel',
      },
      {text: 'OK', onPress: onOk},
    ],
    {cancelable: false},
  );
};

export default flash;
