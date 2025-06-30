function loadPage(page) {
  fetch(`components/${page}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("components/header.html").then(res => res.text()).then(data => {
      document.getElementById("header").innerHTML = data;
    }),
    fetch("components/sidebar.html").then(res => res.text()).then(data => {
      document.getElementById("sidebar").innerHTML = data;
    }),
    fetch("components/dashboard.html").then(res => res.text()).then(data => {
      document.getElementById("content").innerHTML = data;
    }),
    fetch("components/footer.html").then(res => res.text()).then(data => {
      document.getElementById("footer").innerHTML = data;
    })
  ]).then(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "block";
 }).catch((error) => {
  console.error("Gagal memuat komponen:", error);
  alert("Terjadi kesalahan saat memuat halaman.");
});
});
