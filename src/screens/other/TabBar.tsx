// import {SceneMap, TabView} from 'react-native-tab-view';
// import * as React from 'react';
// import {View, useWindowDimensions} from 'react-native';
// import {EIGHTEEN, TouchableOpacityView} from '../../common';
// import {AppText, BOLD} from '../../common';
// // import RecordingScreen from '../RecordingScreen';
// // import EmployeeScreen from '../EmployeeScreen';
// import { authStyles } from '../../common/authStyles';
// const renderScene = SceneMap({
//   first: RecordingScreen,
//   second: EmployeeScreen,
// });

// const CustomTabBar = props => {
//   const {navigationState} = props;

//   return (
//     <View style={authStyles.maintabbarView}>
//       {navigationState.routes.map((route, index) => {
//         const isFocused = navigationState.index === index;

//         return (
//           <TouchableOpacityView
//             key={index}
//             style={[
//               authStyles.tabbarView,
//               {
//                 backgroundColor: isFocused ? '#143F6B' : '#D4E7FB',
//                 elevation: isFocused ? 1 : 0,
//               },
//             ]}
//             onPress={() => props.jumpTo(route.key)}>
//             <AppText
//               weight={BOLD}
//               type={EIGHTEEN}
//               style={{color: isFocused ? '#FFFFFF' : '#143F6B'}}>
//               {route.title}
//             </AppText>
//           </TouchableOpacityView>
//         );
//       })}
//     </View>
//   );
// };

// const TabBarComponent = () => {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'Recording'},
//     {key: 'second', title: 'Employee'},
//   ]);

//   return (
//     <>
//       <TabView
//         navigationState={{index, routes}}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={{width: layout.width}}
//         renderTabBar={props => <CustomTabBar {...props} />}
//       />
//     </>
//   );
// };
// export default TabBarComponent;
