import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { View } from 'react-native';
import { useCommonStyles } from '@/src/styles/commonStyles';
import { useEffect } from 'react';

export default function VideoPlayer({
    videoSource,
    loop = true,
    showControlles = false,
    playWhenReady = true,
    allowsFullscreen = false,
    allowsPictureInPicture = false,
    onPlayStateChange,
}: {
    videoSource: string,
    loop?: boolean,
    showControlles?: boolean,
    playWhenReady?: boolean,
    allowsFullscreen?: boolean,
    allowsPictureInPicture?: boolean,
    onPlayStateChange?: (isPlaying: boolean) => void;
}) {

    const commonStyles = useCommonStyles();

    const player = useVideoPlayer(videoSource, player => {
        player.loop = loop;
        if (playWhenReady) {
            player.play();
        }
    });

    // Listen for playback state changes
    const { isPlaying } = useEvent(player, 'playingChange', {
        isPlaying: player.playing,
    });
    useEffect(() => {
        onPlayStateChange?.(isPlaying);
    }, [isPlaying]);

    return (
        <View style={[commonStyles.backgroundContainer, commonStyles.fillParent]}>
            <VideoView
                style={commonStyles.fillParent}
                player={player}
                allowsFullscreen={allowsFullscreen}
                allowsPictureInPicture={allowsPictureInPicture}
                nativeControls={showControlles} />
        </View>
    );
}
