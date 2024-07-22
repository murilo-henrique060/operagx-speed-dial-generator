$(() => {
  setTimeout(() => {
    updateDisplay(); 
  }, 2000)
})

async function updateDisplay() {
  const banner = $('#banner');
  const loading = $('#display #loading');
  const display = $('#display img');

  loading.show();

  const dataUrl = await htmlToImage.toPng(banner[0]);
  display.attr('src', dataUrl);
  $('#download').attr('href', dataUrl);

  loading.fadeOut();
}

function changeFaIcon() {
  const icon = $('#banner-fa-icon')
  const iconName = $('#icon-fa-icon').val();

  icon.html(`<i class="fa-brands ${iconName} banner-fs-icon"></i>`);
  
  updateDisplay();
}

function changeIconMode() {
  const mode = $('#icon-mode').val();
  
  const icons = $('#banner-icons');
  icons.children().addClass('visually-hidden');
  $(`#banner-${mode}-icon`).removeClass('visually-hidden');
  
  $(`#icon-modes fieldset`).hide();
  $(`#icon-${mode}`).show();
  
  updateDisplay();
}


function changeBackgroundColor(color) {
  color = color.padEnd(7, '0');
  $('#background-color-color-input').val(color);
  $('#background-color-input').val(color);

  $('#banner-color-background').css('background-color', color);

  updateDisplay();
}

function changeBackgroundMode() {
  const mode = $('#background-mode').val();

  const backgrounds = $('#banner-backgrounds');
  backgrounds.children().hide();
  $(`#banner-${mode}-background`).show();

  $(`#background-modes fieldset`).hide();
  $(`#background-${mode}`).show();

  updateDisplay();
}