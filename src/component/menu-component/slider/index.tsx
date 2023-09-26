import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { tomatoRed } from '@/constants/colors';

type Props = {
    data: any[]
}
const { width } = Dimensions.get("window");

const Slider = ({data}: Props) => {
  
  const scrollViewRef = React.createRef<any>();
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollViewRef.current.scrollTo({ x: page * width, animated: true });
  };

  return (
    <>
    <ScrollView
        ref={scrollViewRef}
        style={{flex:1}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const page = Math.floor(event.nativeEvent.contentOffset.x / width);
          setCurrentPage(page);
        }}
      >
        {data.map((image, index) => (
          <Pressable key={index} style={styles.slide}>
            <Image source={image} style={styles.image} resizeMode="contain" />
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              index === currentPage && styles.paginationDotActive,
            ]}
            onPress={() => handlePageChange(index)}
          />
        ))}
      </View>
    </>

  )
}

export default Slider

const styles = StyleSheet.create({
    slide: {
        width,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
      },
      image: {
        width: "100%",
        height: "100%",
      },
      pagination: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
      },
      paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: "gray",
        marginHorizontal: 5,
      },
      paginationDotActive: {
        backgroundColor: tomatoRed,
      },
})