function tapSlider(object) {
  old_slide = document.getElementById(`${object.class_name}_slide_${object.index}`);
  object.index = (object.index < object.max) ? object.index + 1 : 0
  new_slide = document.getElementById(`${object.class_name}_slide_${object.index}`);
  if (old_slide != null)
    old_slide.classList.remove('active');
  if (new_slide != null)
    new_slide.classList.add('active');
}

synced_interval = 4000;

function tapSyncedSlider(params) {
  tapSlider(window.mobileSliderConfig);
  tapSlider(window.desktopSliderConfig);
}


function startScreenSlider() {
  if (window.timer) {
    window.clearInterval(window.timer)
  }
  if (window.mobileSliderConfig !== undefined && window.location.pathname == '/') {
    window.timer = window.setInterval((i) => {
      tapSyncedSlider();
    }, synced_interval);
  }
}