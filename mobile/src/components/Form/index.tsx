import React from 'react';
import { View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { ArrowLeft } from 'phosphor-react-native';

import { FeedbackType } from '../../components/Widget'

import { theme } from '../../theme';
import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes'

interface Props {
    feedbackType: FeedbackType;
}

export function form({feedbackType}: Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <ArrowLeft
                    size={24}
                    weight='bold'
                    color={theme.colors.text_secondary}
                />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Image
                    source={feedbackTypeInfo.image}
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}
                </Text>

            </View>
        </View>

    </View>
  );
}