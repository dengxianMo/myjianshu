import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {GlobalStyle} from './style'
import {Icons} from './statics/iconfont/iconfont'
import Header from './components/Header'
import {BrowserRouter, Route} from 'react-router-dom'
import {Home, Detail, Login} from './routes'

function App(){
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <Icons/>

            <BrowserRouter>
                <Header/>
                <Route path='/' exact component={Home} />
                {/* <Route path='/detail' render={()=><div>detail</div>} /> */}
                <Route path='/detail/:id' exact component={Detail} />
                <Route path='/login' exact component={Login} />
            </BrowserRouter>
        </Provider>
    )
}

export default App