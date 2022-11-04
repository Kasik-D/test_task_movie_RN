/* eslint-disable unicorn/filename-case */
import { createNavigationContainerRef } from '@react-navigation/core';

import { AllScreenParamList, RootStackParamList } from '../types/navigations';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: AllScreenParamList) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}
