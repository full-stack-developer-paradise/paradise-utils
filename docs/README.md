# 项目组成

### 1，工具类库

* debounce

* throttle

* pubsub

* path

### 2，polyfill

一个shim是一个库,它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现

一个polyfill就是一个用在浏览器API上的shim.我们通常的做法是先检查当前浏览器是否支持某个API,如果不支持的话就加载对应的polyfill.然后新旧浏览器就都可以使用这个API了.

* Promise

* Object.assign

* Array

* String


