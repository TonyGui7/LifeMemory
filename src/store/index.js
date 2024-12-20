import Vuex from 'vuex';
import {ExternalHost} from './constants'

export default new Vuex.Store({
  state: {
    imageLinks: [
                      { id: 1, fullImg: ExternalHost + '/weddingRes/DSC09886.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09886.jpg' },
                      { id: 2, fullImg: ExternalHost + '/weddingRes/DSC00003.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00003.jpg' },
                      { id: 3, fullImg: ExternalHost + '/weddingRes/DSC00006.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00006.jpg' },
                      { id: 4, fullImg: ExternalHost + '/weddingRes/DSC00011.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00011.jpg' },
                      { id: 5, fullImg: ExternalHost + '/weddingRes/DSC00016.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00016.jpg' },
                      { id: 6, fullImg: ExternalHost + '/weddingRes/DSC00021.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00021.jpg' },
                      { id: 7, fullImg: ExternalHost + '/weddingRes/DSC00024.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00024.jpg' },
                      { id: 8, fullImg: ExternalHost + '/weddingRes/DSC00049.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00049.jpg' },
                      { id: 9, fullImg: ExternalHost + '/weddingRes/DSC00052.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00052.jpg' },
                      { id: 10, fullImg: ExternalHost + '/weddingRes/DSC00055.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00055.jpg' },
                      { id: 11, fullImg: ExternalHost + '/weddingRes/DSC00059.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00059.jpg' },
                      { id: 12, fullImg: ExternalHost + '/weddingRes/DSC00064.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00064.jpg' },
                      { id: 13, fullImg: ExternalHost + '/weddingRes/DSC00075.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00075.jpg' },
                      { id: 14, fullImg: ExternalHost + '/weddingRes/DSC00102.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00102.jpg' },
                      { id: 15, fullImg: ExternalHost + '/weddingRes/DSC00103.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00103.jpg' },
                      { id: 16, fullImg: ExternalHost + '/weddingRes/DSC00105.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00105.jpg' },
                      { id: 17, fullImg: ExternalHost + '/weddingRes/DSC00122.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00122.jpg' },
                      { id: 18, fullImg: ExternalHost + '/weddingRes/DSC00200.JPG', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00200.JPG' },
                      { id: 19, fullImg: ExternalHost + '/weddingRes/DSC00211.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00211.jpg' },
                      { id: 20, fullImg: ExternalHost + '/weddingRes/DSC00230.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00230.jpg' },
                      { id: 21, fullImg: ExternalHost + '/weddingRes/DSC00232.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00232.jpg' },
                      { id: 22, fullImg: ExternalHost + '/weddingRes/DSC00240.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00240.jpg' },
                      { id: 23, fullImg: ExternalHost + '/weddingRes/DSC00249.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00249.jpg' },
                      { id: 24, fullImg: ExternalHost + '/weddingRes/DSC00252.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC00252.jpg' },
                      { id: 25, fullImg: ExternalHost + '/weddingRes/DSC09622.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09622.jpg' },
                      { id: 26, fullImg: ExternalHost + '/weddingRes/DSC09659.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09659.jpg' },
                      { id: 27, fullImg: ExternalHost + '/weddingRes/DSC09720.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09720.jpg' },
                      { id: 28, fullImg: ExternalHost + '/weddingRes/DSC09726.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09726.jpg' },
                      { id: 29, fullImg: ExternalHost + '/weddingRes/DSC09740.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09740.jpg' },
                      { id: 30, fullImg: ExternalHost + '/weddingRes/DSC09750.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09750.jpg' },
                      { id: 31, fullImg: ExternalHost + '/weddingRes/DSC09759.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09759.jpg' },
                      { id: 32, fullImg: ExternalHost + '/weddingRes/DSC09779.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09779.jpg' },
                      { id: 33, fullImg: ExternalHost + '/weddingRes/DSC09800.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09800.jpg' },
                      { id: 34, fullImg: ExternalHost + '/weddingRes/DSC09812.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09812.jpg' },
                      { id: 35, fullImg: ExternalHost + '/weddingRes/DSC09825.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09825.jpg' },
                      { id: 36, fullImg: ExternalHost + '/weddingRes/DSC09835.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09835.jpg' },
                      { id: 37, fullImg: ExternalHost + '/weddingRes/DSC09846.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09846.jpg' },
                      { id: 38, fullImg: ExternalHost + '/weddingRes/DSC09850.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09850.jpg' },
                      { id: 39, fullImg: ExternalHost + '/weddingRes/DSC09859.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09859.jpg' },
                      { id: 40, fullImg: ExternalHost + '/weddingRes/DSC09864.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09864.jpg' },
                      { id: 41, fullImg: ExternalHost + '/weddingRes/DSC09869.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09869.jpg' },
                      { id: 42, fullImg: ExternalHost + '/weddingRes/DSC09881.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09881.jpg' },
                      { id: 43, fullImg: ExternalHost + '/weddingRes/DSC09896.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09896.jpg' },
                      { id: 44, fullImg: ExternalHost + '/weddingRes/DSC09898.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09898.jpg' },
                      { id: 45, fullImg: ExternalHost + '/weddingRes/DSC09899.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09899.jpg' },
                      { id: 46, fullImg: ExternalHost + '/weddingRes/DSC09903.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09903.jpg' },
                      { id: 47, fullImg: ExternalHost + '/weddingRes/DSC09935.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09935.jpg' },
                     { id: 48, fullImg: ExternalHost + '/weddingRes/DSC09946.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09946.jpg' },
                     { id: 49, fullImg: ExternalHost + '/weddingRes/DSC09951.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09951.jpg' },
                     { id: 50, fullImg: ExternalHost + '/weddingRes/DSC09957.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09957.jpg' },
                     { id: 51, fullImg: ExternalHost + '/weddingRes/DSC09961.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09961.jpg' },
                     { id: 52, fullImg: ExternalHost + '/weddingRes/DSC09993.jpg', thumbImg: ExternalHost + '/weddingRes/thumb/DSC09993.jpg' }
                ],
  },
});
