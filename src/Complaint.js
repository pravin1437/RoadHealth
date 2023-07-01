import React from 'react'

export default function Complaint() {
    return (
        <div className="container my-3">
           
            <div className="mb-3 x-auto col-10 col-md-10 col-lg-15 form-check">
                <label for="exampleFormControlTextarea1" className="form-label">Write down your Complaint</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-2  x-auto col-10 col-md-10 col-lg-15 form-check">
                <div class="row">
                    <div class="col-md-3">
                        <label for="formFileMultiple" class="form-label">Drop the pictures of the issue</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                    </div>
                </div>

                <div class="mb-3 my-2">
                    <label for="basic-url" class="form-label">Paste the Location Link</label>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon3">https://googlemaps.com/</span>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
                    </div>
                </div>
                </div>
            </div >
            )
}
