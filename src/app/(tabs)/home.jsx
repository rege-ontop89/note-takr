import {View, Text, ScrollView, StyleSheet, useWindowDimensions, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Home(){
    const {width, height} = useWindowDimensions();
    const size = width * 0.15

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{paddingHorizontal: 20}}>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.textGreeting}>Good morning, Jamie.</Text>
                        <Text>Ready to capture some knowledge today?</Text>
                    </View>
                    <View style={[styles.circleAvatar,{ height: size, width:size, borderRadius: size / 2}]}>
                        <Text style={styles.profileText}>J</Text>
                    </View>
                </View>

                <Pressable onPress={() => console.log("View Tapped")}>
                    <View style={[styles.newRecoder, {height: height * 0.14, width: width/ 1.05, marginTop: 30}]}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <View style={{backgroundColor: '#EB9690', borderRadius: 20, height: 75, width: 75, marginRight: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Ionicons name="mic-sharp" size={35} color={"white"}/>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <Text style={{color: '#FFF7F3', fontSize: 20, fontWeight: "600"}}>New recording</Text>
                            <Text style={{color: '#FFF7F3'}}>Capture your next lecture</Text>
                        </View>
                    </View>
                       
                    <Pressable onPress={() => console.log('Icon tapped')} style={({pressed})=> [{opacity: pressed ? 0.5 : 1}]}>
                        <Ionicons name="arrow-forward" size={25} color={"#752721"}/>
                    </Pressable>
                </View>
                </Pressable>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, alignItems: 'center', marginBottom: 30}}>
                    <Text style={{fontSize: 25, fontWeight: "500",}}>Recent lectures</Text>
                    <Text style={{opacity: 0.5}}>See all</Text>
                </View>

                <NewRecorderCard title="Introduction to Software Engineering" subtitle="SEN 301" details="Tuesday 48 min"/>
                <NewRecorderCard title="Database Management Systems" subtitle="SEN 305" details="Wednesday 52 min"/>
                <NewRecorderCard title="Software Quality Assurance" subtitle="SEN 304" details="Tuesday 48 min"/>


                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', marginBottom: 30}}>
                    <Text style={{fontSize: 25, fontWeight: "500",}}>Your folders</Text>
                    <Text style={{opacity: 0.5}}>See all</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Pressable style={styles.card} onPress={() => console.log('Card tapped')}>
                        <View style={styles.leftGroup}>
                
                            <View style={styles.iconBox}>
                                <Ionicons name="folder-outline" size={24} color="#333" />
                            </View>

                             <View style={styles.textColumn}>
                                <Text style={styles.titleText} numberOfLines={1}>Software Engineering</Text>
                                <Text style={styles.subtitleText} numberOfLines={1}>2 lectures</Text>
                            </View>

                        </View>

            
                        <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />

                    </Pressable>

                    <Pressable style={styles.card} onPress={() => console.log('Card tapped')}>
                        <View style={styles.leftGroup}>
                
                            <View style={styles.iconBox}>
                                <Ionicons name="folder-outline" size={24} color="#333" />
                            </View>

                            <View style={styles.textColumn}>
                                <Text style={styles.titleText} numberOfLines={1}>Database</Text>
                                <Text style={styles.subtitleText} numberOfLines={1}>1 lecture</Text>
                            </View>

                        </View>

            
                        <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />

                     </Pressable>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}


const NewRecorderCard = ({title, subtitle, details}) => {
    const { width, height } = useWindowDimensions();

    return (
       <View style={[styles.newRecoder, { height: height * 0.14, width: width/1.05, paddingHorizontal: 20, backgroundColor: "#FFFFFF", marginBottom: 20}]}>
    
    <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }}>
        
        <View style={{ backgroundColor: '#DDD3F7', borderRadius: 20, height: 75, width: 75, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name="mic-outline" size={35} color={"black"}/>
        </View>

        <View style={{ flexDirection: 'column', flex: 1, marginRight: 15, height: 75, justifyContent:"space-evenly"}}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: "600"}} numberOfLines={1}>{title}</Text>
            <Text style={{ color: '#7A7A7A', fontSize: 15}}>{subtitle}</Text>
            <Text style={{color: '#7A7A7A'}}>{details}</Text>
        </View>
        
    </View>
       
    <Pressable onPress={() => console.log('Icon tapped')} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
        <Ionicons name="star" size={25} color={"#D29392"} />
    </Pressable>
    
</View>
    );
}

const styles = StyleSheet.create({
   card: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 20,
        width: 220, 
        marginRight: 15, 
        marginBottom: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2, 
    },

    column: {
        flexDirection: 'column'
    },

    circleAvatar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D8CBB9'
    },

    iconBox: {
        backgroundColor: '#F9DEDC',
        width: 50,
        height: 50,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12, 
    },


    leftGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    newRecoder: {
        backgroundColor:'#E87970',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 30
    },

    profileText: {
        fontSize: 20, 
        fontWeight: '600',
        color: '#99897A'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    }, 

    subtitleText: {
        color: '#999999',
        fontSize: 13,
    },

    textColumn: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 10,
    },

    textGreeting: {
        fontSize: 25,
        fontWeight: '700',
    },

    titleText: {
        color: '#333333', 
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
});