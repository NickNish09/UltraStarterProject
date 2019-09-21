import React, {Component} from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import {baseStyles} from "../../styles/base";
import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";

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
    console.log(this.props.placeholderImage);
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
      this.setState({image: {uri: image.path, width: image.width, height: image.height, mime: image.mime}});
      console.log(image);
      this.setState({modalVisibility: false});
    });
  }

  selectFromCamera(){
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      this.setState({image: {uri: image.path, width: image.width, height: image.height, mime: image.mime}});
      console.log(image);
      this.setState({modalVisibility: false});
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
            alignItems: 'center',
            margin: 0,
          }}
        >
          <TouchableOpacity onPress={() => this.selectFromCamera()}>
            <Text>Select from camera...</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectImageFromGallery()}>
            <Text>Select from gallery...</Text>
          </TouchableOpacity>
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
