import mainStore from './storeConfig';
import UsersLoader from './services/api/usersLoader';

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

document.getElementById('submitUser').addEventListener('click', function () {

    let users = {
        id: hashCode(),
        name: document.getElementById('username').value,
        age: document.getElementById('userage').value,
    };

    mainStore.dispatch({ type: "USER_ADDED_SUCCESS", payload: users });
});