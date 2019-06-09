import React from "react";
import { View, Text } from "react-native";
import { Container, Content, Header, Body, Title, H1,  List, ListItem, } from "native-base";
import { connect } from 'react-redux'

import { clearRoom, setPatient } from '../action'
import { style } from '../styles'


class Room extends React.Component {
    componentWillUnmount(){
        this.props.clearRoom()
    }
    render() {
        const {
            name,
            patients
        } = this.props.rooms.room
        console.log("room", this.props.rooms.room)
      return (
        <Container>
          <Header noLeft >
            <Body>
                <Title>{name}</Title>
            </Body>
          </Header>
          <Content>
                {patients && <List>
                    <ListItem itemDivider style={style.listHeader} >
                        <Text>Patients</Text>
                    </ListItem>
                    {patients.map(el => <ListItem key={el.id} 
                        onPress={()=> {
                            this.props.setPatient(el)
                            this.props.navigation.navigate("Patient")
                        }}
                    >
                        <Text>{el.name}</Text>
                    </ListItem>)}
                </List>}
            {!patients && <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                
                <View style={{flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 20}}>
                    <H1>This room is empty.</H1>

                </View>
            </View>}
          </Content>
        </Container>
      );
    }
}
const mapStateToProps = state => ({
    rooms: state.rooms
})
export default connect(mapStateToProps, { clearRoom, setPatient })(Room)
