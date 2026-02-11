import { View } from 'react-native';
import { styles } from './styles';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { theme } from '@ui/styles/theme';
import { useHome } from '@app/context/HomeContext/useHome';

export function SwitchDate() {
    const { date, nextDay, prevDay, isFetching } = useHome();

    return (
        <View style={[styles.container, { opacity: isFetching ? 0.5 : 1 }]}>
            <Button
                disabled={isFetching}
                size="icon"
                variant="ghost"
                onPress={prevDay}
            >
                <ChevronLeft />
            </Button>
            <AppText weight="semiBold" color={theme.colors.gray[700]}>
                {formatDate(date)}
            </AppText>
            <Button
                disabled={isFetching}
                size="icon"
                variant="ghost"
                onPress={nextDay}
            >
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
