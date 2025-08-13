document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const sidebar = document.getElementById("sidebar");
  const links = sidebar.querySelectorAll("a");
  const dropdownBtns = sidebar.querySelectorAll(".dropdown-btn");

  // Fungsi buka/tutup sidebar
  hamburgerBtn.addEventListener("click", function () {
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      hamburgerBtn.innerHTML = "&#9776;"; // hamburger
    } else {
      sidebar.style.width = "250px";
      hamburgerBtn.innerHTML = "&times;"; // silang
    }
  });

  // Klik link → beri class active
  links.forEach(link => {
    link.addEventListener("click", function () {
      // Hapus active di semua link
      links.forEach(l => l.classList.remove("active"));
      // Tambahkan active di link yang diklik
      this.classList.add("active");

      // Tutup sidebar
      sidebar.style.width = "0";
      hamburgerBtn.innerHTML = "&#9776;";
    });
  });

  // Dropdown toggle
  dropdownBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const dropdown = this.parentElement;
      const content = dropdown.querySelector(".dropdown-content");
      dropdown.classList.toggle("active");

      if (dropdown.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    });
  });
});
