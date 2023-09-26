import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ProductType } from "@/utils/product-data";
import { Button, Favourite, Label } from "@/shared";
import { tomatoRed } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamsList, Path } from "@/types/general-types";
interface Props {
  item: ProductType;
  navigation?: BottomTabNavigationProp<ParamsList, 'bottomTab'>
}

const MenuItem = ({ item , navigation}: Props) => {
  const {
    description,
    dietaryInforamation,
    extra,
    howToPrepare,
    image,
    ingredients,
    nutritionalInforamtion,
    price,
    storageInformation,
    title,
    id,
  } = item;
  const [favourite, setFavourite] = useState<string>();
  const onClickFavourite = () => {
    setFavourite(id);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
        navigation?.navigate(Path.ITEM, {id})
    }}>
      <Favourite
        style={styles.favouriteStyle}
        favourite={favourite === id}
        onPress={onClickFavourite}
      />
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.labelStyle}>
        <Label
          numberOfLines={1}
          ellipsizeMode="tail"
          textStyle={{ width: "60%" }}
        >
          {title}
        </Label>
        <Label textStyle={{ color: tomatoRed }}>{price}</Label>
      </View>
      <Button textStyle={{gap:5}} containerStyle={{width: '100%', paddingVertical:6}}>
        <Image
          source={require("@app/assets/item-icon/heroicons_shopping-bag.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={{fontSize:12, fontFamily:'poppins-regular'}}>Add to cart</Text>
      </Button>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Equal flex to make columns take up equal space
    marginVertical: 10,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 94,
    height: 94,
  },
  favouriteStyle: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  labelStyle: {
    marginVertical: 10,
    width: "100%",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
  },
});
