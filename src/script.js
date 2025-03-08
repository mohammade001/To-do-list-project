let textsom = document.getElementById("textsom")
let spann = document.querySelectorAll("span")
let selectbate = document.getElementById("selectbate")
let selecttime = document.getElementById("selecttime")
let texttog = document.getElementById("texttog")
let addd = document.getElementById("addd")
let remoo = document.getElementById("remoo")
let tbodyy = document.getElementById("tbodyy")
let bbb = document.getElementById('bbb')
let Ptextsom = document.getElementById('Ptextsom')
let Pslectbate = document.getElementById('Pslectbate')
let Pslecttime = document.getElementById('Pslecttime')
let Ptexttog = document.getElementById('Ptexttog')



spann.forEach((e) => {
    e.addEventListener("click", (event) => {

        let evv = [...event.target.classList]

        textsom.classList = " !text-black w-full p-2 mb-2 rounded-lg "
        textsom.classList += evv.slice(5, 8).join(" ")

    })
})

function addfun() {

    if (textsom.value.trim() != "" && texttog.value.trim() != "") {

        let trr = document.createElement('tr')


        let tdId = document.createElement('td')
        tdId.classList = "idrfresh py-4"
        tdId.innerHTML = tbodyy.children.length + 1


        let tdSop = document.createElement('td')
        let spanSop = document.createElement('span')
        if (textsom.classList.length == 5) {
            spanSop.classList = "p-2 !text-black bg-white rounded-md"
        } else {
            let arrClassListTextsom = [...textsom.classList]
            spanSop.classList = "p-2 !text-black rounded-md "
            spanSop.classList += arrClassListTextsom.slice(5, 8).join(" ")
        }
        spanSop.innerHTML = textsom.value
        tdSop.append(spanSop)


        let tdDay = document.createElement('td')
        tdDay.innerHTML = selectbate.value


        let tdTime = document.createElement('td')
        tdTime.innerHTML = selecttime.value


        let tdToget = document.createElement('td')
        let spanToget = document.createElement('span')
        spanToget.classList = "p-2 bg-blue-400 rounded-md"
        spanToget.innerHTML = texttog.value
        tdToget.append(spanToget)


        let tdSta = document.createElement('td')
        let buSta = document.createElement('button')
        buSta.setAttribute('type', 'button')
        buSta.classList = "p-1 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white "
        buSta.innerHTML = 'Not Started'
        tdSta.append(buSta)
        buSta.addEventListener('click', () => {

            if (buSta.innerHTML == 'Not Started') {
                buSta.innerHTML = 'In Progress'
                buSta.classList = "p-1 text-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white"

            } else if (buSta.innerHTML == 'In Progress') {
                buSta.innerHTML = 'Done'
                buSta.classList = "p-1 text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white "

            } else if (buSta.innerHTML == 'Done') {
                buSta.classList = "p-1 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white "
                buSta.innerHTML = 'Not Started'
            }
        })


        let tdEdit = document.createElement('td')
        tdEdit.classList = "text-center"
        tdEdit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" class="m-auto size-8 p-2 text-green-300 border border-green-300 rounded-lg hover:bg-green-300 hover:text-white hover:cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round"d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>'


        let tdDelet = document.createElement('td')
        tdDelet.classList = "text-center"
        tdDelet.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto size-8 p-2 text-orange-300 border border-orange-300 rounded-lg hover:bg-orange-300 hover:text-white hover:cursor-pointer" ><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg >'

        tdDelet.addEventListener('click', () => {
            let parentTdDelet = tdDelet.parentElement
            parentTdDelet.remove()

            let idrfresh = document.getElementsByClassName('idrfresh')
            let arrIdrfresh = [...idrfresh]
            let x = 1
            arrIdrfresh.forEach((e) => {
                e.innerHTML = x
                ++x
            })

            bbb.innerHTML = tbodyy.children.length

        })

        trr.append(tdId, tdSop, tdDay, tdTime, tdToget, tdSta, tdEdit, tdDelet)


        tbodyy.append(trr)

        bbb.innerHTML = tbodyy.children.length

        restfun()

    }

}

function restfun() {
    textsom.value = ''
    textsom.classList = " !text-black w-full p-2 mb-2 rounded-lg "
    texttog.value = ''
    selectbate.value = "choose Day"
    selecttime.value = 'choose Time'
}

function masejtectfun() {

    if (textsom.value == "") {

        Ptextsom.innerHTML = 'please write something'

    } else {

        Ptextsom.innerHTML = ''
    }
}

function masejbatefun() {

    if (selectbate.value == 'choose Day') {
        Pslectbate.innerHTML = 'please choose something'
    } else {
        Pslectbate.innerHTML = ''
    }
}

function masejtimefun() {
    if (selecttime.value == "choose Time") {
        Pslecttime.innerHTML = 'please choose something'
    } else {
        Pslecttime.innerHTML = ''
    }
}

function masejetogfun() {
    if (texttog.value == "") {
        Ptexttog.innerHTML = 'please write something'
    } else {
        Ptexttog.innerHTML = ''
    }
}

addd.addEventListener('click', addfun)

remoo.addEventListener('click', restfun)

textsom.addEventListener('change', masejtectfun)

selectbate.addEventListener('change', masejbatefun)

selecttime.addEventListener('change', masejtimefun)

texttog.addEventListener('change', masejetogfun)