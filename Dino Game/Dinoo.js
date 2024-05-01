let game = document.querySelector("#game")
let dino = document.querySelector("#dino")
let cac = document.querySelector("#cactus")
let score = document.querySelector("#mypoint")
let cac_flag = false
let point = 0

function jump_dino() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump")
        cac_flag = true
        setTimeout((e) => {
            dino.classList.remove("jump")
        }, 600);
    }

}
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        jump_dino()
    }

})

let result = setInterval(() => {
    let dino_top = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cac_left = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if (cac_left > 50 && cac_left < 100 && dino_top > 150) {
        dino.style.animationPlayState = "paused"
        cac.style.animationPlayState = "paused"
        clearInterval(result)
        alert(`GAME OVER!  your point : ${point}`)
        window.location.reload()
    }
    if (cac_left < 10 && cac_flag) {
        point += 10
        cac_flag = false
        score.innerHTML = point
    }


}, 10);