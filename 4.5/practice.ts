class User {
	public static userName: string;
	private surname: string;
	protected age: number;

	constructor(userName: string, surname: string, age: number) {
		User.userName = userName;
		this.age = age;
		this.surname = surname;
	}

	public setAge(age: number) {
		this.age = age;
	}

	public getAge() {
		return this.age;
	}
}