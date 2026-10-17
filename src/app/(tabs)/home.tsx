import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { mockLectures, folders } from '../../data/mockData';
import { Colors } from '../../theme/colors';

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} edges={[]}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}>

            
                <View style={styles.headerRow}>
                    <View style={styles.textColumn}>
                        <Text style={styles.textGreeting}>Good morning, Jamie.</Text>
                        <Text style={styles.subtitleText}>Ready to capture some knowledge today?</Text>
                    </View>
                    <View style={styles.circleAvatar}>
                        <Text style={styles.profileText}>J</Text>
                    </View>
                </View>

                
                <Pressable onPress={() => console.log("New Recording Tapped")}>
                    <View style={styles.primaryActionCard}>
                        <View style={styles.leftGroup}>
                            <View style={styles.primaryIconBox}>
                                <Ionicons name="mic-outline" size={32} color={Colors.white} />
                            </View>

                            <View style={styles.textColumn}>
                                <Text style={styles.primaryTitleText} numberOfLines={1}>New recording</Text>
                                <Text style={styles.primarySubtitleText} numberOfLines={1}>Capture your next lecture</Text>
                            </View>
                        </View>
                           
                        <Pressable onPress={() => console.log('Arrow tapped')} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                            <Ionicons name="arrow-forward" size={24} color={Colors.white} />
                        </Pressable>
                    </View>
                </Pressable>

    
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent lectures</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>

                {mockLectures.map((lecture) => (
                    <NewRecorderCard 
                        key={lecture.id} 
                        title={lecture.title}
                        course={lecture.course}
                        date={lecture.date}
                        duration={lecture.duration}
                        isFavorite={lecture.isFavorite}
                    />
                ))}

        
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Your folders</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {folders.map((folder) => (
                        <FolderCard
                            key={folder.id}
                            name={folder.name}
                            lectureCount={folder.lectureCount}
                        />
                    ))}
                </ScrollView>
                
            </ScrollView>
        </SafeAreaView>
    );
}


const FolderCard = ({ name, lectureCount }) => {
    return (
        <Pressable style={styles.folderCard} onPress={() => console.log('Folder tapped')}>
            <View style={styles.leftGroup}>
                <View style={styles.folderIconBox}>
                    <Ionicons name="folder-outline" size={24} color={Colors.text} />
                </View>

                <View style={styles.textColumn}>
                    <Text style={styles.titleText} numberOfLines={1}>{name}</Text>
                    <Text style={styles.subtitleText} numberOfLines={1}>{lectureCount} lectures</Text>
                </View>
            </View>
                
            <Ionicons name="chevron-forward" size={24} color={Colors.textMuted} />
        </Pressable>
    );
} 

const NewRecorderCard = ({ title, course, date, duration, isFavorite }) => {
    return (
        <View style={styles.recentLectureCard}>
            <View style={styles.leftGroup}>
                <View style={styles.secondaryIconBox}>
                    <Ionicons name="mic-outline" size={32} color={Colors.black} />
                </View>

                <View style={styles.textColumn}>
                    <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                    <Text style={styles.subtitleText} numberOfLines={1}>{course}</Text>
                    <Text style={styles.subtitleText}>{date} • {duration}</Text>
                </View>
            </View>
               
            <Pressable onPress={() => console.log('Star tapped')} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                <Ionicons 
                    name={isFavorite ? "star" : "star-outline"} 
                    size={24} 
                    color={Colors.coral} 
                />
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
    },
    leftGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, 
    },
    textColumn: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 15,
        justifyContent: 'center',
        gap: 6
    },
    textGreeting: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.text,
        marginBottom: 4,
    },
    sectionTitle: {
        fontSize: 22, 
        fontWeight: "600",
        color: Colors.text,
    },
    seeAllText: {
        color: Colors.textMuted,
        fontWeight: '500',
    },
    titleText: {
        color: Colors.text, 
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    subtitleText: {
        color: Colors.textSecondary,
        fontSize: 14,
    },
    primaryTitleText: {
        color: Colors.white, 
        fontSize: 18, 
        fontWeight: "600",
        marginBottom: 2,
    },
    primarySubtitleText: {
        color: Colors.white,
        fontSize: 14,
        opacity: 0.9,
    },
    circleAvatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Colors.beige,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileText: {
        fontSize: 20, 
        fontWeight: '600',
        color: Colors.text,
    },
    primaryIconBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20, 
        height: 60, 
        width: 60, 
        marginRight: 15, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    secondaryIconBox: {
        backgroundColor: Colors.lavender, 
        borderRadius: 20, 
        height: 60, 
        width: 60, 
        marginRight: 15, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    folderIconBox: {
        backgroundColor: Colors.coralLight,
        width: 50,
        height: 50,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12, 
    },
    primaryActionCard: {
        backgroundColor: Colors.coral,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 24,
        width: '100%',
        marginBottom: 20,
    },
    recentLectureCard: {
        backgroundColor: Colors.surface,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        paddingVertical: 30,
        borderRadius: 24,
        width: '100%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: Colors.border
    },
    folderCard: {
        backgroundColor: Colors.surface,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 20,
        width: 220, 
        marginRight: 15, 
        borderWidth: 1,
        borderColor: Colors.border
    },
});