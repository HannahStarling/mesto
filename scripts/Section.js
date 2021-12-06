export default class Section {
  //Первым параметром конструктора принимает объект с двумя свойствами: items и renderer.
  // Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
  constructor({ items, renderer }, containerSelector) {
    //Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса.
    this._items = items;
    //Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Содержит публичный метод, который отвечает за отрисовку всех элементов.
  // Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
  render() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  // Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(element) {
    this._container.prepend(element);
  }
  // У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.
}
