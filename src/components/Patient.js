import React, {Component} from 'react'
import { connect } from 'react-redux'
import { View, Text} from 'react-native'
import { Container, Content, Header, Body, Title, 
    H3, List, ListItem
} from 'native-base'

class Patient extends Component {
    render(){
        console.log(this.props)
        const {
            name,
            age, 
            address,
            doctor
        } = this.props.patient
        return(
            <Container>
                <Header noLeft>
                    <Body> 
                        <Title>Patient ({name})</Title>
                    </Body>
                </Header>
                <Content>
                     <List>
                         <ListItem>
                             <Body>
                                 <H3>Name</H3>
                                 <Text>{name}</Text>
                             </Body>
                         </ListItem>
                         <ListItem>
                             <Body>
                                 <H3>Age</H3>
                                 <Text>{age}</Text>
                             </Body>
                         </ListItem>
                         <ListItem>
                             <Body>
                                 <H3>Address</H3>
                                 <Text>{address}</Text>
                             </Body>
                         </ListItem>
                         <ListItem>
                             <Body>
                                 <H3>Doctor Assigned</H3>
                                 <Text>{doctor.name}</Text>
                             </Body>
                         </ListItem>
                     </List>
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = state => ({
    patient: state.patients.patient
})
export default connect(mapStateToProps,)(Patient)