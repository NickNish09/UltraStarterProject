import React, {Component} from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import {baseStyles} from "../../styles/base";
import ImagePicker from 'react-native-image-crop-picker';

//Avatar upload component
export default class AvatarUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  componentDidMount() {
    console.log(this.props.placeholderImage);
    this.setState({image: {uri: this.props.placeholderImage}});
  }

  selectImage(){
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true
    }).then(image => {
      this.setState({image: {uri: image.path, width: image.width, height: image.height, mime: image.mime}});
      console.log(image);
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.selectImage()}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain', borderRadius: 100}}
          source={this.state.image}
        />
      </TouchableOpacity>
    );
  }
}
