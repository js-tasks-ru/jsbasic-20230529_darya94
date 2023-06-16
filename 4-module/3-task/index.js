function highlight(table) {
  //эта часть навешивает класс в зависимости от атрибута

  let rowAvailable = table.querySelectorAll('[data-available="true"]');
  rowAvailable.forEach((element) => {
    let parentEl = element.parentElement;
    parentEl.classList.add('available')})
  
  let rowUnvailable = table.querySelectorAll('[data-available="false"]');
  rowUnvailable.forEach((element) => {
    let parentEl = element.parentElement;
    parentEl.classList.add('unavailable')
  })

  //эта часть навешивает hidden
  for( let i = 1; i < table.rows.length; i++ ) {
    let tableRow = table.rows[i];
    if (tableRow.cells[3].getAttribute('data-available') == undefined )
      tableRow.setAttribute('hidden', true )
  
  //навешивает класс male/female
    if (tableRow.cells[2].textContent.includes('m'))
      tableRow.classList.add('male');
    else tableRow.classList.add('female')

  //добавляет инлайн стиль
    if (tableRow.cells[1].textContent < 18)
    tableRow.style.textDecoration = 'line-through';
  }

  return table
  }
