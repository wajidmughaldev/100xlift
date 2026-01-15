// portfolio-wrapper-start

document.addEventListener("DOMContentLoaded", function () {

  fetch("assets/data/portfolio-data.json")
    .then(res => res.json())
    .then(data => {
      renderSlider(data.slider1, "portfolio-wrapper-1");
      renderSlider(data.slider2, "portfolio-wrapper-2");
    });

  function renderSlider(items, wrapperId) {
    const wrapper = document.getElementById(wrapperId);

    if (!wrapper) return; // prevents crash

    items.forEach(item => {
      wrapper.innerHTML += `
        <div class="swiper-slide">
          <div class="mp-portfolio-item">
            <a href="#" class="mp-portfolio-thumb mb-25">
              <img class="w-100" src="${item.image}" alt="">
            </a>
            <div class="mp-portfolio-content d-inline-block">
              <h3 class="mp-portfolio-title tp-ff-sequel-semi-bold text-uppercase tp-title-anim fix">
                <a href="#" class="tp-title-text">${item.title}</a>
              </h3>
              <span class="mp-portfolio-tag text-uppercase">${item.tag}</span>
            </div>
          </div>
        </div>
      `;
    });
  }

});


// portfolio-wrapper-end
