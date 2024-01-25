
export default function Contact()
{
    return<>
    <div >  
    </div>
        {/* <Common
        name = "Get your order palced at"
        visit ="/con"
        btname = "let's buy"
        image = {img2}
        widths = {450}
        /> */}
        <div className="my-5">
            <h1 className="title"> Contact Us</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="testingdevProjects@gmail.com" method="post" enctype="text/plain">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" required/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Contact No.</label>
                            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter your contact no" required/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message" required></textarea>
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-primary" type="submit" disabled>Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}