import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.textGreeting}>Good morning, Jamie.</Text>
                        <Text>Ready to capture some knowledge today?</Text>
                    </View>
                    <View style={styles.circleAvatar}>
                        <Text style={styles.profileText}>J</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   
    column: {
        flexDirection: 'column'
    },

    circleAvatar: {
        height: 50,
        width:50,
        borderRadius: 25, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 30, 
        marginRight: 30
    }, 

    profileText: {
        fontSize: 20, 
        fontWeight: '600'
    },

    textGreeting: {
        fontSize: 25,
        fontWeight: '700',
    },
});