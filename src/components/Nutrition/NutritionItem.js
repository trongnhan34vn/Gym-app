import React from 'react'
import { Image, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const NutritionItem = () => {
  return (
    <View className="bg-[#A1BDD914] mx-4 mt-5 px-4 py-2 rounded-[5px] mb-4">
      <View className="flex flex-row justify-between w-full border-b-[1px] border-b-[#A1BDD914] pb-2 mb-1">
        <View className="flex flex-row gap-4">
          <Image className="w-16 h-16 rounded-[5px]" source={require('../../../assets/breakfast.webp')} />
          <View>
            <Text className="font-bold text-[18px] mb-2 text-white">Bữa sáng</Text>
            <Text className="text-[#B6C2CF]">Chia and banana pudding</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center">
          <Entypo className="" name="plus" size={24} color="white" />
        </View>
      </View>
      <View className="">
        <Text className="text-center text-white">272 kcal</Text>
      </View>
    </View>
  )
}

export default NutritionItem