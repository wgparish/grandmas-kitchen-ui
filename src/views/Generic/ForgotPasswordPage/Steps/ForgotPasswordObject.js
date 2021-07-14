class ForgotPasswordObject {
    constructor(state) {
        this.email = state.email;
        this.code = state.code;
        this.userId = state.userId;
        this.password = state.password;
        this.sentEmail = state.sentEmail;
        this.sentCode = state.sentCode;
    }
}

const forgotPasswordObject = new ForgotPasswordObject({
    email: "",
    code: "",
    userId: 0,
    password: "",
    sentEmail: false,
    sentCode: false,
})

export default forgotPasswordObject;
