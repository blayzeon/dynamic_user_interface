const divContentDemo = [['<a href="#" "target="_blank">This is a link.</a>', 'This is not.'], ['These options are created with nested arrays.', 'You can add as many options as you would like.', 'Or as few as you would like.', 'This is this line is on index [1][3].'], ['The array items can be any length.']];
const menuBtnsDemo = ['Services', 'Contact', 'Account', 'Services', 'Contact', 'Account', 'Services', 'Contact', 'Account'];

const menus = function generateDropDownMenus(divContent, menuBtns, limit = 3, container = document.body) {
  const dropdownUl = document.createElement('ul');
  dropdownUl.classList.add('dropdown-menu');

  // in case of overflow
  const dropdownExtra = document.createElement('li');
  dropdownExtra.classList.add('dropdown-menu');

  const dropdownExtraBtn = document.createElement('button');
  dropdownExtraBtn.classList.add('dropdown-menu');
  dropdownExtraBtn.innerText = '≡';
  dropdownExtra.appendChild(dropdownExtraBtn);

  const dropdownExtraDiv = document.createElement('div');
  dropdownExtraDiv.classList.add('dropdown-menu');
  dropdownExtra.appendChild(dropdownExtraDiv);
  const dropdownExtraDivUl = document.createElement('ul');
  dropdownExtraDiv.appendChild(dropdownExtraDivUl);

  // creates the menu items
  for (let i = 0; i < menuBtns.length; i += 1) {
    const dropdownLi = document.createElement('li');
    dropdownLi.classList.add('dropdown-menu');

    const dropdownBtn = document.createElement('button');
    dropdownBtn.classList.add('dropdown-menu');
    dropdownBtn.innerText = menuBtns[i];

    const dropdownDiv = document.createElement('div');
    dropdownDiv.classList.add('dropdown-menu');
    let divContentItems = '';
    if (divContentItems[0] === undefined) {
      divContentItems = '<li>There is nothing to display</li>';
    } else {
      for (let j = 0; j < divContent[i].length; j += 1) {
        divContentItems += `<li>${divContent[i][j]}</li>`;
      }
    }
    dropdownDiv.innerHTML = `<ul>${divContentItems}</ul>`;

    // append the children
    dropdownLi.appendChild(dropdownBtn);
    dropdownLi.appendChild(dropdownDiv);

    if (i < limit) {
      dropdownUl.appendChild(dropdownLi);
    } else {
      dropdownExtraDivUl.appendChild(dropdownLi);
    }
  }
  // adds the generated menu to the specified element container, usually a nav
  if (menuBtns.length > limit) {
    dropdownUl.appendChild(dropdownExtra);
  }
  container.appendChild(dropdownUl);

  // add the event listener to make it work
  document.addEventListener('click', (e) => {
    const dropdownBtn = e.target.matches('button.dropdown-menu');
    if (!dropdownBtn && e.target.closest('.dropdown-menu') != null) return;

    let currentMenu;
    if (dropdownBtn) {
      currentMenu = e.target.closest('li.dropdown-menu').querySelector('div.dropdown-menu');
      currentMenu.classList.toggle('active');
    }

    document.querySelectorAll('div.dropdown-menu.active').forEach((dropdown) => {
      if (dropdown === currentMenu) return;
      dropdown.classList.remove('active');
    });
  });
};

menus(divContentDemo, menuBtnsDemo);
// * end of module * //
