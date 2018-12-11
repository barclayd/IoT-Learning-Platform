import React, {Component} from 'react';

class CompanyInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>About us</h3>
                    <p>Data Works Wales has a ground-breaking mission to demonstrate that innovative new technologies can bring economic, social and sustainability benefits to poorly served individuals and communities in Wales.

                        Data Works Wales aims to provide STEM talented individuals in the communities of the South Wales Valleys, who would otherwise not get the chance, an opportunity to develop skills and gain vocational qualifications which Wales needs now. Data Works Wales will work on innovative applications of the emerging Internet of Things (IoT). Centred in the heart of its community, each Data Works will provide for  individuals, organisations and communities groups engagement and participation in real developments using these technologies and evaluate how IoT technology can contribute to prosperity, resiliency and sustainability challenges.
                    </p>
                </div>

                <div>
                    <h3>Main wesite page:</h3>
                    <a>http://www.dataworks.cymru</a>
                </div>

                <div>
                    <h3>Follow us on Linkdin:</h3>
                    <a>https://www.linkedin.com/company/data-works-wales/</a>
                </div>
            </div>
        )
    }
}

export default CompanyInfo;