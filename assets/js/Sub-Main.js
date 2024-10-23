  $(document).ready(function() {
    $('input[type="checkbox"]').change(function () {
      const label = $(this).next('label').text();
      const id = $(this).attr('id');
      if (this.checked) {
        $('#tagContainer').append(`<div class="tag-item-${id}"><span class="tag">${label}</span> <span class="close" data-id="${id}">X</span></div>`);
      } else {
        $(`.tag-item-${id}`).remove();
      }
    });

  $(document).on('click', '.close', function() {
                const id = $(this).data('id');
  $(`#${id}`).prop('checked', false);
  $(this).parent().remove();
            });
        });