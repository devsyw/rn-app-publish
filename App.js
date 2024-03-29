import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/** Effect Test */
import AnimationRoute from './component/effect/animation/animationRoute';
import SlideTest from './component/effect/animation/slide';
import IconDrag from './component/effect/animation/iconDragMove';
import FadeInOut from './component/effect/animation/fadeInOut';
import OpenBtnList from './component/effect/animation/openBtnList';

/** 3D Test */
import ThreePrac from './component/effect/threejs/prac';
import WebViewTest from './component/effect/threejs/webviewTest';

/** SVG Test */
import { SvgTest } from './component/effect/svg/SvgTest';

/** WorldMap(월드맵) publish */
import WorldMap from './component/screen/map/WorldMap';

/** MyItem(내 아이템/명예템) publish */
import { MyItem } from './component/screen/item/MyItem';

/** SignIn(회원가입) publish */
import SignInit from './component/screen/sign/SignInit'
import SignInPms from './component/screen/sign/SignInPms'
import SignInCrt from './component/screen/sign/SignInCrt'
import SignInName from './component/screen/sign/SignInName'
import SignInBirthday from './component/screen/sign/SignInBirthday'
import SignInCountry from './component/screen/sign/SignInCountry'
import SignInPhoneNumber from './component/screen/sign/SignInPhoneNumber'
import SignInVerifyCode from './component/screen/sign/SignInVerifyCode'
import SignInDone from './component/screen/sign/SignInDone'
import SignInFriendsList from './component/screen/sign/SignInFriendsList'
import SignInInviteNewFriends from './component/screen/sign/SignInInviteNewFriends'
import SignComplete from './component/screen/sign/SignComplete';

/** MyProfile(내 프로필) publish */
import { MyProfile } from './component/screen/myprofile/MyProfile';
import { MyProfileCrtChange } from './component/screen/myprofile/MyProfileCrtChange';

/** MyCollection(내 아이템 보관함) publish */
import { MyCollection } from './component/screen/mycollection/MyCollection';
import { MyCollectionItemInfo } from './component/screen/mycollection/MyCollectionItemInfo';

/** Group(그룹) publish */
import { MyGroup } from './component/screen/group/MyGroup';
import GroupCreateInv from './component/screen/group/GroupCreateInv';
import GroupCreateSet from './component/screen/group/GroupCreateSet';
import GroupCreateName from './component/screen/group/GroupCreateName';
import GroupCreateTown from './component/screen/group/GroupCreateTown';
import GroupCreateTownName from './component/screen/group/GroupCreateTownName';
import GroupCreateTownMarker from './component/screen/group/GroupCreateTownMarker';
import GroupCreateDone from './component/screen/group/GroupCreateDone';
import { GroupTownSelect } from './component/screen/group/GroupTownSelect';

/** NoticeBoard(공지사항) publish */
import { NoticeBoard } from './component/screen/notice/NoticeBoard';
import { NoticeBoardDetail } from './component/screen/notice/NoticeBoardDetail';

/** QuizTown(퀴즈타운) publish */
import { QuizMain } from './component/screen/quiztown/QuizMain';
import { QuizGetItem } from './component/screen/quiztown/QuizGetItem';

export default function App() {
    //StackNavigator
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={"GroupTownSelect"}
                screenOptions={{
                    headerShown: false, //top 영역을 보이게 할것인가?
                    headerTintColor:"white",
                    headerBackTitleVisible: false
                }
            }>
                {/** SignIn publish */}
                <Stack.Screen name="SignInit" component={SignInit} />
                <Stack.Screen name="SignInPms" component={SignInPms} />
                <Stack.Screen name="SignInCrt" component={SignInCrt} />
                <Stack.Screen name="SignInName" component={SignInName} />
                <Stack.Screen name="SignInBirthday" component={SignInBirthday} />
                <Stack.Screen name="SignInCountry" component={SignInCountry} />
                <Stack.Screen name="SignInPhoneNumber" component={SignInPhoneNumber} />
                <Stack.Screen name="SignInVerifyCode" component={SignInVerifyCode} />
                <Stack.Screen name="SignInDone" component={SignInDone} />
                <Stack.Screen name="SignInFriendsList" component={SignInFriendsList} />
                <Stack.Screen name="SignInInviteNewFriends" component={SignInInviteNewFriends} />

                {/** Map publish(12.13 개발) */}
                <Stack.Screen name="WorldMap" component={WorldMap} />

                {/** MyItem publish(12.15 개발) */}
                <Stack.Screen name="MyItem" component={MyItem} />

                {/** NoticeBoard publish(12.16 개발) */}
                <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
                <Stack.Screen name="NoticeBoardDetail" component={NoticeBoardDetail} />

                {/** MyGroup publish(12.10 개발, 12.15 수정) */}
                <Stack.Screen name="MyGroup" component={MyGroup} />
                <Stack.Screen name="GroupCreateInv" component={GroupCreateInv} />
                <Stack.Screen name="GroupCreateSet" component={GroupCreateSet} />
                <Stack.Screen name="GroupCreateName" component={GroupCreateName} />
                <Stack.Screen name="GroupCreateTown" component={GroupCreateTown} />
                <Stack.Screen name="GroupCreateTownName" component={GroupCreateTownName} />
                <Stack.Screen name="GroupCreateTownMarker" component={GroupCreateTownMarker} />
                <Stack.Screen name="GroupCreateDone" component={GroupCreateDone} />
                <Stack.Screen name="GroupTownSelect" component={GroupTownSelect} />

                {/** Quiz */}
                <Stack.Screen name="QuizMain" component={QuizMain} />
                <Stack.Screen name="QuizGetItem" component={QuizGetItem} />

                {/** MyProfile publish(12.15 기준, 미사용중) */}
                <Stack.Screen name="MyProfile" component={MyProfile} />
                <Stack.Screen name="MyProfileCrtChange" component={MyProfileCrtChange} />

                {/** MyCollection publish(12.15 기준, 미사용중) */}
                <Stack.Screen name="MyCollection" component={MyCollection} />
                <Stack.Screen name="MyCollectionItemInfo" component={MyCollectionItemInfo} />

                {/** Animation samples */}
                <Stack.Screen name="AnimationRoute" component={AnimationRoute}/>
                <Stack.Screen name="SlideTest" component={SlideTest}/>
                <Stack.Screen name="IconDrag" component={IconDrag}/>
                <Stack.Screen name="FadeInOut" component={FadeInOut}/>
                <Stack.Screen name="OpenBtnList" component={OpenBtnList}/>

                {/** 3D render Test */}
                <Stack.Screen name="ThreePrac" component={ThreePrac}/>
                <Stack.Screen name="WebViewTest" component={WebViewTest}/>

                {/** SVG Test */}
                <Stack.Screen name="SvgTest" component={SvgTest}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
