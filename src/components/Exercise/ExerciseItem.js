import React from 'react'
import { Image, Text, View } from 'react-native'
import Rating from '../Rating/Rating'

const ExerciseItem = () => {
  return (
    <View className="flex flex-row items-center justify-between gap-4 mb-4">
      <View className="flex flex-row">
        <Image className="w-16 h-16 rounded-[5px] mr-2" source={require('../../../assets/img/exercise/bai_1.jpg')} />
        <View className="flex justify-center">
          <Rating rate={3} />
          <Text className="text-[#fff] font-bold text-[14px] mb-1">Bài tập chống đẩy tay rộng</Text>
          <Text className="text-[#9FADBC] text-[13px]">3 bộ x 10 lần, 60 giây nghỉ</Text>
        </View>
      </View>
      <View>
        <Text className="mb-2 text-[#fff] text-[13px] text-center">Ngực</Text>
        <Image className="w-10 h-10 rounded-[5px]" source={require('../../../assets/img/muscle/nguc.jpg')} />
      </View>
    </View>
  )
}

export default ExerciseItem