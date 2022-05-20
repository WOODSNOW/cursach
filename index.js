/* eslint-disable import/extensions */
import create from './js/util/create.js';

let Container;

function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const vv = [...xmlDoc.getElementsByTagName('BOOK')];

  vv.forEach((item) => {
    Container.append(
      create('div', 'card', [
        create('img', 'book__photo', null, null, ['alt', item.querySelector('TITLE').innerHTML], ['src', `./assets/svg/img/${item.querySelector('IMAGE').innerHTML}`]),
        create('div', 'card__price', item.querySelector('PRICE').innerHTML),
        create('div', 'card__desc-cont', [
          create('div', 'card__title', item.querySelector('TITLE').innerHTML),
          create('div', 'card__author', item.querySelector('AUTHOR').innerHTML),
        ]),
        create('div', 'card__bye-cont', [
          create('button', 'card-button', 'в корзину'),
          create('div', 'card-heart', ''),
        ]),
      ]),
    );
  });
}

function loadXMLDoc() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function f() {
    if (this.readyState === 4 && this.status === 200) {
      myFunction(this);
    }
  };
  xmlhttp.open('GET', 'data.xml', true);
  xmlhttp.send();
}

loadXMLDoc();
Container = document.querySelector('.container-goods');
