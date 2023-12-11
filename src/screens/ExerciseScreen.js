import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Rating from '../components/Rating/Rating';
import ExerciseItem from '../components/Exercise/ExerciseItem';

const ExerciseScreen = () => {
  return (
    <ScrollView className="bg-[#1D2125] h-screen">
      <View className="flex flex-row items-center gap-4 p-4">
        <FontAwesome5 name="fast-forward" size={20} color="white" />
        <Text className="text-[#fff] text-[20px]">Lịch trình của bạn:</Text>
      </View>
      <View className="px-4 mb-5">
        <View className="bg-[#A1BDD914] p-2 rounded-[3px]">
          <View className="mb-5">
            <Text className="text-[#fff] font-bold text-[16px]">Ngực - Bắp tay dưới</Text>
          </View>
          <View>
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
          </View>
        </View>

      </View>
      <View>
        <View className="flex-row flex self-center px-8 py-4 items-center justify-center max-w-fit rounded-[5px] bg-[#579DFF]">
          <Octicons name="north-star" size={20} color="white" />
          <Text className="ml-2 text-[20px] font-bold text-white">Bắt đầu</Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default ExerciseScreen