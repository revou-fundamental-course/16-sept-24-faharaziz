// Script untuk autoslide banner
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Ubah waktu slide dalam milisecond
}

// Script untuk validasi form
const form = document.getElementById("contactForm");
const nama = document.getElementById("nama");
const tanggalLahir = document.getElementById("tanggalLahir");
const gender = document.getElementsByName("gender");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;

  if (nama.value.trim() === "") {
    alert("Nama wajib diisi!");
    isValid = false;
  }

  if (tanggalLahir.value.trim() === "") {
    alert("Tanggal lahir wajib diisi!");
    isValid = false;
  }

  let checked = false;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      checked = true;
      break;
    }
  }
  if (!checked) {
    alert("Jenis kelamin wajib dipilih!");
    isValid = false;
  }

  if (pesan.value.trim() === "") {
    alert("Pesan wajib diisi!");
    isValid = false;
  }

  if (isValid) {
    // Kirim data ke server atau lakukan aksi lainnya
    alert("Form berhasil dikirim!");
    form.reset();
  }
}
