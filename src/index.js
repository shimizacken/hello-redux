import mainStore from './storeConfig';
import UsersLoader from './services/api/usersLoader';

console.log(mainStore.getState());

mainStore.subscribe(() => {

    let state = mainStore.getState();

    console.log(state);

    window.removeUser = function (id) {
        mainStore.dispatch({ type: "USER_REMOVE_SUCCESS", payload: id });
    }

    if (state.users) {

        document.getElementById('currentUsers').innerText = "";

        state.users.map(function (user, index) {

            document.getElementById('currentUsers').innerHTML += `${index + 1}. ${user.name} `;
            document.getElementById('currentUsers').innerHTML += `<span onclick="removeUser('${user.id}');" style="cursor: pointer; color: red;">X</span>`;
            document.getElementById('currentUsers').innerHTML += `<br />`;

        });
    }
});

const hashCode = function () {

    var random = Math.random().toString();

    return random.replace(".", "");
};

document.getElementById('submitUser').addEventListener('click', function () {

    let users = {
        id: hashCode(),
        name: document.getElementById('username').value,
        age: document.getElementById('userage').value,
    };

    mainStore.dispatch({ type: "USER_ADDED_SUCCESS", payload: users });
});