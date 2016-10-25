/**
 * @fileoverview
 * @author Igor Orlov
 */

'use strict';

(function() {
  var pictures = [{
    "likes": 40,
    "comments": 12,
    "url": "photos/1.jpg"
  }, {
    "likes": 125,
    "comments": 49,
    "url": "photos/2.jpg"
  }, {
    "likes": 350,
    "comments": 20,
    "url": "failed.jpg"
  }, {
    "likes": 61,
    "comments": 0,
    "url": "photos/4.jpg"
  }, {
    "likes": 100,
    "comments": 18,
    "url": "photos/5.jpg"
  }, {
    "likes": 88,
    "comments": 56,
    "url": "photos/6.jpg"
  }, {
    "likes": 328,
    "comments": 24,
    "url": "photos/7.jpg"
  }, {
    "likes": 4,
    "comments": 31,
    "url": "photos/8.jpg"
  }, {
    "likes": 328,
    "comments": 58,
    "url": "photos/9.jpg"
  }, {
    "likes": 25,
    "comments": 65,
    "url": "photos/10.jpg"
  }, {
    "likes": 193,
    "comments": 31,
    "url": "photos/11.jpg"
  }, {
    "likes": 155,
    "comments": 7,
    "url": "photos/12.jpg"
  }, {
    "likes": 369,
    "comments": 26,
    "url": "photos/13.jpg"
  }, {
    "likes": 301,
    "comments": 42,
    "url": "photos/14.jpg"
  }, {
    "likes": 241,
    "comments": 27,
    "url": "photos/15.jpg"
  }, {
    "likes": 364,
    "comments": 2,
    "url": "photos/16.jpg"
  }, {
    "likes": 115,
    "comments": 21,
    "url": "photos/17.jpg"
  }, {
    "likes": 228,
    "comments": 29,
    "url": "photos/18.jpg"
  }, {
    "likes": 53,
    "comments": 26,
    "url": "photos/19.jpg"
  }, {
    "likes": 240,
    "comments": 46,
    "url": "photos/20.jpg"
  }, {
    "likes": 290,
    "comments": 69,
    "url": "photos/21.jpg"
  }, {
    "likes": 283,
    "comments": 33,
    "url": "photos/22.jpg"
  }, {
    "likes": 344,
    "comments": 65,
    "url": "photos/23.jpg"
  }, {
    "likes": 216,
    "comments": 27,
    "url": "photos/24.jpg"
  }, {
    "likes": 241,
    "comments": 36,
    "url": "photos/25.jpg"
  }, {
    "likes": 100,
    "comments": 11,
    "url": "photos/26.mp4",
    "preview": "photos/26.jpg"
  }];

  // Прячет блок с фильтрами .filters, добавляя ему класс hidden и сохраняет фотографии в массив pictures.
  var filters = document.querySelector('.filters');
  filters.classList.add('hidden');

  // Создаёт для каждой записи массива pictures блок фотографии на основе шаблона #picture-template.
  var pictureTemplate = document.getElementById('picture-template');
  var templateContainer = 'content' in pictureTemplate ? pictureTemplate.content : pictureTemplate;

  var getPictureElement = function(picture) {
    var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
    // Значение поля likes внутрь блока .picture-likes
    pictureElement.querySelector('.picture-likes').textContent = picture.likes;
    // Значение поля comments внутрь блока .picture-comments
    pictureElement.querySelector('.picture-comments').textContent = picture.comments;
    // Все изображения создаёт с помощью new Image() и добавляет им обработчики загрузки и ошибки
    var pictureImage = new Image();
    pictureImage.src = picture.url;
    // Обработчик загрузки: после загрузки изображения, укажите тегу <img /> в шаблоне src загруженного изображения и задайте ему размеры 182×182.
    pictureImage.onload = function(evt) {
      pictureElement.querySelector('img').src = evt.target.src;
    };
    // Обработчик ошибки: добавьте блоку фотографии .picture класс picture-load-failure.
    pictureImage.onerror = function() {
      pictureElement.classList.add('picture-load-failure');
    };
    return pictureElement;
  }

  // Выводит созданные элементы на страницу внутрь блока .pictures:
  var picturesBlock = document.querySelector('.pictures');
  pictures.forEach(function(picture) {
    var pictureElement = getPictureElement(picture);
    picturesBlock.appendChild(pictureElement);
  });


  // Отображает блок с фильтрами.
  filters.classList.remove('hidden');

})();