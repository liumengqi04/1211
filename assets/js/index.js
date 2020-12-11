/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


$(function () {

    let info = null
    let inp = localStorage.getItem("todolist")
    if (inp === null) {
        localStorage.setItem("todolist", "[]")
        inp = "[]"
    }
    info = JSON.parse(inp)
    $("#title").on('keydown', function (event) {
        // const e = e || event
        const keycode = event.keyCode
        if (keycode === 13) {

            info.push({
                id: info.length + 1,
                content: $('#title').val(),
                done: false
            })
            localStorage.setItem("todolist", JSON.stringify(info))

            $('#title').val(" ")

        }
    })



    $('body').on('click', 'input', function () {
        const index = $('input').data('id')
        if ($('input').checked) {
            info[index].done = true
        } else {
            info[index].done = false
        }
        console.log(info)
        localStorage.setItem("todolist", JSON.stringify(info))
    })
    $('body').on('click', 'a', function () {
        const index = $('a').data('id')
        info.splice(index - 1, 1)
        localStorage.setItem("todolist", JSON.stringify(info))

    })






    bindHtml()
    function bindHtml() {
        let todoStr = ''
        let doneStr = ''
        console.log(info)
        $('#todocount').text(0)
        $('#donecount').text(0)
        info.forEach((item, i) => {
            if (!item.done) {
                $('#todocount').text(item.length)
                todoStr += `
                <li>
                <input data-id=${i + 1} type="checkbox" />
                <p onclick="edit(${i + 1})">${info[i].content}</p>
                <a data-id=${i + 1} href="">-</a>
            </li>
                
                `
            } else {
                $('#donecount').text(item.length)
                doneStr += `
                <li>
                <input data-id=${i + 1} type="checkbox" />
                <p onclick="edit(${i + 1})">${info[i].content}</p>
                <a data-id=${i + 1} href="">-</a>
            </li>
                
                `

            }
            $('#todocount').text(info.length)

            $('#todolist').html(todoStr)
            $('#donelist').html(doneStr)
        })
    }


})

