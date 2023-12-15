import React, { useState } from 'react'
import { Button, Image, ScrollView, View } from 'react-native'
import { Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Nutrition from '../components/Nutrition/Nutrition';
import Exercise from '../components/Exercise/Exercise';
import ModalComp from '../components/Modal/ModalComp';
import MuscleGroupItem from '../components/Muscle/MuscleGroupItem';
import ExerciseItem from '../components/Exercise/ExerciseItem';

const CustomerExerciseDetailScreen = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleShowCreate = () => {
    setOpenModal(true);
  }

  return (
    <ScrollView className="bg-[#1D2125] h-screen">
      <View className="flex items-center flex-grow">
        <Image className="w-24 h-24" source={require('../../assets/user.png')} />
      </View>
      <View>
        <Text className="text-center text-[18px] font-bold text-white mb-2">Nhân Tic</Text>
      </View>
      <View className="flex flex-row justify-center mx-4">
        <View>
          <Text className="text-[#9FADBC] mb-1 text-center">nambeo@gmail.com</Text>
          <Text className="text-[#9FADBC] mb-1 text-center">175cm</Text>
          <Text className="text-[#9FADBC] mb-1 text-center">70kg</Text>
        </View>
      </View>
      <View className="mb-7">
        <Nutrition />
      </View>
      {/* <View className="mx-4 mt-2 mb-5">
        <Button title='Thêm chế độ dinh dưỡng' />
      </View> */}
      <View className="bg-[#A1BDD914] mx-4 h-[1px] mb-8"></View>
      <View className="mx-4">
        <View>
          <Text className="mb-5 text-[20px] font-bold text-center text-white" >Bài tập</Text>
        </View>
        <View className="mb-2">
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
        </View>
      </View>
      <View className="mx-4 mb-24">
        <Button onPress={handleShowCreate} title='Thêm bài tập' />
      </View>
      <ModalComp isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
    </ScrollView>
  )
}

export default CustomerExerciseDetailScreen