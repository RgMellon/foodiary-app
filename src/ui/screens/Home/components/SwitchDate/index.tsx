import { View } from 'react-native';
import { styles } from './styles';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { theme } from '@ui/styles/theme';

export function SwitchDate() {
    const currentDate = new Date();

    return (
        <View style={styles.container}>
            <Button size="icon" variant="ghost">
                <ChevronLeft />
            </Button>
            <AppText weight="semiBold" color={theme.colors.gray[700]}>
                {formatDate(currentDate)}
            </AppText>
            <Button size="icon" variant="ghost">
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
    }).format(date).toUpperCase();

    return `${now ? `HOJE, ${formatDate}` : formatDate }`;
}
