import React, { Component } from 'react'
import { Text, View, Image  } from 'react-native'
import { Container, Content, Header, Title, Body, H3 } from 'native-base'
import { style } from '../styles'
import { imagePack } from '../constants'
class HospitalScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "SH Hospital",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,

        }
    }
    render(){
        const {
            name, description
        } = this.state
        return(
            <Container>
                <Header noLeft>
                    <Body>
                        <Title>
                            {name}
                        </Title>
                    </Body>
                </Header>
                <Content>
                    <Image source={imagePack.HospitalImage} style={{height:150}} />
                    <View style={style.normalPadding}>
                        <H3>{name}</H3>
                        <Text>
                        {description}
                        </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
export default HospitalScreen