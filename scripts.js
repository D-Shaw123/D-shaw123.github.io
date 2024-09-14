
    const modal = document.getElementById("salemodal");
    var btn = document.getElementById("openmodalBTN");
    const span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display ="none";
        }
    };
const mod = document.getElementById("product-modal");
const butn = document.querySelectorAll(".open-prod");
const span2 = document.getElementsByClassName("close2")[0];
function openmodal() {
    mod.style.display = "block";
}

butn.forEach(btn => {
    btn.addEventListener("click", openmodal);
});

span2.onclick = function() {
    mod.style.display = ("none");
};

window.onclick = function(event) {
    if (event.target === mod) {
        mod.style.display ="none";
    }
};
