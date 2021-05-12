var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var imageToModal = document.getElementById("imageToModal");
var footerToModal = document.getElementById("footerToModal");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = imageToModal.src;
  captionText.innerHTML = footerToModal.innerText;
}

img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = imageToModal.src;
    captionText.innerHTML = footerToModal.innerText;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = imageToModal.src;
    captionText.innerHTML = footerToModal.innerText;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}