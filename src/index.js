import mainStore from './storeConfig';
import UsersLoader from './services/data/usersLoader';

let rootDiv = document.createElement('div');
let idAttr = document.createAttribute('id');
idAttr.value = 'root';
rootDiv.setAttributeNode(idAttr);
document.body.insertBefore(rootDiv, document.body.firstChild);

UsersLoader.load().then((user) => {

    mainStore.dispatch({ type: "LOAD_USERS_SUCCESS", payload: user });

});

mainStore.subscribe(() => {

    let state = mainStore.getState();

    if(state.users){

        state.users.map(function (user, index) {
            
            document.getElementById('root').innerText += `${index + 1}. ${user.name}\n`;
            
        });
    }
});