import React from 'react';
import axios from 'axios';

class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: '',
      extractData: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }

  submit() {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    console.warn(this.state.selectedFile);
    let url = 'https://parsefileapi.herokuapp.com/uploadfile/';

    axios
      .post(url, data)
      .then((res) => {
        this.setState({ extractData: res.data });
        console.log(this.state.extractData);
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <br />

            <h3 className="text-white">ParseFileAPI</h3>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="file"
                  className="form-control"
                  name="upload_file"
                  onChange={this.handleInputChange}
                />
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={() => this.submit()}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;
