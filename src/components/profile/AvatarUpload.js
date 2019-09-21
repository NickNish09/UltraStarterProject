import React, {Component} from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import {baseStyles, colors} from "../../styles/base";
import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";
import {uploadAvatar} from '../../helpers/api';
import { Card, Button, Text, Icon } from 'react-native-elements';

//Avatar upload component
export default class AvatarUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      modalVisibility: false
    };
  }

  componentDidMount() {
    this.setState({image: {uri: this.props.placeholderImage}});
  }

  selectImage(){
    this.setState({modalVisibility: true});
  }

  selectImageFromGallery(){
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true
    }).then(image => {
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        modalVisibility: false
      });
      uploadAvatar(image.data, image.mime);
      console.log(image);
    });
  }

  selectFromCamera(){
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true
    }).then(image => {
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        modalVisibility: false
      });
      uploadAvatar(image.data, image.mime);
      console.log(image);
    });
  }

  render() {
    return (
      <View>
        <Modal
          isVisible={this.state.modalVisibility} style={{flex: 1}}
          backdropOpacity={0.5}
          onBackdropPress={() => this.setState({ modalVisibility: false })}
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: 0,
          }}
        >
          <Card containerStyle={{width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
            <Button
              onPress={() => this.selectFromCamera()}
              icon={
                <Icon
                  name="camera"
                  size={18}
                  color="white"
                />
              }
              title={'Select from camera...'}
              containerStyle={{marginBottom: 5}}
              buttonStyle={{backgroundColor: colors.primary}}
              titleStyle={{ marginLeft: 10 }}
            />
            <Button
              onPress={() => this.selectImageFromGallery()}
              icon={
                <Icon
                  name="photo"
                  size={18}
                  color="white"
                />
              }
              title={'Select from gallery...'}
              buttonStyle={{backgroundColor: colors.primary_dark}}
              titleStyle={{ marginLeft: 10 }}
            />
          </Card>
        </Modal>
        <TouchableOpacity onPress={() => this.selectImage()}>
          <Image
            style={{width: 100, height: 100, resizeMode: 'contain', borderRadius: 100}}
            source={this.state.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
