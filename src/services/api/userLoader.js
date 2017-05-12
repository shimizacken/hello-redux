export default class UserLoader {

    static load(id) {

        return new Promise(function (resolve, reject) {

            setTimeout(function () {
                resolve({
                    id: 1,
                    name: 'tim'
                });
            }, 250);
        });
    }
}