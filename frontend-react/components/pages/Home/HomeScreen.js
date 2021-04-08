import React from 'react';
import {View,StyleSheet,Text,ActivityIndicator,FlatList,Dimensions,Image,TouchableWithoutFeedback,Linking} from 'react-native';
import moment from 'moment';

import {getNews} from './news';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const defaultImg =
    'https://image.freepik.com/free-vector/hospital-corridor-interior-medical-clinic-hall_107791-2177.jpg';

export default class HomeScreen extends React.Component{
    state = {
        articles: [],
        loading: true,
    }

    fetchNews() {
        getNews()
            .then(articles => this.setState({ articles, loading: false }))
            .catch(() => this.setState({ loading: false }));
    }

    handleRefresh() {
        this.setState(
            {
                loading: true
            },
            () => this.fetchNews()
        );
    }

    componentDidMount() {
        this.fetchNews()
    }

    render(){
        if (this.state.loading){
            return(
                <View style={{flex: 1,alignContent: 'centre',justifyContent: 'center',backgroundColor: '#333'}}>
                    <ActivityIndicator size="large" color="#fff"/>
                </View>
            );
        }
        else{
            return(
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{fontSize: 35,color: '#fff'}}>Top Headlines</Text>
                    </View>
                    <View style={styles.news}>
                        <FlatList
                        data = {this.state.articles}
                        renderItem = {({item}) => {
                            return(
                                <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.url)}>
                                    <View style={{width: width-50,height: 180,marginBottom: 15,borderRadius: 15}}>
                                        <Image source={{uri: item.urlToImage || defaultImg}} style = {[StyleSheet.absoluteFill,{borderRadius: 15}]}/>
                                        <View style={styles.gradient}>
                                            <Text style={{position: 'absolute',bottom: 0,color: '#fff',fontSize: 20,padding: 5}}>
                                                {item.description || 'Read More...'}
                                            </Text>
                                            <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
                                                <Text style={{margin: 5,fontStyle: 'italic',color: '#b2bec3',fontSize: 10}}>
                                                    {item.title.toUpperCase()}
                                                </Text>
                                                <Text style={{margin: 5,fontStyle: 'italic',color: '#b2bec3',fontSize: 10}}>
                                                    {moment(item.publishedAt || moment.now()).fromNow()}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        }}
                        keyExtractor = {item => item.url}
                        refreshing = {this.state.loading}
                        onRefresh = {this.handleRefresh.bind(this)}
                        showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333'
    },
    header: {
        padding: 30
    },
    news: {
        flex: 1,
        alignSelf: 'center'
    },
    gradient: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 15
    }
});


