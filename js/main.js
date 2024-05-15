document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".sidenav");
  const instances = M.Sidenav.init(elems);

  const modal = document.querySelectorAll(".modal");
  const modalInit = M.Modal.init(modal);

  const gallery = document.querySelectorAll(".materialboxed");
  const gallery_init = M.Materialbox.init(gallery);
})