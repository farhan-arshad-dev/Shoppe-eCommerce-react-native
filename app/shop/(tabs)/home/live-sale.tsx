import { useCommonStyles } from "@/src/styles/commonStyles";
import { makeStyles } from "@/src/theme/makeStyles";
import { Text, View } from "react-native";

export default function MenuScreen() {

    const commonStyles = useCommonStyles();
    const styles = useStyles();

    return (
        <View style={[commonStyles.screenContainer, commonStyles.centerContent]}>
            <View>
                <Text>Live Sale</Text>
            </View>
        </View>
    )
}

const useStyles = makeStyles((theme) => ({

}));