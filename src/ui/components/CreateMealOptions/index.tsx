import { Platform, Pressable, View } from 'react-native';
import { Camera, LucideIcon, Mic } from 'lucide-react-native';
import { style } from './styles';
import { AppText } from '../AppText';
import { useState } from 'react';
import { AudioModal } from '../AudioModal';
import { PictureModal } from '../PictureModal';

interface ICreateMealOptionsProps {
    disabled?: boolean;
    onCreate?: () => void;
}

export function CreateMealOptions({
    disabled = false,
    onCreate,
}: ICreateMealOptionsProps) {
    const [currentVisibleModal, setCurrentVisibleModal] = useState<
        null | 'photo' | 'audio'
    >(null);

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
                onCreate={onCreate}
                visible={currentVisibleModal === 'audio'}
            />

            <PictureModal
                visible={currentVisibleModal === 'photo'}
                onClose={handleCloseModal}
                onCreate={onCreate}
            />

            <Option
                disabled={disabled}
                icon={Mic}
                text="Audio"
                onPress={() => handleOpenModal('audio')}
            />

            <Option
                disabled={disabled}
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
    disabled?: boolean;
}

function Option({ icon: Icon, text, onPress, disabled }: IOption) {
    return (
        <View style={style.buttonWrapper}>
            <Pressable
                disabled={disabled}
                style={({ pressed }) => [
                    style.button,
                    (disabled || (pressed && Platform.OS === 'ios')) && {
                        opacity: 0.5,
                    },
                ]}
                onPress={onPress}
            >
                <View style={style.icon}>
                    <Icon />
                </View>

                <AppText> {text} </AppText>
            </Pressable>
        </View>
    );
}
