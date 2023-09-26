import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MenuItem from '../menu-item'
import { PRODUCT_DATA } from '@/utils/product-data'
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamsList } from '@/types/general-types';

type Props = {
    navigation?: BottomTabNavigationProp<ParamsList, 'bottomTab'>
}

const MenuList = ({navigation}: Props) => {
  return (
    <FlatList 
    data={PRODUCT_DATA}
    keyExtractor={(item)=> item.id}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    style={{marginBottom:28, marginTop:10}}
    renderItem={({item})=>{
        return <MenuItem  item={item} navigation={navigation}/>
    }}
    />
  )
}

export default MenuList