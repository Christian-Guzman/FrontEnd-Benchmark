const likeButton = document.querySelectorAll("#like_button")
const likes = document.querySelectorAll("#likes")
let likes_amount = 0
function updateLikes(likes) {
    // for (const like of likes) {
    const url = `entries/${likes.id}/like`
    fetch(url)
        .then(r => r.json())
        .then(data => {
            for (const i of data.likes) {
                likes.textContent = i
                console.log(likea)
            }
        })
}
// }
for (const button of likeButton)
    button.addEventListener("click", () => {
        updateLikes(likes)
    })