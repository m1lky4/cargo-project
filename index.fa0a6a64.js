!function(){var e=document.querySelector(".open-modal-btn"),o=document.querySelector(".backdrop"),t=document.querySelector(".modal-content"),n=document.querySelector("body"),c=document.querySelector(".close-icon");function s(e){"Escape"===e.code&&(o.classList.add("is-hidden"),t.classList.remove("is-open"),n.classList.remove("modal-is-open"),o.removeEventListener("click",d),document.removeEventListener("keydown",s))}function d(e){console.log(e.target),(e.target===o||e.target===c)&&(o.classList.add("is-hidden"),t.classList.remove("is-open"),n.classList.remove("modal-is-open"),o.removeEventListener("click",d))}e.addEventListener("click",(function(e){e.preventDefault();var c=window.pageYOffset||document.documentElement.scrollTop;window.scrollTo(0,c),o.classList.remove("is-hidden"),t.classList.add("is-open"),n.classList.add("modal-is-open"),o.addEventListener("click",d),document.addEventListener("keydown",s)})),document.querySelector(".video").oncontextmenu=function(e){e.preventDefault()}}();
//# sourceMappingURL=index.fa0a6a64.js.map