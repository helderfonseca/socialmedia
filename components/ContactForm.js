export default function ContactForm() {
    return(
        
        <div className="md:mt-20 mt-16 mx-auto">
            <h3 className="text-center">Fill in the fields below to obtain a special offer of 30% OFF</h3>

            <div id="mlb2-5795111" className="text-center ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5795111">
                    <div className="ml-form-align-center">
                        <div className="ml-form-embedWrapper embedForm">
                        <div className="px-5 pt-5 pb-5 ml-form-embedBody ml-form-embedBodyDefault row-form">
                            <div className="ml-form-embedContent" style={{marginBottom:0}}></div>
                            <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/d6m8v4" data-code="d6m8v4" method="post" target="_blank">
                            <div className="ml-form-formContent">
                                <div class="ml-form-fieldRow">
                                    <div class="ml-field-group ml-field-name ml-validate-required">
                                        <input aria-label="name" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="Name" autocomplete="name" />
                                    </div>
                                </div>
                                <div className="ml-form-fieldRow">
                                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                        <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autoComplete="email" />
                                    </div>
                                </div>
                                <div class="ml-form-fieldRow">
                                    <div class="ml-field-group ml-field-phone ml-validate-required">
                                        <input aria-label="phone" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[phone]" placeholder="Phone" autocomplete="" />
                                    </div>
                                </div>
                                <div className="ml-form-fieldRow ml-last-item">
                                    <div className="ml-field-group ml-field-company">
                                        <input aria-label="company" type="text" className="form-control" data-inputmask="" name="fields[company]" placeholder="Company" autoComplete="" />
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="ml-submit" value="1" />
                            <div className="ml-form-embedSubmit">
                                <button type="submit" className="primary">Submit</button>
                                <button disabled="disabled" style={{display:'none'}} type="button" className="loading"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span> </button>
                            </div>
                            <input type="hidden" name="anticsrf" value="true" />
                            </form>
                        </div>
                        <div className="ml-form-successBody row-success" style={{display:'none'}}>
                            <div className="ml-form-successContent">
                                <h4>Thank you!</h4>
                                <p>We will send your proposal as soon as possible.</p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>

    </div>

    )
}