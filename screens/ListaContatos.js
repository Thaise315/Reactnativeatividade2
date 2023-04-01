import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { ListItem, Avatar, Header, Icon } from 'react-native-elements';

const ListaScreen = ({navigation}) => {
  
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    
  ]



  return (
    <View>
      <Header
        leftComponent={ <Button
          icon={
            <Icon
              name="arrow-left"
              size={25}
              color="white"
            />
          }
          title=""
          onPress={()=>navigation.navigate('Login')}            
        /> }
        rightComponent={<Button
          title="+"
          onPress={() => navigation.navigate('CadastroContatos')}
        />}
        centerComponent={{ text: 'Lista', style: { color: '#fff', fontSize: 25 } }}
      />
      {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider onPress={() => navigation.navigate('AlteracaoCadastro')} >
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }

    </View>
  );
};

export default ListaScreen;