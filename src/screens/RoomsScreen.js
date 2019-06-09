import React from "react";
import { View } from "react-native";
import { Container, Content, Header, Body, Title } from "native-base";
import { connect } from 'react-redux'
import { NavCard } from '../components'
import { style } from '../styles'
import { setRoom } from '../action'

class RoomsScreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        roomList : [
          {
            name: "Room 1",
            id: 1,
            
          },
          {
            name: "Room 2",
            id: 2,
            patients: [
              {
                name: "rama",
                department: "ortho",
                age: 39,
                address: "12, street A, behind the Park.",
                doctor: {
                  name: "Raju",
                  departments: ["ortho"],
                  id: "123",
                  age: 50,
                },
                room: 2,
                id: "1"
              },
              {
                name: "Shyama",
                department: "ortho",
                age: 53,
                address: "45, street C, main market.",
                doctor: {
                  name: "Raju",
                  departments: ["ortho"],
                  id: "123",
                  age: 50,
                },
                room: 2,
                id: "2"
              }
            ]
          },
          {
            name: "Room 3",
            id: 3,
            
          },
          {
            name: "Room 4",
            id: 4,
            
          },
          {
            name: "Room 5",
            id: 5,
            
          },
          {
            name: "Room 6",
            id: 6,
            
          },
          {
            name: "Room 7",
            id: 7,
            
          },
          {
            name: "Room 8",
            id: 8,
            
          },
          {
            name: "Room 9",
            id: 9,
            
          },
        ]
      }
    }
    render() {
      return (
        <Container>
          <Header noLeft >
            <Body>
              <Title>Rooms</Title>
            </Body>
          </Header>
          <Content>
          <View style={style.row}>
            {this.state.roomList.map(el => (
              <View key={el.id} style={style.col1}>
                <NavCard 
                onPress={()=> {
                  console.log({props: this.props})
                  this.props.setRoom(el)
                  this.props.navigation.navigate("Room")
                }}
                >{el.name}{ !el.patients && " (Available)"}</NavCard>
            </View>))}
          </View>
          </Content>
        </Container>
      );
    }
}
export default connect(null, { setRoom })(RoomsScreen)
