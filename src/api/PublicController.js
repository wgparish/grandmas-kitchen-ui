import api from "../api/ApiBackend";

class PublicController {
    static async submitContactUsEmail(name, email, phone, message) {
        return api.post("/public/send-contact-us-email", {
            name: name,
            email: email,
            phoneNum: phone,
            message: message
        });
    }
}

export default PublicController;
