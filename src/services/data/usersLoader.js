export default class UsersLoader {

    static load() {

        return new Promise(function (resolve, reject) {

            setTimeout(function () {
                resolve([{
                    id: 1,
                    name: 'Rachel'
                },
                {
                    id: 2,
                    name: 'Tim'
                },
                {
                    id: 3,
                    name: 'Alex'
                },
                {
                    id: 4,
                    name: 'Bernard'
                },
                {
                    id: 5,
                    name: 'Ela'
                }]);
            }, 1000);
        });
    }
}