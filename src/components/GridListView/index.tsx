import { useCommonStyles } from '@/src/styles/commonStyles';
import React from 'react';
import { View, FlatList, StyleProp, ViewStyle } from 'react-native';
import { useStyles } from './styles';

// Simple Type Definitions
interface RowData<T> {
    type: 'row' | 'banner';
    items: T[];
}

interface GridListProps<T> {
    data: T[];
    renderItem: (item: T, index: number) => React.ReactElement | null;
    renderBanner: (item: T, index: number) => React.ReactElement | null;
    isBanner: (item: T, index: number) => boolean;
    keyExtractor: (item: T, index: number) => string;
    numColumns?: number;
    itemSpacing?: number;
    scrollEnabled?: boolean,
    contentContainerStyle?: StyleProp<ViewStyle>;
}

export default function GridListView<T>({
    data,
    renderItem,
    renderBanner,
    isBanner,
    keyExtractor,
    numColumns = 1,
    itemSpacing = 0,
    scrollEnabled = true,
    contentContainerStyle,
}: GridListProps<T>): React.ReactElement {

    const commonStyles = useCommonStyles();
    const styles = useStyles();

    // Transform data into rows
    const flattenedData = React.useMemo<RowData<T>[]>(() => {
        const rows: RowData<T>[] = [];
        const items = data || [];

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            if (isBanner(item, i)) {
                // Banner gets its own row
                rows.push({ type: 'banner', items: [item] });
            } else {
                // Start collecting items for a regular row
                const rowItems: T[] = [item];

                // Keep adding items until we reach numColumns OR hit a banner
                while (rowItems.length < numColumns && i + 1 < items.length) {
                    const nextItem = items[i + 1];
                    if (isBanner(nextItem, i + 1)) {
                        break; // Stop before banner
                    }
                    rowItems.push(nextItem);
                    i++; // Increment to skip already-processed items
                }

                rows.push({ type: 'row', items: rowItems });
            }
        }

        return rows;
    }, [data, numColumns, isBanner]);

    const internalRenderItem = ({ item: row, index }: { item: RowData<T>; index: number }) => {
        const isBannerRow = row.type === 'banner';

        if (isBannerRow) {
            const item = row.items[0];
            const originalIndex = data.indexOf(item);
            return (
                <View style={styles.fullWidthWrapper}>
                    {renderBanner(item, originalIndex)}
                </View>
            );
        }

        return (
            <View style={[styles.row, { gap: itemSpacing }]}>
                {row.items.map((item, colIndex) => {
                    const originalIndex = data.indexOf(item);
                    return (
                        <View
                            key={keyExtractor(item, originalIndex)}
                            style={[styles.itemWrapper, { padding: itemSpacing / 2 }]}
                        >
                            {renderItem(item, originalIndex)}
                        </View>
                    );
                })}
                {/* Fill empty spaces to maintain alignment */}
                {Array.from({ length: numColumns - row.items.length }).map((_, i) => (
                    <View key={`empty-${i}`} style={styles.itemWrapper} />
                ))}
            </View>
        );
    };

    const internalKeyExtractor = (item: RowData<T>, index: number): string => {
        if (item.type === 'banner') {
            const originalIndex = data.indexOf(item.items[0]);
            return `banner-${keyExtractor(item.items[0], originalIndex)}`;
        }
        return `row-${item.items.map((i) => {
            const originalIndex = data.indexOf(i);
            return keyExtractor(i, originalIndex);
        }).join('-')}`;
    };

    return (
        <View style={commonStyles.fullFlex}>
            <FlatList
                data={flattenedData}
                renderItem={internalRenderItem}
                keyExtractor={internalKeyExtractor}
                contentContainerStyle={contentContainerStyle}
                showsVerticalScrollIndicator={false}
                scrollEnabled={scrollEnabled}
            />
        </View>
    );
}
