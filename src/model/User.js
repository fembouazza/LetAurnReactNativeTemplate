export default class User {

    id: number;

    name: string;

    birthday: Date;

    constructor(user: any) {
        this.id = user.id;
        this.name = user.name;
        this.birthday = user.birthday;
    }

}
