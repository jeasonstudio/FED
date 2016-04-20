//首页分类模块

'use strict';

import React , {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import Loading from './Loading';
import ListItemWrapper from './ListItemWrapper';


//cat 数据
var MockData = [{
  id: 1,
  img : 'http://gtms02.alicdn.com/tps/i2/TB1hbkyHpXXXXboXXXXcy0wIpXX-70-70.png',
  text : '手机圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  id: 2,
  img : 'http://gtms01.alicdn.com/tps/i1/TB13zsxHpXXXXX8XpXXcy0wIpXX-70-70.png',
  text : '发现好玩',
  link : 'http://3c.m.tmall.com'                      
},{
  id: 3,
  img : 'http://gtms01.alicdn.com/tps/i1/TB1wpUtHpXXXXb1XVXXcy0wIpXX-70-70.png',
  text : '我爱我家',
  link : 'http://3c.m.tmall.com'                      
},{
  id: 4,
  img : 'http://gtms03.alicdn.com/tps/i3/TB14NwyHpXXXXaUXXXXcy0wIpXX-70-70.png',
  text : '生活圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  id: 5,
  img : 'http://gtms04.alicdn.com/tps/i4/TB1ODktHpXXXXXZXVXXcy0wIpXX-70-70.png',
  text : '试用中心',
  link : 'http://3c.m.tmall.com'                      
}];

// 组件样式
const styles = StyleSheet.create({
    // box: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     paddingTop: 10,
    //     paddingBottom : 10,
    //     paddingLeft : 5,
    //     paddingRight: 5,
    //     backgroundColor : '#eeeeee',
    // },
    logo:{
      alignItems:'center',
      paddingTop:35,
      paddingBottom:15
    },
    info:{
      alignItems:'center',
      justifyContent: 'center',
      textAlign:'center',
      paddingTop: 25,
      paddingBottom : 35,
      paddingLeft : 5,
      paddingRight: 5,
      marginLeft:20,
      marginRight:20,
      borderRadius:5,
      // backgroundColor : '#eeeeee',
    }
});

class About extends React.Component{
  renderItems(data){
    return data.map(function(result){
      return (
        <ListItemWrapper key={result.id} data={result}/>
      )
    })
  }
  render() {
    return (
      <View>
        <View style={styles.logo}>
          <Image source={require('./../img/logo.png')} style={styles.boxImg} />
        </View>
        <Text style={styles.info}>这是一个很酷炫的前端导航网</Text>
        <Text style={styles.info}>www.JSDig.com</Text>
      </View>
    );
  }
}

module.exports = About