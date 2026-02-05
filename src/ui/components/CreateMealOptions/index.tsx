import { Pressable, View } from 'react-native';
import { Camera, LucideIcon, Mic } from 'lucide-react-native';
import { style } from './styles';
import { AppText } from '../AppText';

export function CreateMealOptions() {
    return (
        <View style={style.container}>
            <Option icon={Mic} text="Audio" />

            <Option icon={Camera} text="Foto" />
        </View>
    );
}

interface IOption {
    icon: LucideIcon;
    text: string;
}

function Option({ icon: Icon, text }: IOption) {
    return (
        <View style={style.buttonWrapper}>
            <Pressable style={style.button}>
                <View style={style.icon}>
                    <Icon />
                </View>

                <AppText> {text} </AppText>
            </Pressable>
        </View>
    );
}
