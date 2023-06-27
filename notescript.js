var showOptionsButton = document.getElementById('showOptionsButton');
var optionsContainer = document.getElementById('optionsContainer');

var options = [
    { name: 'Semester 1', subOptions: ['Discrete Maths', 'C Programming', 'Fundamentals of a Computer', 'Web Technologies', 'Technical Communication'] },
    { name: 'Semester 2', subOptions: ['Applied Maths', 'Data Structure and Algorithm2', 'Database Management System', 'Web Based Programming', 'Environmental Studies'] },
    { name: 'Semester 3(Not available yet)', subOptions:  ['Will be added soon','Will be added soon','Will be added soon','Will be added soon','Will be added soon'] },
    { name: 'Semester 4(Not available yet)', subOptions: ['Will be added soon','Will be added soon','Will be added soon','Will be added soon','Will be added soon'] },
    { name: 'Semester 5(Not available yet)', subOptions: ['Will be added soon','Will be added soon','Will be added soon','Will be added soon','Will be added soon'] },
    { name: 'Semester 6(Not available yet)', subOptions: ['Will be added soon','Will be added soon','Will be added soon','Will be added soon','Will be added soon'] }
];

function showOptions() {
    showOptionsButton.style.display = 'none';
    optionsContainer.innerHTML = '';

    options.forEach(function (option) {
        var button = document.createElement('button');
        button.className = 'option';
        button.textContent = option.name;
        button.onclick = function () {
            showSubOptions(option.subOptions);
        };
        optionsContainer.appendChild(button);
        optionsContainer.appendChild(document.createElement('br'));
    });

    optionsContainer.style.display = 'block';
}

function showSubOptions(subOptions) {
    optionsContainer.innerHTML = '';

    subOptions.forEach(function (subOption) {
        var button = document.createElement('button');
        button.className = 'sub-option';
        button.textContent = subOption;
        button.onclick = function () {
            openPage(subOption);
        };
        optionsContainer.appendChild(button);
        optionsContainer.appendChild(document.createElement('br'));
    });
}

function openPage(option) {
    // Redirect to a different page based on the selected sub-option
    switch (option) {
        case 'Discrete Maths':
            window.location.href = 'dm.html';
            break;
        case 'C Programming':
            window.location.href = 'cp.html';
            break;
        case 'Fundamentals of a Computer':
            window.location.href = 'fcit.html';
            break;
        case 'Web Technologies':
            window.location.href = 'wt.html';
            break;
        case 'Technical Communication':
            window.location.href = 'tc.html';
            break;



        case 'Applied Maths':
            window.location.href = 'am.html';
            break;
        case 'Data Structure and Algorithm':
            window.location.href = 'dsa.html';
            break;
        case 'Database Management System':
            window.location.href = 'dbms.html';
            break;
        case 'Web Based Programming':
            window.location.href = 'wbp.html';
            break;
        case 'Environmental Studies':
            window.location.href = 'evs.html';
            break
      
        // Add more cases for other sub-options

        default:
            console.log('No redirection defined for: ' + option);
            break;
    }
}
