import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import News from './modules/News/News'
import NewsDetail from './modules/News/news-detail'
import Sports from './modules/Sports/Sports'
import SportsDetail from './modules/Sports/sports-detail'
import World from './modules/World/World'
import WorldDetail from './modules/World/world-detail'
import Home from './modules/Home'

const dataNews = [
  {
    id:1,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13777430.jpg",
    urlB:"http://savepic.ru/13811241.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:2,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13777430.jpg",
    urlB:"http://savepic.ru/13811241.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:3,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13777430.jpg",
    urlB:"http://savepic.ru/13811241.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:4,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13777430.jpg",
    urlB:"http://savepic.ru/13811241.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

]

const dataSports = [
  {
    id:1,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13826603.jpg",
    urlB:"http://savepic.ru/13814315.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:2,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13826603.jpg",
    urlB:"http://savepic.ru/13814315.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:3,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13826603.jpg",
    urlB:"http://savepic.ru/13814315.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]
const dataWorld = [
  {
    id:1,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13769259.jpg",
    urlB:"http://savepic.ru/13781546.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id:2,
    title:"Lorem ipsum dolor sit amet",
    urlS:"http://savepic.ru/13769259.jpg",
    urlB:"http://savepic.ru/13781546.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route path="/news" component={News} data={dataNews} />
      <Route path="/sports" component={Sports} data={dataSports} />
     <Route path="/world" component={World} data={dataWorld} />
    </Route>
            <Route path="/news/:id" component={NewsDetail} data={dataNews}/>
            <Route path="/sports/:id" component={SportsDetail} data={dataSports}/>
            <Route path="/world/:id" component={WorldDetail} data={dataWorld}/>
  </Router>
), document.getElementById('app'))
