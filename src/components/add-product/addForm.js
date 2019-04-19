import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "../../store/actions/productActions";

class addForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      description: "",
      pricea: "",
      sale: null,
      category: null,
      addedBy: null
    };
  }
  componentDidMount() {
    this.setState({
      addedBy: localStorage.getItem("user-id"),
      category: "Electronics"
    });
  }

  //handels updating the state with the input details
  changeHandler(value, key) {
    this.setState({
      [key]: value
    });
  }

  //handels the sale
  saleHandler(value) {
    this.setState({ sale: value });
    var disc = document.getElementById("disc");
    if (this.state.sale === true) {
      disc.disabled = true;
    } else {
      disc.disabled = false;
    }
  }

  render() {
    return (
      <>
        <div className="add-product container">
          <form
            style={{ width: "100%", marginBottom: "5rem" }}
            action=""
            onSubmit={event => {
              event.preventDefault();
              this.props.addNew(this.state);
              this.props.history.push("/products");
            }}
          >
            <div className="add-product__images slider" />
            <div className="add-product__data">
              <div className="form-controls">
                <section className="tabs">
                  <div className="tabs__bodies">
                    <div className="tabs__body active">
                      <div className="form-group invalid">
                        <label for="">Image Url</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={event =>
                            this.changeHandler(event.target.value, "image")
                          }
                          name="image"
                          required="true"
                        />
                      </div>

                      <div className="form-group invalid">
                        <label for="">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={event =>
                            this.changeHandler(event.target.value, "name")
                          }
                          name="name"
                          required="true"
                        />
                      </div>
                      <div className="form-group">
                        <label for="">Description</label>
                        <textarea
                          className="form-control"
                          onChange={event =>
                            this.changeHandler(
                              event.target.value,
                              "description"
                            )
                          }
                          type="text"
                          name="description"
                          cols="30"
                          rows="4"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="tabs__body ">
                      {/* the new product name */}
                      <div className="form-group invalid">
                        <label for="">Name</label>
                        <input
                          // required="true"
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                        />
                      </div>

                      {/* the disscount */}
                      <div className="form-group">
                        <label for="">Description</label>
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          cols="30"
                          rows="4"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* price */}
                <div className="form-group">
                  <label for="">Price</label>
                  <input
                    className="form-control"
                    onChange={event =>
                      this.changeHandler(event.target.value, "pricea")
                    }
                    type="number"
                    name="pricea"
                    required="true"
                  />
                </div>

                {/* status to be on sale or not */}
                <div className="add-product__discount">
                  <div className="form-group">
                    <label for="">Satus</label>
                    <div className="form-group__radios">
                      <div className="form-group__radio">
                        <input
                          type="radio"
                          name="sale"
                          onChange={() => this.saleHandler(true)}
                        />
                        <span>On Sale</span>
                      </div>
                      <div className="form-group__radio">
                        <input
                          type="radio"
                          name="sale"
                          onChange={() => this.saleHandler(false)}
                        />
                        <span>Not On Sale</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="">Discount</label>
                    <input
                      className="form-control"
                      type="number"
                      disabled
                      name="disc"
                      id="disc"
                    />
                  </div>
                </div>

                {/* Category section */}
                <div className="form-group">
                  <label for="">Category</label>
                  <select
                    onChange={event =>
                      this.changeHandler(event.target.value, "category")
                    }
                    className="form-control"
                    // required="true"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Bags">Bags</option>
                    <option value="Shoes">Shoes</option>
                  </select>
                </div>

                {/* form buttons */}
                <div className="add-product__actions">
                  <button href="#" className="btn btn--gray">
                    Cancel
                  </button>
                  <button href="#" className="btn btn--primary">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNew: newProduct => dispatch(add(newProduct))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(addForm);
