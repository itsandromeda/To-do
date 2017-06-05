/*jshint esversion: 6*/
/*global $*/
const Header = (update) => {

    const header = $('<header></header>');
    const container = $('<div class="container"></div>');
    const h1 = $('<h1>To Do App</h1>');

    container.append(h1);
    header.append(container);

    return header;
};