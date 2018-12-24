function CreateElement(tag) {

  return document.createElement(tag);

}

function GenerateRow() {

  var row = CreateElement('div');
  $(row).attr('class', 'row');
  return row;

}

function AddWindow(workArea) {

  var form = CreateElement('div');
  $(form).addClass('form-group border rounded container p-3 mt-3');

  //Lineup select row
  $(form)
    .append($(GenerateRow())
      .append($(CreateElement('div'))
        .addClass('col') 
        .append($(CreateElement('label'))
          .html('Línea:'))
        .append($(CreateElement('select'))
          .attr('data-select', 'lineup')
          .addClass('form-control')
          .append(function() {
            for (var group in optionVentana) {
              var actualGroup = CreateElement('optgroup');
              $(actualGroup).attr('label', group);
              $(this).append(actualGroup);
              for (var lines in optionVentana[group]) {
                var actualSelect = CreateElement('option');
                $(actualSelect).html(lines);
                actualGroup.append(actualSelect);
              }
            }
          })
        ))
        .append($(CreateElement('div')).addClass('col')
          .append($(CreateElement('label')).html('Nombre:'))
          .append($(CreateElement('input')).attr('type', 'text').addClass('form-control'))
        )
    );

  //Size row
  $(form).append($(GenerateRow())
    .append($(CreateElement('div')).addClass('col')
      .append($(CreateElement('label')).html('Ancho:'))
      .append($(CreateElement('input')).attr('type', 'text').addClass('form-control'))
    )
    .append($(CreateElement('div')).addClass('col')
      .append($(CreateElement('label')).html('Alto:'))
      .append($(CreateElement('input')).attr('type', 'text').addClass('form-control'))
    )
  );

  //Glass selection
  $(form).append($(GenerateRow())
    .append($(CreateElement('div'))
      .addClass('col')
      .append($(CreateElement('label'))
        .html('Vidrio externo:'))
      .append($(CreateElement('select'))
        .addClass('form-control'))
      .append($(CreateElement('label'))
        .html('Camara uno:'))
      .append($(CreateElement('select'))
        .addClass('form-control'))
      .append($(CreateElement('label'))
        .html('Vidrio medio:'))
      .append($(CreateElement('select'))
        .addClass('form-control'))
      .append($(CreateElement('label'))
        .html('Camara dos:'))
      .append($(CreateElement('select'))
        .addClass('form-control'))
      .append($(CreateElement('label'))
        .html('Vidrio interno:'))
      .append($(CreateElement('select'))
        .addClass('form-control'))
    )
  )


  $(workArea).append(form);

}

function GenerateInvoice(data) {

}

function GenerateButton(text) {

  var newWindow = CreateElement('a');
  var genOrder = CreateElement('a');
  $(newWindow).attr('href', '#').attr('data-button', 'newWindow').html('Agregar ventana').click(function(event) {AddWindow($('#workArea'));});
  $(genOrder).attr('href', '#').attr('data-button', 'genOrder').html(text + ' presupuesto').click(function(event) {GenerateInvoice($(this).data('button'));});
  var row = GenerateRow();
  $(row).append($(CreateElement('div')).addClass('col').append(newWindow).append(genOrder));
  return row;

}

function CleanWorkArea() {

  if ($('#workArea').children().length == 0) {
    //if (confirm('El area de trabajo esta siendo usado ¿Desea realizar una nueva tarea?')) {
    //  $('#workArea').children().remove();
    //}
  }

}


// script para las funciones
$(document).ready(function() {

  const workArea = $('#workArea');
  $('a').click(function(event) {
    var linkAction = $(this).data('button');
    if (linkAction == 'create') {

      CleanWorkArea();
      $(workArea).append(GenerateButton($(this).html()));

    } else if (linkAction == 'modify') {

      CleanWorkArea();
      $(workArea).append(GenerateButton($(this).html()));

    } else if (linkAction == 'view') {

      CleanWorkArea();

    }
  });
});
