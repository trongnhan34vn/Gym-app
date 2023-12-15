import React from 'react'
import { Keyboard, Pressable } from 'react-native'
import { Image, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
      navigation.navigate('PT')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
      <View className="bg-[#1D2125] h-screen">
        <View className="flex flex-row justify-center mt-24 mb-10">
          <Image className="w-32 h-32" source={require('../../assets/logo.png')} />
        </View>
        <View className="mb-10">
          <Text className="text-white text-[28px] font-extrabold text-center">Đăng nhập</Text>
        </View>
        <View className="mx-5 mb-5">
          <TextInput className="text-white text-[18px] px-4 py-4 bg-[#A1BDD914] rounded-[5px]" />
        </View>
        <View className="mx-5 mb-12">
          <TextInput className="text-white text-[18px] px-4 py-4 bg-[#A1BDD914] rounded-[5px]" />
        </View>
        <View className="mx-5">
            <Pressable onPress={handleSubmit}  className="bg-[#579DFF] rounded-[5px]">
              <Text className="py-4 text-center text-[18px] text-white">Tiếp tục</Text>
            </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen