// 获取表单元素
var formElement = document.getElementById('myForm');
// 添加表单提交事件监听器
formElement.addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('/api/userlogin', {
        method: 'POST',
        body: new FormData(formElement),
    })
    .then(response => response.json())
    .then(data => {
        // 处理服务器返回的数据
        // window.location.href = '/static/home.html';
    })
    .catch(error => {
        // 处理错误
        console.error('An error occurred:', error);
    });
});