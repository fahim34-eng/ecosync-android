import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import tw from 'twrnc'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = ({ issue }) => (
  <Card style={{ marginVertical : 10, marginHorizontal : 5}}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Text style={tw``} variant="titleLarge"> Topic : {issue.type}</Text>
      <Text variant="bodyMedium"> Description : {issue.description}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: issue?.image_data ? issue?.image_data :  'https://picsum.photos/700' }} style={styles.image}/>
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