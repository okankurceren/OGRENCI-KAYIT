import React from 'react';
import { Scene, Router, Stack, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentList from './components/StudentList';
import StudentCreate from './components/StudentCreate';
import StudentUpdate from './components/StudentUpdate';

const RouterComponent = () => {
  return (
  <Router>
    <Stack key="root">
        <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" />
        <Scene
        onRight={() => Actions.studentCreate()}
        type={ActionConst.RESET}
        rightTitle="Yeni"
        key="studentList"
        component={StudentList}
        title="Öğrenci Liste"
        />
        <Scene
        key="studentCreate"
        title="Öğrenci Kaydı"
        component={StudentCreate}
        />
        <Scene
        key="studentUpdate"
        title="Öğrenci Güncelle"
        component={StudentUpdate}
        />
    </Stack>

  </Router>
    );
};

export default RouterComponent;
