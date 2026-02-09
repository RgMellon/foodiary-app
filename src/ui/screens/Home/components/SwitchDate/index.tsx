import { View } from 'react-native';
import { styles } from './styles';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { theme } from '@ui/styles/theme';

interface ISwitchDateProps {
    date: Date;
    onDateChange: (date: Date) => void;
}

export function SwitchDate({ date, onDateChange }: ISwitchDateProps) {
    const handlePreviousDay = () => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() - 1);
        onDateChange(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        onDateChange(newDate);
    };

    return (
        <View style={styles.container}>
            <Button size="icon" variant="ghost" onPress={handlePreviousDay}>
                <ChevronLeft />
            </Button>
            <AppText weight="semiBold" color={theme.colors.gray[700]}>
                {formatDate(date)}
            </AppText>
            <Button size="icon" variant="ghost" onPress={handleNextDay}>
                <ChevronRight />
            </Button>
        </View>
    );
}

function formatDate(date: Date) {
    const now = date.toDateString() === new Date().toDateString();

    const formatDate = Intl.DateTimeFormat('pt-br', {
        weekday: now ? undefined : 'long',
        day: '2-digit',
        month: 'short',
    })
        .format(date)
        .toUpperCase();

    return `${now ? `HOJE, ${formatDate}` : formatDate}`;
}
