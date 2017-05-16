import mainStore from './storeConfig';
import UsersLoader from './services/api/usersLoader';
require('./styles/main.scss');

console.log(mainStore.getState());

mainStore.subscribe(() => {

    let state = mainStore.getState();

    console.log(state);

    window.removeUser = function (id) {
        mainStore.dispatch({ type: "USER_REMOVE_SUCCESS", payload: id });
    }

    if (state.user) {

        document.getElementById('currentUsers').innerText = "";

        state.user.map(function (u, index) {

            document.getElementById('currentUsers').innerHTML += `${index + 1}. ${u.name} `;
            document.getElementById('currentUsers').innerHTML += `<span onclick="removeUser('${u.id}');" style="cursor: pointer; color: red;">X</span>`;
            document.getElementById('currentUsers').innerHTML += `<br />`;

        });
    }
});

const hashCode = function () {

    var random = Math.random().toString();

    return random.replace(".", "");
};

function clearForm() {
    document.getElementById('userNameError').innerText = "";
    document.getElementById('ageError').innerText = "";
    document.getElementById('username').value = "";
    document.getElementById('userage').value = "";
}

document.getElementById('submitUser').addEventListener('click', function () {

    let userName = document.getElementById('username').value;
    let age = document.getElementById('userage').value;

    if (!userName) {
        document.getElementById('userNameError').innerText = "must fill user name!";
    }

    if (!age) {
        document.getElementById('ageError').innerText = "must fill age!";
    }

    if (!userName || !age) {
        return;
    }

    let users = {
        id: hashCode(),
        name: userName,
        age: age
    };

    mainStore.dispatch({ type: "USER_ADDED_SUCCESS", payload: users });
    clearForm();
});