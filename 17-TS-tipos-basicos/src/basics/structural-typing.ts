type VerifyUSerFN = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUSerFN = (user, sentVaue) => {
  return (
    user.username === sentVaue.username && user.password === sentVaue.password
  );
};

const bdUSer = { username: 'RuanSigas', password: '23131rq' };
const sentUSer = { username: 'RuanSigas', password: '123123131rq' };
const loggedIn = verifyUser(bdUSer, sentUSer);

console.log(loggedIn);
