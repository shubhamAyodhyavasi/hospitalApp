import React, { Component } from "react";
import { Text, Image, TouchableNativeFeedback} from "react-native";
import { Card, CardItem, Button  } from "native-base";
export default class NavCard extends Component {
    constructor(props){
        super(props)
        this.onPress = this.onPress.bind(this)
    }
    onPress(){
        const {
            onPress
        } = this.props
        if(typeof onPress === "function")
            onPress()
    }
    render(){
        const {
            image, children
        } = this.props
        return(
            <Card>
                {image && <CardItem cardBody>
                    <TouchableNativeFeedback  onPress={this.onPress}>
                    {<Image source={image} style={{height: 100, width: null, flex: 1}}/>}
                    </TouchableNativeFeedback>
                </CardItem>}
                <CardItem cardBody>
                    <Button transparent onPress={this.onPress}>
                        <Text style={{textAlign: "center", width: "100%"}}>{children}</Text>                
                    </Button>
                </CardItem>
            </Card>
        )
    }
}