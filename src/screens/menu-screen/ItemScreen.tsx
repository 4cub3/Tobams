import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { ParamsList } from "@/types/general-types";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  BackButton,
  BodyText,
  Button,
  Container,
  Counter,
  Dropdown,
  Label,
} from "@/shared";
import { RouteProp } from "@react-navigation/native";
import { PRODUCT_DATA } from "@/utils/product-data";
import { tomatoRed, white } from "@/constants/colors";
import { TouchableOpacity } from "react-native";
import { Slider } from "@/component/menu-component";

type Props = {
  navigation?: StackNavigationProp<ParamsList, "item">;
  route: RouteProp<ParamsList>;
};
const ItemScreen = ({ navigation, route }: Props) => {
  const productItem = PRODUCT_DATA.find((item) => item.id === route.params?.id);
  const {
    id,
    image,
    title,
    price,
    description,
    ingredients,
    nutritionalInforamtion,
    howToPrepare,
    dietaryInforamation,
    extra,
    storageInformation,
  } = productItem!;
  const data = [image, image, image];
  return (
    <>
      <ScrollView
        contentContainerStyle={{ backgroundColor: white }}
        style={{ flex: 1, marginBottom: 180 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginBottom: 20, paddingHorizontal: 4 }}>
          <BackButton navigation={navigation!} />
        </View>
        <Pressable style={{ flex: 1 }}>
          <Slider data={data} />
        </Pressable>
        <Pressable style={{ flex: 1 }}>
          <Container>
            <View style={styles.labelStyle}>
              <Label type="medium">{title} </Label>
              <Label type="medium" textStyle={{ color: tomatoRed }}>
                {price}{" "}
              </Label>
            </View>
            <BodyText numberOfLines={4} ellipsizeMode="tail">
              {description}
            </BodyText>
            <View style={styles.dropdownContainer}>
              <Dropdown title={"Ingredients"}>
                <View style={{ gap: 5, marginVertical: 10 }}>
                  {ingredients.map((item, idx) => {
                    return (
                      <BodyText
                        key={idx}
                        textStyle={{ textTransform: "capitalize" }}
                      >
                        - {item}
                      </BodyText>
                    );
                  })}
                </View>
              </Dropdown>
              <Dropdown title={"Nutritional Information"}>
                <BodyText>{nutritionalInforamtion} </BodyText>
              </Dropdown>
              <Dropdown title={"How to Prepare"}>
            
                  <View style={{ gap: 5, marginVertical: 10 }}>
                    {howToPrepare.map((item, idx) => {
                      return (
                        <BodyText
                          key={idx}
                          textStyle={{ textTransform: "capitalize" }}
                        >
                          - {item}
                        </BodyText>
                      );
                    })}
                  </View>
              </Dropdown>
              <Dropdown title={"Dietary Information"}>
                <BodyText>{dietaryInforamation}</BodyText>
              </Dropdown>
              <Dropdown title={"Storage Information"}>
                <BodyText>{storageInformation}</BodyText>
              </Dropdown>
              <Dropdown title={"Extras"}>
                <BodyText>{extra}</BodyText>
              </Dropdown>
            </View>
          </Container>
        </Pressable>
      </ScrollView>
      <View style={styles.foot}>
        <Counter containerStyle={{ marginBottom: 20 }} />
        <View style={{ gap: 16 }}>
          <Button>Add to Cart</Button>
          <Button type="outlined">Subscribt to a plan</Button>
        </View>
      </View>
    </>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  labelStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 20,
    textTransform: "capitalize",
  },
  foot: {
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingHorizontal: 14,
    paddingVertical: 18,
    width: "100%",
    // borderWidth:1,
    backgroundColor: white,
  },
  dropdownContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E1E5E9",
    marginVertical: 20,
  },
});
