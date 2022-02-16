//condicional
const body = document.querySelector('body');
if (body) body.style.background = 'black';

//non-null assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'black';

//type assertion //RECOMENDED
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLElement //RECOMENDED
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'Qualquer coisa';
