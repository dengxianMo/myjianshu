import Home from './Home';
import Login from './Login';
// import Detail from './Detail'

import Loadable from 'react-loadable';
import React from 'react'

const LoadableDetail = Loadable({
  loader: () => import('./Detail'),
  loading(){
      return <div>asd啦啦啦</div>
  }
});

const Detail = ()=><LoadableDetail/>

export {
    Home,
    Detail,
    Login
}