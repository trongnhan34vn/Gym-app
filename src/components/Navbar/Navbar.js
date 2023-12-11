import React from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Exercise from '../Exercise/Exercise';
import Nutrition from '../Nutrition/Nutrition';

const renderScene = SceneMap({
  exercise: Exercise,
  nutrition: Nutrition,
});

const Navbar = () => {
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  const [routes] = React.useState([
    { key: 'exercise', title: 'Chế độ luyện tập' },
    { key: 'nutrition', title: 'Chế độ dinh dưỡng' },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => <TabBar {...props} style={{ backgroundColor: '#A1BDD914' }} indicatorStyle={{backgroundColor: '#579DFF'}}  />}
    />
  )
}

export default Navbar