import React from 'react'
import { Image, Text, View } from 'react-native'
import ProgressBar from '../ProgressBar/ProgressBar'
import { MaterialIcons } from '@expo/vector-icons';
import NutritionItem from './NutritionItem';

const Nutrition = () => {
  return (
    <View>
      <View className="bg-[#A1BDD914] flex flex-row justify-between items-center mx-4 mt-5 px-4 py-2 rounded-[5px] mb-4">
        <View>
          <Text className="mb-2 text-center text-white">Carbs</Text>
          <ProgressBar percent={'75%'} color={'bg-blue-600'} />
          <Text className="mb-2 text-center text-white">122/247g</Text>
        </View>
        <View>
          <Text className="mb-2 text-center text-white">Protein</Text>
          <ProgressBar percent={'50%'} color={'bg-red-600'} />
          <Text className="mb-2 text-center text-white">122/247g</Text>
        </View>
        <View>
          <Text className="mb-2 text-center text-white">Fat</Text>
          <ProgressBar percent={'25%'} color={'bg-green-600'} />
          <Text className="mb-2 text-center text-white">122/247g</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between mx-4">
        <MaterialIcons name="keyboard-arrow-left" size={24} color="#B6C2CF" />
        <Text className="text-[#B6C2CF] text-center">TODAY, 5 OCT</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#B6C2CF" />
      </View>
      <NutritionItem />
      <NutritionItem />
      <NutritionItem />
    </View>
  )
}

export default Nutrition