import mainStore from './storeConfig';
import UsersLoader from './services/api/usersLoader';
import generate from './usersgenerator'
require('./styles/main.scss');

console.log(mainStore.getState());

mainStore.subscribe(() => {

    let state = mainStore.getState();

    console.log("subscribe: State: ", state);

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

    console.time("add user");
    mainStore.dispatch({ type: "USER_ADDED_SUCCESS", payload: users });
    console.timeEnd("add user");
    clearForm();
});

document.getElementById('submitUsers').addEventListener('click', function () {

    let userCount = document.getElementById('users').value;

    if (!userCount) {
        userCount = undefined;
    }

    console.time("generate");
    let users = generate(userCount);
    console.timeEnd("generate");

    console.log("users", users);

    console.time("dispach");
    //mainStore.dispatch({ type: "MULTIPLE_USERS_ADDED_SUCCESS", payload: users });
    mainStore.dispatch({ type: "MULTIPLE_USERS_APPEND_SUCCESS", payload: users });
    console.timeEnd("dispach");
});