import React, { Component } from 'react'
import { Text, View, Image  } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Header, Title, Body, List, ListItem, H3 } from 'native-base'
import { style } from '../styles'
import { setPatient } from '../action'

class PatientsScreen extends Component {
    render(){
        const {
            patients
        } = this.props
        return(
            <Container>
                <Header noLeft>
                    <Body>
                        <Title>Patients</Title> 
                    </Body>
                </Header>
                <Content>
                    {patients.length === 0 && <View style={style.normalPadding}>
                        <H3>No Patients !!!</H3>
                    </View> }
                    {patients.length && <List>
                        {patients.map(el => <ListItem key={el.id} 
                            onPress={()=> {
                                this.props.setPatient(el)
                                this.props.navigation.navigate("Patient")
                            }}
                    >
                        <Text>{el.name}</Text>
                    </ListItem>)}
                    </List>}
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = state => ({
    patients: state.patients.patients
})
export default connect(mapStateToProps, { setPatient })(PatientsScreen)