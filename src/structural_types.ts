type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = { username: string, password: string }

const verifyUser: VerifyUserFn = (user, sentValue) => {

    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
};
type Cliente = { username: string, gato?: string, password: string, cachorro?: string }

const bdUser = { username: 'joao', password: '123456' }
const sentUser: Cliente = { username: 'joao', password: '123456' }
console.log(sentUser);

const isLoggedIn = verifyUser(bdUser, sentUser);
console.log("Esta logado?", isLoggedIn);
