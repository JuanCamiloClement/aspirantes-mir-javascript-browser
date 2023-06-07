const menu = [
    {
      name: 'Home',
      link: '/',
      items: []
    },
    {
      name: 'About',
      link: '/about',
      items: []
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: []
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: []
            },
          ]
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: []
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: []
            },
          ]
        },
      ]
    },
  ]

const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);

const addMenu = (array,list) => {
    for (let i = 0; i < array.length; i ++) {
        let element = array[i];
        let newElementInList = document.createElement('li');
        newElementInList.textContent = element.name;
        if (element.items.length > 0) {
            newElementInList.setAttribute('class','has_submenu');
            let newList = document.createElement('ul');
            newElementInList.appendChild(newList);
            addMenu(element.items,newList);
        }
        list.appendChild(newElementInList);
    }
}

addMenu(menu,ul);

const listItems = document.querySelectorAll('li');

listItems.forEach(function(li) {
    li.addEventListener('click',(e) => {
        e.preventDefault();
        e.stopPropagation();
        li.classList.add('active');
    })
})

const itemWithSubmenu = document.getElementsByClassName('has_submenu');
const button = document.createElement('button');
itemWithSubmenu.insertAdjacentElement('beforebegin',button);