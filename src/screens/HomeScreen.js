import React from "react";
import { View} from "react-native";
import { NavCard } from '../components'
import { style } from '../styles'
import { imagePack } from '../constants'
import { Container, Content, Header, Title, Body, } from 'native-base'

class HomeScreen extends React.Component {
    navigate = screen => {
        this.props.navigation.navigate(screen)
    }
    render() {
      return (
        <Container>
            <Header noLeft>
                <Body>
                    <Title>Hospital App</Title> 
                </Body>
            </Header>
            <Content>
                <View style={style.row}>
                    <View style={style.col2}>
                        <NavCard image={imagePack.roomsThumb} onPress={()=> this.navigate("Rooms")}>Rooms</NavCard>
                    </View>
                    <View style={style.col2}>
                        <NavCard image={imagePack.patientsThumb} onPress={()=> this.navigate("Patients")}>Patients</NavCard>
                    </View>
                    <View style={style.col2}>
                        <NavCard image={imagePack.doctorsThumb} onPress={()=> this.navigate("Doctors")}>Doctors</NavCard>
                    </View>
                    <View style={style.col2}>
                        <NavCard image={imagePack.hospitalThumb} onPress={()=> this.navigate("Hospital")}>Hospital</NavCard>
                    </View>
                </View>
            </Content>
        </Container>
      );
    }
}
export default HomeScreen
