import {FETCH_PHOTOS} from '../actions/index';

export default function PhotosReducer(state=[], action){
  switch(action.type){
    case FETCH_PHOTOS:
      return [action.payload.data.photos.photo, ...state];
    default: return state;
  }
}
