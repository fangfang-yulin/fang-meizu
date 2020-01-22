let src1 = window.location
console.log(src1);
//?path1=%22car.html?id=4%22
let reg = /^\?path1=%22(.+)%22$/;
$('form').submit(function(e) {
    //阻止默认提交事件
    var e = e || window.event
    e.preventDefault()
        //获取输入框中的用户名和密码
    let user = $('input:eq(0)').val()
    let pass = $('input:eq(1)').val()
        //调用和数据库里面的用户名和密码,将用户名和密码放入 到数据库里面查看是否已经存在这样子的密码和用户名
    loginfn()
    async function loginfn() {
        let p = await pAjax({
                url: '../server/login.php',
                data: {
                    user1: user,
                    pass1: pass
                }
            })
            //如果存在的话
        if (p == 'ok') {
            console.log('ok')
                //就设置cookie有效的时间
            setCookie('login', 11, 60 * 60 * 24 * 10)
            if (reg.test(src1.search)) {
                //				0: "?path1=%22goodsdetail.html%22"
                //				1: "goodsdetail.html"
                let regres = reg.exec(src1.search)
                window.location.href = regres[1]
            } else {
                window.location.href = 'phonelist.html'
            }
        } else {
            let name = $(':text').val()
            let psd = $(':password').val()
            if (name == "" || psd == "") {
                $('#tishi').text('账号和密码不能为空')
            } else {
                $('#tishi').text('账号或密码错误，请重新输入')
                console.log('error')
            }
            $('#cover').css('display', 'block')
            $('#hint_box').css('display', 'block')

        }
    }


})
$('#sure').on('click', function() {
    $('#cover').css('display', 'none')
    $('#hint_box').css('display', 'none')
})