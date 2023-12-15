import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import MuscleGroupItem from '../Muscle/MuscleGroupItem'

const Exercise = () => {
  return (
    <ScrollView className="p-4">
      <View className="mb-5">
        <Text className="text-[#9FADBC]" >Bạn có thể lưu bất kì luyện tậ nào thành một chương trình để sử dụng trong tương lai</Text>
      </View>
      <View className="">
        <MuscleGroupItem />
        <MuscleGroupItem />
        <MuscleGroupItem />
      </View>
    </ScrollView>
  )
}

export default Exercise