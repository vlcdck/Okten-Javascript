// =========================
//
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//
//
// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

let coursesArray = [{
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
}, {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
}, {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
}, {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
}, {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
}, {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
}];

for (const course of coursesArray) {
    let block = document.createElement('div');
    block.classList.add('wrapper');

    let titleBlock = document.createElement('div');
    titleBlock.classList.add('title-block');
    let titleText = document.createElement('h3');
    titleText.classList.add('title-text');
    titleText.innerText = course.title;
    titleBlock.append(titleText);
    block.append(titleBlock);

    let durationwrapper = document.createElement('div');
    durationwrapper.classList.add('duration-wrapper');
    block.append(durationwrapper);

    let monthDurationBlock = document.createElement('div');
    monthDurationBlock.classList.add('month-duration-block');
    let monthDurationText = document.createElement('p');
    monthDurationText.classList.add('month-duration-text');
    monthDurationText.innerText = course.monthDuration;
    monthDurationBlock.append(monthDurationText);
    durationwrapper.append(monthDurationBlock);

    let hourDurationBlock = document.createElement('div');
    hourDurationBlock.classList.add('hour-duration-block');
    let hourDurationText = document.createElement('p');
    hourDurationText.classList.add('hour-duration-text');
    hourDurationText.innerText = course.hourDuration;
    hourDurationBlock.append(hourDurationText);
    durationwrapper.append(hourDurationBlock);

    let modulesBlock = document.createElement('div');
    modulesBlock.classList.add('modules-block');
    let modulesList = document.createElement('ul');
    modulesList.classList.add('modules-list');
    modulesBlock.append(modulesList);
    block.append(modulesBlock);

    for (const moduleElement of course.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.classList.add('module-item');
        moduleItem.innerText = moduleElement;
        modulesList.append(moduleItem);
    }
    document.body.append(block);
}