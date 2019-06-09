import React from "react";
import { Text } from "react-native";
import { Container, Content, Header, Body, Title, List, ListItem, } from "native-base";


class DoctorsScreen extends React.Component {
    render() {
        const doctorsList = [
            {
                id: 1,
                name: "Raju"
            },
            {
                id: 1,
                name: "Kalu"
            },
            {
                id: 1,
                name: "Mukesh"
            },
            {
                id: 1,
                name: "Ramesh"
            },
        ]
      return (
        <Container>
          <Header noLeft >
            <Body>
                <Title>Doctors</Title>
            </Body>
          </Header>
          <Content>
                {doctorsList && <List>
                    {doctorsList.map(el => <ListItem key={el.id} >
                        <Text>{el.name}</Text>
                    </ListItem>)}
                </List>}
          </Content>
        </Container>
      );
    }
}
export default DoctorsScreen
