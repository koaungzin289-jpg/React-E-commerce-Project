function ContactForm() {
  return (
    <div className="w-75 mx-auto py-5">
      <div className="row py-5">
        <div className="col-12 col-lg-4 mb-5">
          <div className="d-flex">
            <i className="bi bi-geo-alt-fill me-3 bg-primary text-white text-center py-2 px-3 rounded-2"></i>
            <span className="text-black-50">
              43 Raymouth Rd. Baltemoer, London 3910
            </span>
          </div>
        </div>
        <div className="col-12 col-lg-4 mb-5">
          <div className="d-flex">
            <i className="bi bi-envelope-fill me-3 bg-primary text-white text-center py-2 px-3 rounded-2"></i>
            <span className="text-black-50">info@yourdomain.com</span>
          </div>
        </div>
        <div className="col-12 col-lg-4 mb-5">
          <div className="d-flex">
            <i className="bi bi-telephone-fill bg-primary text-white text-center py-2 px-3 rounded-2"></i>
            <span className="text-black-50">+1 294 3925 3939</span>
          </div>
        </div>
      </div>
      <form className="pb-5 mb-5">
        <div className="row py-5">
          <div className="col-12 col-lg-6 pb-2">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="col-12 col-lg-6 pb-2">
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="col-12 pb-2">
            <label htmlFor="email">Email adress</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="col-12 pb-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-control h-100"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-dark py-2 px-4 rounded-5 fw-bold">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
