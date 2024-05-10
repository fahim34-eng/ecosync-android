import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = ({ issue }) => (
  <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image}/>
    <Card.Content>
      <Text variant="titleLarge">{issue.type}</Text>
      <Text variant="bodyMedium">{issue.description}</Text>
    </Card.Content>
    <Card.Actions style={styles.buttonContainer}>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image : { 
        paddingHorizontal : 10 
    },
    buttonContainer: { 
        display : "flex", 
        justifyContent : "flex-start", 
        marginRight : "auto" 
    }
});


export default CardComponent;