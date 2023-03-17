import React from 'react'

const CreateBookModal = () => {
  return (
    <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">Form validations</header>
              <div className="panel-body">
                <div className="form" id="from-book">
                  <div
                    className="form-validate form-horizontal"
                    id="feedback_form"
                    method="get"
                    action=""
                  >
                    <div className="form-group ">
                      <label for="cname" className="control-label col-lg-2">
                        Name <span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          onChange={e => {
                            this.setState({
                              name: e.target.value
                            });
                          }}
                          value={this.state.name}
                          className="form-control"
                          id="cname"
                          name="fullname"
                          minlength="5"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="cemail" className="control-label col-lg-2">
                        Date<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          value={this.state.release_date}
                          onChange={e =>
                            this.setState({
                              release_date: e.target.value
                            })
                          }
                          className="form-control "
                          id="cemail"
                          type="date"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="curl" className="control-label col-lg-2">
                        Price
                      </label>
                      <div className="col-lg-10">
                        <input
                          value={this.state.price}
                          onChange={e =>
                            this.setState({
                              price: e.target.value
                            })
                          }
                          className="form-control "
                          id="curl"
                          type="text"
                          name="url"
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="cname" className="control-label col-lg-2">
                        Miêu Tả <span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          value={this.state.describe}
                          onChange={e =>
                            this.setState({
                              describe: e.target.value
                            })
                          }
                          className="form-control"
                          id="subject"
                          name="subject"
                          minlength="5"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment " className="control-label col-lg-2">
                        Thể Loại
                      </label>
                      <div className="btn-group col-lg-10">
                        <button
                          style={{ width: "200px" }}
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          {this.state.category} <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          {this.renderMenuCategory()}
                        </ul>
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment" className="control-label col-lg-2">
                        Tác Giả
                      </label>
                      <div className="btn-group col-lg-10">
                        <button
                          style={{ width: "200px" }}
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          {this.state.author} <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          {this.renderMenuAuthor()}
                        </ul>
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment" className="control-label col-lg-2">
                        Nhà Xuất Bản
                      </label>
                      <div className="btn-group col-lg-10">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                          style={{ width: "200px" }}
                        >
                          {this.state.publisher} <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          {this.renderMenuPublisher()}
                        </ul>
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment" className="control-label col-lg-2">
                        Image upload{" "}
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control "
                          type="file"
                          id="ccomment"
                          name="comment"
                          required
                          onChange={e =>
                            this.handleChangeImg(e.target.files[0])
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment" className="control-label col-lg-2">
                        Image
                      </label>
                      <div className="col-lg-10">
                        <img
                          src={this.state.img}
                          style={{ maxWidth: "300px" }}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-offset-2 col-lg-10">
                        <p>{this.state.noti}</p>
                      </div>
                    </div>
                    {this.renderBtnSubmit()}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
  )
}

export default CreateBookModal