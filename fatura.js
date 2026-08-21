const nav_links = document.querySelectorAll(".nav-link");
const contents = document.querySelectorAll(".contents");

function openMenu(linksName) {
  for (const nav_link of nav_links) {
    nav_link.classList.remove("active");
  }

  for (const content of contents) {
    content.style.display = "none";
  }

  document.getElementById(linksName).style.display = "block";
  const nav_link = document.activeElement;
  nav_link.classList.add("active");

  Loading(2, 1);
}

for (const l of nav_links) {
  l.addEventListener("click", () => Links(l));
}

function Links(link) {
  for (const l of nav_links) {
    l.classList.remove("active");
  }

  link.classList.add("active");
}

function showMore() {
  nav_links[1].click();
}
