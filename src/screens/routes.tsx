import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from 'common/navigation/navigation'

export type HomeSceenNavigationProps = StackNavigationProp<
  StackParamList,
  'Home'
>

export type DirectScreenRouteProp = RouteProp<StackParamList, 'Direct'>
