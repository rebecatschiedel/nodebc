const ul = document.createElement('ul');

const weeklyChores = ['wash dishes', 'vaccuum', 'wipe windows', 'take out the trash', 'feed the birds', 'make the bed', 'fight with the monster in the closet', 'chat with the ghosts at night', 'have tea party with the spiders', 'make world domination plans'];

weeklyChores.forEach(chore => {
    const li = document.createElement('li');
    li.innerText = chore;
    li.addEventListener('click', () => {
        li.classList.toggle('striked');
    })
    ul.appendChild(li);
});

document.body.appendChild(ul);