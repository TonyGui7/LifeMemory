import Vuex from 'vuex';
import {ExternalHost} from './constants'

export default new Vuex.Store({
  state: {
    imageLinks: [
        {id:1, fullImg: ExternalHost + '/weddingRes/WechatIMG264.jpeg'},
        {id:2, fullImg: ExternalHost + '/weddingRes/WechatIMG265.jpeg'},
        {id:3, fullImg: ExternalHost + '/weddingRes/WechatIMG266.jpeg'},
        {id:4, fullImg: ExternalHost + '/weddingRes/WechatIMG267.jpeg'}
    ],
  },
});
