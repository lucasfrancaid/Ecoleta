import React, { useState, useEffect, ChangeEvent } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PickerSelect from 'react-native-picker-select';

import axios from 'axios';

interface IBGEUfResponse {
  sigla: string;
};

interface IBGECityResponse {
  nome: string;
};

interface Item {
  label: string;
  value: string;
};

const Home = () => {
  const [ufs, setUfs] = useState<Item[]>([]);
  const [cities, setCities] = useState<Item[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const navigation = useNavigation();

  useEffect(() => {
    axios.get<IBGEUfResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then((res) => {
            const ufInitials = res.data.map(uf => {
              return {
                label: uf.sigla, 
                value: uf.sigla,
              }
            });
            setUfs(ufInitials);
        })
        .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
      if (selectedUf === '0') return;

      axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
          .then((res) => {
              const cities = res.data.map(city => {
                return {
                  label: city.nome,
                  value: city.nome,
                }
              });
              setCities(cities);
          })
          .catch((err) => console.error(err));
  }, [selectedUf])

  const handleNavigateToPoints = () => {
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity,
    });
  };

  const SelectIcon = () => {
    return (
      <Icon name="chevron-down" style={styles.selectIcon} size={20} />
    );
  };

  const handleSelectUf = (event: ChangeEvent<HTMLSelectElement>) => setSelectedUf(String(event));

  const handleSelectCity = (event: ChangeEvent<HTMLSelectElement>) => setSelectedCity(String(event));

  return (
      <ImageBackground 
          source={require('../../assets/home-background.png')} 
          style={styles.container}
          imageStyle={{ width: 274, height: 368 }}
      >
          <View style={styles.main}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
              <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
          </View>

          <View style={styles.footer}>
            
            <View style={styles.select}>
              <PickerSelect 
                //key
                Icon={SelectIcon}
                placeholder={{label: "Selecione um estado", value: null}}
                onValueChange={handleSelectUf}
                items={ufs}
                value={selectedUf}
              />
            </View>

            <View style={styles.select}>
              <PickerSelect 
                //key
                Icon={SelectIcon}
                placeholder={{label: "Selecione uma cidade", value: null}}
                onValueChange={handleSelectCity}
                items={cities}
                value={selectedCity}
                />
            </View>


            <RectButton style={styles.button} onPress={handleNavigateToPoints}>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="arrow-right" color="#FFF" size={24} />  
                </Text>
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingTop: 5,
      paddingHorizontal: 15,
      fontSize: 16,
    },

    selectIcon: {
      paddingHorizontal: 10,
      paddingTop: 15,
      color: '#DADADA', 
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home;