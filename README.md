# ✅Component

html을 반환하는 함수

component를 사용하고자할 때 형태
ReactDOM.render( <App />, document.getElementById('root'))

## 🟢<strong>jsx</strong></br>

여기서 <App />을 jsx라고 부른다. javascript와 html 사이의 조합을 jsx라고 한다.

component를 작성할 때마다 "import React from "react";"를 사용해야 한다.

## 🟢주의사항

ReactDOM.render( <App />, document.getElementById('root')); 에서

<strong>하나의 component</strong>만을 사용해야 한다.

기억하기 ✍🏻<strong>react application은 한 번에 하나의 component만 rendering 할 수 있다.</strong>

## 🟢함수 사용법

<함수명 />

# ✅ jsx

component에 정보를 보낼 수 있다.
<strong>react가 좋은 이유</strong><br>
재사용 가능한 component를 만들 수 있다.

## 🟢property와 value

component에 property와 value 사용하기

<pre>
function App(prov or { fav }){
    console.log(prov.fav); # hello
}
#<App fav = "hello"/>
</pre>

## 🟢prop-types

type을 지정할 때 사용한다.

변수.propTypes = {
변수 = PropTypes.변수타입(number,string..)
}

반드시 propTypes라고 써야 된다.

### isRequire

변수에 반드시 내가 설정한 type으로 하고 싶을 때 사용한다.

변수 = PropTypes.변수타입(number,string..).isRequeire

# ✅state

class componenet는 return을 가지고 있지 않는다. 대신 render을 사용한다.

react는 자동적으로 나의 class component의 render method를 실행한다.

<strong>state는 object이다.</strong>

class내에서 변수를 사용하려면 this를 사용해야한다.

## 🟢setState

state를 바꾸고 싶으면 setState를 사용하면 된다.

setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않는다.

setState를 사용하면 부를 때마다 새로운 state와 render function을 호출 해준다.

# react component
componentDidMount 와 componentDidUpdate는 컴포넌트안에서 데이터를 가져오는 작업을 수행할 때 사용 되어야 한다.

### 🟢componentDidUpdate

setState를 호출하면, component를 호출하고, 먼저 render를 호출한 다음 업데이트가 완료되었다고 말하면
componentDidUpdate가 실행된다.

### 🟢componentDidMount

컴포넌트가 마운트된 직후에 호출됩니다.
처음에 render를 하면 호출되는 life cycle method

<pre>
실행순서
<ul>
<li>constructor()</li>
<li>static getDerivedStateFromProps()</li>
<li>render()</li>
<li>componentDidMount()</li>
</ul>
</pre>

# ✅ Making the Movie App

## 🟢axios

Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다</br>

<a href="https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests">Axios vs fetch 차이점</a>  참고

## react html class 사용

html은 class를 적용할 때 class로 사용하지만 react component에서 class를 사용하려면 className이라고 선언해줘야한다.

# ✅ react router
<pre>
npm install react-router-dom
</pre>
설치하면 rounter를 쓸 수 있다.

## 사용법
<ul>
    <li>Route path= "경로설정" component={사용할 component} /></li>
    <li>Router> h1 this is router tag /h1< Route></li>
</ul>

## Link to
a href를 사용하면 리엑트가 죽고 새로고침되는 문제가 있다. 이런 문제를 해결하고 싶으면 Link to를 사용하면 된다.


### 주의 사항
link to를 사용하려면 HashRouter 안에 있어야 한다.

## props
Link to로 내가 설정한 경로로 이동하면 props도 같이 전송된다.
