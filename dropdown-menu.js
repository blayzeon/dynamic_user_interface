/*
  Creates a drop-down menu when provided the following:
  dArray: An array with HTML that contains the inner items for the button.
    * Example: text without tags, or tagged elements such as <a href="#">this is a link</a>;
  lArray: Labels for the button that contains above content in plain text as it goes in a button.
  limit: How many items are expanded before a hamburger menu is added
  container: Where the navbar will be inserted.  Default is document.body

  *** You may use material icons with te navbar if you include them in the array ***
  Examples:
    * lArray: ['Services', 'shopping_cart'];
    * limit: [3, 'menu'];
  * For the material icons to show up in the document, add:
  * <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  * To your HTML head

  Tips:
    * For these menus to work, the css file is required
    * container needs to be the container location such as 'document.getElementById("elm")'
    * You can only have one navbar at a time, it breaks if you try to add more than one
    * dArray needs tested arrays.  So [[1, 2, 3], ['4', '5', '6']]
      * The example above would provide 1, 2, 3 for the first dropdown, and 4, 5, 6 for the second
    * If you do not wish to use material icons with lArray, simply have one item per array
      * Example: ['Services']
*/

const menus = function generateDropDownMenus(dArray, lArray, limit = ['none'], container = document.body) {
  const dropdownUl = document.createElement('ul');
  dropdownUl.classList.add('dropdown-menu');

  // in case of overflow
  const dropdownExtra = document.createElement('li');
  dropdownExtra.classList.add('dropdown-menu');
  const dropdownExtraBtn = document.createElement('button');
  dropdownExtraBtn.classList.add('dropdown-menu');
  if (limit[0] !== 'none') {
    if (limit.length === 1) {
      dropdownExtraBtn.innerText = '≡';
    } else {
      // if you wish to use material icons, add a limit of [number, icon-name]
      dropdownExtraBtn.innerHTML = `<span class="material-icons">${limit[1]}</span>`;
    }
  }
  dropdownExtra.appendChild(dropdownExtraBtn);
  const dropdownExtraDiv = document.createElement('div');
  dropdownExtraDiv.classList.add('dropdown-menu');
  dropdownExtra.appendChild(dropdownExtraDiv);
  const dropdownExtraDivUl = document.createElement('ul');
  dropdownExtraDiv.appendChild(dropdownExtraDivUl);

  // creates the menu items
  for (let i = 0; i < lArray.length; i += 1) {
    const dropdownLi = document.createElement('li');
    dropdownLi.classList.add('dropdown-menu');
    const dropdownIconInfo = document.createElement('div');
    const dropdownBtn = document.createElement('button');
    dropdownBtn.classList.add('dropdown-menu');
    if (lArray[i].length === 2) {
      dropdownBtn.innerHTML = `<span class="material-icons">${lArray[i][1]}</span>`;
      dropdownIconInfo.innerText = `${lArray[i][0]}`;
      dropdownIconInfo.classList.add('dropdown-menu-hover-text');
    } else {
      dropdownBtn.innerText = lArray[i];
    }

    const dropdownDiv = document.createElement('div');
    dropdownDiv.classList.add('dropdown-menu');
    let dArrayItems = '';
    if (dArray[i] === undefined) {
      dArrayItems = '<li>There is nothing to display</li>';
    } else if (dArray.length === 1) {
      dArrayItems += `<li>${dArray[i]}</li>`;
    } else {
      for (let j = 0; j < dArray[i].length; j += 1) {
        dArrayItems += `<li>${dArray[i][j]}</li>`;
      }
    }
    dropdownDiv.innerHTML = `<ul>${dArrayItems}</ul>`;

    // append the children
    dropdownLi.appendChild(dropdownBtn);

    if (limit[0] === 'none' || i < limit[0]) {
      dropdownUl.appendChild(dropdownLi);
      dropdownLi.appendChild(dropdownIconInfo);
    } else {
      dropdownExtraDivUl.appendChild(dropdownLi);
    }
    dropdownLi.appendChild(dropdownDiv);
  }
  // adds the generated menu to the specified element container, usually a nav
  if (limit[0] !== 'none' && lArray.length > limit[0]) {
    dropdownUl.appendChild(dropdownExtra);
  }
  container.appendChild(dropdownUl);

  // add the event listener to make it work
  document.addEventListener('click', (e) => {
    const dropdownBtn = e.target.matches('button.dropdown-menu') || e.target.matches('button.dropdown-menu > span');
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

// *** DEMO *** //
const dArrayDemo = [['<a href="#" "target="_blank">This is a link.</a>', '<button>This is a button.</button>', 'This is just text without a tag.'], ['These options are created with nested arrays.', 'You can add as many options as you would like.', 'Or as few as you would like.', 'This is this line is on index [1][3].'], ['The array items can be any length.']];
const lArrayDemo = [['Services', 'shopping_cart'], ['Contact', 'question_answer'], ['Account', 'account_circle'], 'Services', 'Contact', 'Account', 'Services', 'Contact', 'Account'];
menus(dArrayDemo, lArrayDemo, [3, 'menu']);

export default menus;

// * end of module * //
