var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var image1 = document.getElementById("image1");
var modalImg = document.getElementById("img01");
var image3 = document.getElementById("image3");
var image4 = document.getElementById("image4");
var image5 = document.getElementById("image5");
var image6 = document.getElementById("image6");
var image7 = document.getElementById("image7");
var image8 = document.getElementById("image8");
var image9 = document.getElementById("image9");
var image10 = document.getElementById("image10");
var image11 = document.getElementById("image11");
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

image1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

imageToModal.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image9.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image10.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

image11.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}