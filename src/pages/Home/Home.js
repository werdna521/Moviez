import React from 'react';
import Headline from '../../components/Headline/Headline';
import Content from '../../components/Content/Content';
import Line from '../../components/Line/Line';
import FeatureList from '../../components/FeatureList/FeatureList';

const Home = (props) => {

    return (
        <Content>
            <audio loop controls autoPlay>
                <source src={require('../../assets/audio/goodmorning.mp3')} type="audio/mpeg" />
            </audio>
            <Headline history={props.history} />
            <Line />
            <FeatureList />
        </Content>
    );
};

export default Home;