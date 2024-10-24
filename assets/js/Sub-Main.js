$(document).ready(function () {
  $('input[type="checkbox"]').change(function () {
    const label = $(this).next('label').text();
    const id = $(this).attr('id');
    // Change background color of the header based on checked state
    if (this.checked) {
      $('#tagContainer').append(`<div class="tag-item" id="tag-${id}"><span class="tag">${label}</span> <span class="close" data-id="${id}">X</span></div>`);
      $('.header--filter').addClass('checked'); // Change background when checked
    } else {
      $(`#tag-${id}`).remove();
      if ($('input[type="checkbox"]:checked').length === 0) {
        $('.header--filter').removeClass('checked'); // Remove background if no checkboxes are checked
      }
    }
  });
  $('input[type="radio"]').change(function () {
    const label = $(this).next('label').text();
    const id = $(this).attr('id');
    if (this.checked) {
      $('#tagContainer').children('.tag-radio').html(`<div class="tag-item tag-radio" id="tag--${id} tag-radio"><span class="tag">${label}</span> <span class="close" data-id="${id}">X</span></div>`)
    }
  });
  $(document).on('click', '.close', function () {
    const id = $(this).data('id');
    $(`#${id}`).prop('checked', false).change(); // Trigger change to update state
    $(this).parent().remove();
  });
});
