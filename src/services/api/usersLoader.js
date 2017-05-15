export default class UsersLoader {

    static load() {

        return new Promise(function (resolve, reject) {

            setTimeout(function () {
                resolve(
                    require('../mock/data/users')
                );
            }, 0);
        });
    }
}