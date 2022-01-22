import generateDropDownMenus from './dropdown-menu.js';
import imageCarousel from './image-carousel.js';

const dArrayDemo = [['<a href="#" "target="_blank">This is a link.</a>', '<button>This is a button.</button>', 'This is just text without a tag.'], ['These options are created with nested arrays.', 'You can add as many options as you would like.', 'Or as few as you would like.', 'This is this line is on index [1][3].'], ['The array items can be any length.']];
const lArrayDemo = [['Services', 'shopping_cart'], ['Contact', 'question_answer'], ['Account', 'account_circle'], 'Services', 'Contact', 'Account', 'Services', 'Contact', 'Account'];
generateDropDownMenus(dArrayDemo, lArrayDemo, [3, 'menu']);
imageCarousel(['https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 'https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']);
