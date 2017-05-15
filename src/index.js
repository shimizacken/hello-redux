import mainStore from './storeConfig';
import UsersLoader from './services/api/usersLoader';

console.log(mainStore.getState());

// UsersLoader.load().then((user) => {

//     mainStore.dispatch({ type: "LOAD_USERS_SUCCESS", payload: user });

// });

mainStore.subscribe(() => {

    let state = mainStore.getState();

    if (state.users) {
        
        document.getElementById('currentUsers').innerText = "";

        state.users.map(function (user, index) {

            document.getElementById('currentUsers').innerText += `${index + 1}. ${user.name}\n`;

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