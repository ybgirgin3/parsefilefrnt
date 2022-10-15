import React from 'react';
import axios from 'axios';

class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: '',
      isFilePicked: false,
      extractData: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
      isFilePicked: !this.isFilePicked,
    });
  }

  submit() {
    const form = new FormData();
    form.append('file', this.state.selectedFile);
    console.warn(this.state.selectedFile);
    let url = 'https://parsefileapi.herokuapp.com/uploadfile/';

    axios
      .post(url, form)
      .then((res) => {
        console.warn(res.data);
        this.setState({ extractData: res.data });
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
                {this.isFilePicked ? (
                  <div>
                    <p>Filename: {this.selectedFile.name}</p>
                    <p>Filetype: {this.selectedFile.type}</p>
                    <p>Size in bytes: {this.selectedFile.size}</p>
                    <p>
                      lastModifiedDate:{' '}
                      {this.selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <p>Select a file to show details</p>
                )}
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
        <div className="row">{this.extractData}</div>
      </div>
    );
  }
}

export default FileUpload;
