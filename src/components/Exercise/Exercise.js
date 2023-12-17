import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import MuscleGroupItem from '../Muscle/MuscleGroupItem'
import { Octicons } from '@expo/vector-icons';

import ExerciseItem from './ExerciseItem'
import { MaterialIcons } from '@expo/vector-icons';


const Exercise = () => {
  return (
    <ScrollView className="p-4">
      <View className="mb-5">
        <Text className="text-[#9FADBC]" >Bạn có thể lưu bất kì luyện tậ nào thành một chương trình để sử dụng trong tương lai</Text>
      </View>
      <View className="flex flex-row items-center justify-between mx-4 mb-5">
        <MaterialIcons name="keyboard-arrow-left" size={24} color="#B6C2CF" />
        <Text className="text-[#B6C2CF] text-center">TODAY, 5 OCT</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#B6C2CF" />
      </View>
      <ScrollView className="h-[470px] mb-5">
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
      </ScrollView>
      <View>
        <Button title='Bắt đầu' className="flex-row flex self-center px-8 py-4 items-center justify-center max-w-fit rounded-[5px] bg-[#579DFF]">
        </Button>
      </View>
    </ScrollView>
  )
}

export default Exercise