import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Line from '../components/Info/Line';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserInfoScreen = () => {
  return (
    <View className="bg-[#1D2125] h-screen">
      <Text className="text-center text-[24px] text-[#fff] mb-5 font-bold py-4">Hồ sơ</Text>
      <View className="bg-[#A1BDD914] mb-10">
        <Line icon={<FontAwesome5 name="user-circle" size={26} color="white" />} field={'Tài khoản'} value={'nambeo@gmail.com'} />
        <Line icon={<Entypo name="tumblr" size={26} color="white" />} field={'Tên'} value={'Nam'} />
        <Line icon={<FontAwesome name="birthday-cake" size={26} color="white" />} field={'Tuổi'} value={'20'} />
        <Line icon={<FontAwesome name="transgender" size={26} color="white" />} field={'Giới tính'} value={'Nam'} />
        <Line icon={<MaterialCommunityIcons name="human-male-height" size={26} color="white" />} field={'Chiều cao'} value={'1m50'} />
        <Line icon={<MaterialCommunityIcons name="weight" size={26} color="white" />} field={'Cân nặng'} value={'50kg'} />
      </View>
      <View>
        <View className="self-center px-8 py-4 bg-red-500 rounded-[5px]">
          <Text className="text-white font-bold text-[18px]">
            Đăng xuất
          </Text>
        </View>
      </View>
    </View>
  )
}

export default UserInfoScreen