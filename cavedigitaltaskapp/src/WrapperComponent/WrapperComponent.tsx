import React, {useRef} from 'react';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

const WrapperComponent = ({children, containerStyle}: any) => {
  const scrollRef = useRef(null);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      // keyboardVerticalOffset={70}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default WrapperComponent;
