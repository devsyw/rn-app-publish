import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale, moderateScale, verticalScale} from '../scaling';
import { Fontisto } from '@expo/vector-icons';
import { 
    SignUpMainWord, 
    SignUpNowPage, 
    SignUpTextInput, 
    SignUpStatusBar, 
} from './KogSignUpComp';

export default function SignInName({navigation, route, options, back}){

    return (
        <SafeAreaView style={styles.container}>
            {/** 상단 스테이터스 바 */}
            <SignUpStatusBar color={'#FFFFEF'}/>

            {/** 위 영역(1/2) */}
            <View style={styles.topArea}>
                {/** 상단 현재 페이지 영역 */}
                <SignUpNowPage pageNum={1}/>
                
                {/** 소개 텍스트 영역 */}
                <SignUpMainWord word={`반가워요!\n이름을 적어보세요!`}/>
                
                <View style={styles.topArea_bottom}>
                    {/** 이름 InputBox 영역 */}
                    <SignUpTextInput placeholder={'이름'} width={280} height={50} borderRadius={30}
                        /** 주석 해제 후 사용 */
                        // onChangeText={onChangeNumber}
                        // value={number}
                    />
                </View>
            </View>

            {/** 아래 영역(1/2) */}
            <View style={styles.bottomArea}>
                {/** 다음 페이지 이동 버튼 */}
                <TouchableOpacity
                    onPress={() => navigation.push('SignInBirthday')} //테스트용
                    style={[styles.nextPageBtn, {backgroundColor : '#FA517A'}]}
                >
                    <Fontisto name="arrow-right" size={moderateScale(20)} color={'#FFF'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FFFFEF',
    },
    topArea : {
        flex : 1,
        justifyContent : 'center',
        marginTop : moderateScale(15),
    },
    bottomArea : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'flex-end',
    },
    topArea_bottom : {
        flex : 0.5,
        justifyContent : 'center',
        alignItems : 'center',
    },
    nextPageBtn : {
        width : moderateScale(80, 0.3),
        height : moderateScale(55, 0.2),
        backgroundColor : '#FFF',
        borderRadius : moderateScale(60),
        margin : moderateScale(15),
        justifyContent : 'center',
        alignItems : 'center',
    },
})