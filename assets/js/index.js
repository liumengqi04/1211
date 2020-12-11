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
                content: $('#title').val().trim(),
                done: 0
            })
            localStorage.setItem("todolist", JSON.stringify(info))

            $('#title').val(" ")

        }
    })


    $('body').on('click', 'li>input', function () {
        const index = $(this).data('id')

        console.log(index)
        if (this.checked) {
            info[index - 1].done = 1
        } else {
            info[index - 1].done = 0
        }
        console.log(info)
        bindHtml()
        localStorage.setItem("todolist", JSON.stringify(info))
    })
    $('body').on('click', 'a', function () {
        const index = $('a').data('id')
        console.log(index)
        info.splice(index - 1, 1)
        localStorage.setItem("todolist", JSON.stringify(info))

    })






    bindHtml()
    function bindHtml() {
        let todoStr = ''
        let doneStr = ''
        let todocount = 0
        let donecount = 0
        console.log(info)

        info.forEach((item, i) => {
            if (!item.done) {
                todocount++
                todoStr += `
                <li>
                <input data-id=${i + 1} type="checkbox" />
                <p onclick="edit(${i + 1})">${info[i].content}</p>
                <a data-id=${i + 1} href="">-</a>
            </li>
                
                `
            } else {
                donecount++
                doneStr += `
                <li>
                <input data-id=${i + 1} type="checkbox"  checked/>
                <p onclick="edit(${i + 1})">${info[i].content}</p>
                <a data-id=${i + 1} href="">-</a>
            </li>
                
                `

            }
            $('#todocount').text(todocount)
            $('#donecount').text(donecount)

            $('#todolist').html(todoStr)
            $('#donelist').html(doneStr)
        })
    }


})

