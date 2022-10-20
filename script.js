document.addEventListener("DOMContentLoaded",
function(e){
    let configID = document.querySelector("#id i")
    let idText = document.querySelector("#id span")

    configID.addEventListener("click",
    function(e){
        idText.textContent = prompt("새로운 아이디를 입력하세요")
    }
    )

let profileEditButton = document.querySelector("#profile_info button")
let userInfo = document.querySelector("#userInfo")
let summary = document.querySelector("#summary")
let profileDetail = document.querySelector("#profileDetail")
let changing = false

profileEditButton.addEventListener("click",
function(e) {
    if (changing) {
        let _userInfo = userInfo.querySelector("input").value
        let _summary = summary.querySelector("input").value
        let _profilDetail = profileDetail.querySelector("input").value

        userInfo.innerHTML = _userInfo
        summary.innerHTML = _summary

        if (_profilDetail.startsWith("http")){
            _profilDetail = "<a href="+ _profilDetail + ">"+ _profilDetail + "</a>"
        }

        profileDetail.innerHTML = _profilDetail

        e.target.textContent = "프로필 편집"
        changing = false
        
    } else{
        let _userInfo = userInfo.textContent
        let _summary = summary.textContent
        let _profilDetail = profileDetail.textContent

        userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
        summary.innerHTML = "<input value=" + _summary + "></input>"
        profileDetail.innerHTML = "<input value=" + _profilDetail + "></input>"

        e.target.textContent = "프로필 편집 완료"
        changing = ture
    }
}
)
}
)