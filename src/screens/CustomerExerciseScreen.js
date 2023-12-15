import React from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import Rating from '../components/Rating/Rating';
import MuscleItem from '../components/Muscle/MuscleItem';

import CustomerExerciseItem from '../components/CustomerExercise/CustomerExerciseItem';
import { Ionicons } from '@expo/vector-icons';

const CustomerExercise = () => {
  return (
    <View className="bg-[#1D2125] h-screen">
      <View className="flex flex-row items-center gap-4 p-4 mb-3">
        <FontAwesome5 name="fast-forward" size={20} color="white" />
        <Text className="text-[#fff] text-[20px]">Khách hàng:</Text>
      </View>
      <View className="flex flex-row items-center px-4 py-2 rounded-[500px] bg-[#A1BDD914] mb-3 mx-3">
        <Ionicons name="search" size={24} color="#B6C2CF" />
        <TextInput placeholderTextColor={'#B6C2CF'} className="text-[#B6C2CF] ml-2 text-[14px]" placeholder='Tìm kiếm khách hàng' />
      </View>
      <ScrollView className="mx-3 h-[750px] mb-20">
        <CustomerExerciseItem />
        <CustomerExerciseItem />
        <CustomerExerciseItem />
        <CustomerExerciseItem />
      </ScrollView>
    </View>
  )
}

export default CustomerExercise