import api from "../api/ApiBackend";

class PublicController {
  static sendContactUsEmailUrl = "/public/send-contact-us-email";

  static async submitContactUsEmail(name, email, phone, message) {
    return api.post(this.sendContactUsEmailUrl, {
      name: name,
      email: email,
      phoneNum: phone,
      message: message
    });
  }
}

export default PublicController;
