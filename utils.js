export function renderGoblin(gobbo) {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const hp = document.createElement('p');
    const img = document.createElement('img');

    img.src = './assets/goblin.webp';
    hp.textContent = gobbo.hp + ' HP';
    name.textContent = gobbo.name || (gobbo.name = 'spawn #' + Math.ceil(Math.random() * 100));
    div.classList.add('goblin');
    
    if (gobbo.hp === 0) {
        div.classList.toggle('dead');
        img.src = './assets/dead.jpg';
    }

    div.append(name);
    div.append(img);
    div.append(hp);

    return div;

}