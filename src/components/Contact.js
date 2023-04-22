import React from 'react'

function Contact() {
return(
    <div>
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0"> Contact Us </h3>
                        <h1 className="display-6 text-center mb-4"> Have Some <b> Questions? </b> </h1>
                        <hr className="w-25 mx-auto"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="../images/contact.webp" alt="contact" className="w-75"/>
                    </div>
                    
                    <div className="col-md-6">
                        
                        <form class="row g-3" >
                            <div class="col-md-10">
                                <label for="cname" class="form-label"> Name </label>
                                <input type="text" class="form-control" id="cname" name="cname" autoComplete="off" />
                            </div>
                            <div class="col-md-10">
                                <label for="cemail" class="form-label"> Email </label>
                                <input type="email" class="form-control" id="cemail" name="cemail" autoComplete="off"  />
                            </div>
                            <div class="col-md-10">
                                <label for="ctextarea" class="form-label"> Your Message </label>
                                <textarea name="ctextarea" class="form-control" id="ctextarea"  rows="5" autoComplete="off"  > </textarea>    
                            </div>

                            <button type="submit" className="btn btn-outline-dark col-md-4 rounded-pill"> Send Message <i class="fa-solid fa-paper-plane ms-2"></i> </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
}

export default Contact