function Container(id, className, tagName) {
	if(!['div', 'ul', 'li', 'a'].includes(tagName)) {
		// Ошибка
	}

	this.id = id;
	this.class = className;
	this.tagName = tagName;
}

Container.prototype.render = function() {
	var wrapper = document.createElement(this.tagName);
	wrapper.id = this.id;
	wrapper.className = this.class;
	return wrapper;
};

Container.prototype.remove = function() {
	var elem = document.getElementById(this.id);
	document.body.removeChild(elem);
};

function Menu(id, className, items) {
	Container.call(this, id, className, 'ul');

	this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
	var ul = document.createElement('ul');
 	this.items.forEach(function(item) {
		if (item instanceof Container) {
			ul.appendChild(item.render());
		}
	});

	return ul;
};

function MenuItem(className, title, href) {
	Container.call(this, null, className, 'li');

	this.title = title;
	this.href = href;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {
	var li = document.createElement('li');
	var link = document.createElement('a');

	link.href = this.href;
	link.textContent = this.title;

	li.appendChild(link);

	return li;
};
