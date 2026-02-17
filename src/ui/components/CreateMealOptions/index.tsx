import { Pressable, View } from 'react-native';
import { Camera, LucideIcon, Mic } from 'lucide-react-native';
import { style } from './styles';
import { AppText } from '../AppText';
import { useState } from 'react';
import { AudioModal } from '../AudioModal';

export function CreateMealOptions() {
    const [currentVisibleModal, setCurrentVisibleModal] = useState<
        null | 'photo' | 'audio'
    >('photo');

    function handleOpenModal(type: 'audio' | 'photo') {
        setCurrentVisibleModal(type);
    }

    function handleCloseModal() {
        setCurrentVisibleModal(null);
    }

    return (
        <View style={style.container}>
            <AudioModal
                onClose={handleCloseModal}
                visible={currentVisibleModal === 'audio'}
            />
            <Option
                icon={Mic}
                text="Audio"
                onPress={() => handleOpenModal('audio')}
            />

            <Option
                icon={Camera}
                text="Foto"
                onPress={() => handleOpenModal('photo')}
            />
        </View>
    );
}

interface IOption {
    icon: LucideIcon;
    text: string;
    onPress: () => void;
}

function Option({ icon: Icon, text, onPress }: IOption) {
    return (
        <View style={style.buttonWrapper}>
            <Pressable style={style.button} onPress={onPress}>
                <View style={style.icon}>
                    <Icon />
                </View>

                <AppText> {text} </AppText>
            </Pressable>
        </View>
    );
}
