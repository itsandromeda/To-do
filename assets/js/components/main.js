/*jshint esversion: 6*/
/*global $, Header, Todo*/
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Header());
    wrapper.append(Todo());

    root.append(wrapper);
};

const state = {
    todos: []
};

$(_ => {
    const root = $('.root');
    render(root);
});