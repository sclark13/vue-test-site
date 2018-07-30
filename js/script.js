var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Fue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var demo = new Vue({
    el: '#demo',
    data: {
        show: true
    }
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        show: true
    }
})