import React from 'react'
import { Text, View } from 'react-native';
import Modal from "react-native-modal";

const ModalComp = ({ isOpenModal, setOpenModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <Modal
      animationType="slide"
      swipeDirection="down"
      onSwipeComplete={closeModal}
      transparent={true}
      isVisible={isOpenModal}
      style={{ margin: 0, width: '100%', height: '75%' }}
    >
      <View className="bottom-5 top-10 absolute bg-[#1D2125] rounded-[8px] w-full translate-y-5 opacity-100 py-4 px-4">
        <Text>Create Bài tập</Text>

      </View>
    </Modal>
  )
}

export default ModalComp