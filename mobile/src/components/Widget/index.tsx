import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import { styles } from './styles';

export function Widget() {
  return (
    <>
        <TouchableOpacity>
            <ChatTeardropDots
                size={24}
            />
        </TouchableOpacity>
    </>
  );
}