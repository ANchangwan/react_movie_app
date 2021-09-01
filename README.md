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

## property와 value
component에 property와 value 사용하기
<pre>
function App(prov or { fav }){
    console.log(prov.fav); # hello
}
#<App fav = "hello"/>
</pre>