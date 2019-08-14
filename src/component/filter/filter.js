import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

//calling service class
import FilterService from "../../services/filterService";
import Details from "../details/details";
/*this is just for the purpose of testing
import Listing from "../../../public/listing/listings.json";
const { fields, data } = Listing;
const dataShort = data.map(d => {
  //key, value pair mapping the data with the fields
  return fields.reduce((o, k, i) => ({ ...o, [k]: d[i] }), {});
});
console.log("xxxxxxxxx filed", fields);*/

const Api = new FilterService();

class Filter extends Component {
  constructor(props) {
    super(props);
    console.log("xxprops", props);
    this.state = {
      records: [],
      fillterState: [],
      priceFilter: 1000,
      bathrooms: 1,
      bedrooms: 1,
      selected: [],
      selectedId: 1,
      buttonValue: [1, 2, 3, 4, 5]
    };
  }
  componentWillMount() {
    this.getListingData();
  }
  componentDidMount() {
    this.filterFunction();
  }

  getListingData = () => {
    Api.getJsonData()
      .then(listing => {
        const { fields, data } = listing;
        const dataShort = data.map(d => {
          return fields.reduce((o, k, i) => ({ ...o, [k]: d[i] }), {});
        });

        dataShort.forEach((item, i) => {
          item.id = i; // needed for th table
        });
        console.log("xxxxxxxxx filed", fields);
        this.setState({
          fillterState: dataShort,
          records: dataShort
        });
      })
      .catch(err => {
        console.log("xxxxxxx xxxxxxxx xxxx res is res res ", err);
      });
  };

  handleOnChange = value => {
    this.setState(state => {
      if (this.filterFunction()) return undefined;
      else return { priceFilter: value };
    });
  };

  handleFilter = value => {
    this.filterFunction();
  };

  filterFunction = () => {
    setTimeout(
      function() {
        const products = [];
        const records = this.state.records;
        for (var i = 0; i < records.length; i++) {
          if (
            records[i].bedrooms === this.state.bedrooms &&
            records[i].bathrooms === this.state.bathrooms &&
            records[i].price <= this.state.priceFilter
          ) {
            products.push(records[i]);
          }
        }

        this.setState({ fillterState: products });
      }.bind(this),
      100
    );
  };

  renderShowsTotal() {
    return <p style={{ color: "blue" }} />;
  }

  isExpandableRow = row => {
    console.log("isExpandableRow ", row);
    if (row.id === this.state.selectedId) return true;
    return false;
  };

  priceFormatter = (cell, row) => {
    return `$${cell}`;
  };

  expandComponent(row) {
    const products2 = [];
    const records = this.state.records;
    for (var i = 0; i < records.length; i++) {
      if (records[i].id === this.state.selectedId) {
        products2.push(records[i]);
      }
    }
    if (products2[0]) {
      return (
        <div>
          <Details details={products2} />
          {/* Apartments Information */}
        </div>
      );
    }
  }

  render() {
    const options = {
      page: 1, // which page you want to show as default
      sizePerPageList: [
        {
          text: "5",
          value: 5
        },
        {
          text: "10",
          value: 10
        },
        {
          text: "All",
          value: this.state.fillterState.length
        }
      ], // you can change the dropdown list for size per page
      sizePerPage: 5, // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 3, // the pagination bar size.
      prePage: "Prev", // Previous page button text
      nextPage: "Next", // Next page button text
      firstPage: "First", // First page button text
      lastPage: "Last", // Last page button text
      prePageTitle: "Go to previous", // Previous page button title
      nextPageTitle: "Go to next", // Next page button title
      firstPageTitle: "Go to first", // First page button title
      lastPageTitle: "Go to Last", // Last page button title
      paginationShowsTotal: this.renderShowsTotal, // Accept bool or function
      paginationPosition: "bottom", // default is bottom, top and both is all available
      //keepSizePerPageState: true, //default is false, enable will keep sizePerPage dropdown state(open/clode) when external rerender happened
      // hideSizePerPage: true, // You can hide the dropdown for sizePerPage
      alwaysShowAllBtns: true, // Always show next and previous button
      withFirstAndLast: false, // Hide the going to First and Last page button
      hidePageListOnlyOnePage: true // Hide the page list if only one page.
    };
    let { priceFilter } = this.state;

    const onRowSelect = ({ id }, isSelected) => {
      this.setState({
        selectedId: id
      });

      return false;
    };

    const selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      clickToExpand: true, // you should add this to trigger selection and expand both on clicking
      onSelect: onRowSelect, // manage the selection state
      selected: this.state.selected, // set selected as a state data
      hideSelectColumn: true
    };

    return (
      <div>
        <main id="page-content-wrapper" role="main">
          <div className="container custom-container">
            <div className="form-group">
              <h3 className="top-title">Apartments in Ann Arbor, MI</h3>
            </div>
            <div className="">
              <div className="col-md-4 col-sm-6 col-xs-12 form-group">
                <div
                  className="btn-group custom-filter"
                  role="group"
                  aria-label="Third group"
                >
                  <span className="text-box"> BedRooms</span>
                </div>
                <div className="btn-group custom-filter mr-2" role="group">
                  {this.state.buttonValue.map(item => (
                    <button
                      key={item}
                      type="button"
                      className={
                        "btn btn-secondary " +
                        (this.state.bedrooms === item ? "activeCls" : "")
                      }
                      onClick={() =>
                        this.setState({ bedrooms: item }, this.handleFilter)
                      }
                    >
                      {item}+
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 form-group">
                <div className="btn-group custom-filter" role="group">
                  <span className="text-box"> BathRooms</span>
                </div>
                <div
                  className="btn-group custom-filter mr-2"
                  role="group"
                  aria-label="Second group"
                >
                  {this.state.buttonValue.map(item => (
                    <button
                      key={item}
                      type="button"
                      className={
                        "btn btn-secondary " +
                        (this.state.bathrooms === item ? "activeCls" : "")
                      }
                      onClick={() =>
                        this.setState({ bathrooms: item }, this.handleFilter)
                      }
                    >
                      {item}+
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 form-group">
                <div className="btn-group mr-2 slider-in" role="group">
                  <span className="text-price"> Price</span>
                  <Slider
                    value={priceFilter}
                    onChange={this.handleOnChange}
                    min={200}
                    max={5000}
                    tooltip={true}
                    step={50}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <BootstrapTable
                striped
                hover
                data={this.state.fillterState}
                pagination
                options={options}
                expandableRow={this.isExpandableRow}
                expandComponent={() => this.expandComponent()}
                selectRow={selectRowProp}
              >
                {/* {
                            fields.map((f, i) => (
                                <TableHeaderColumn dataField={f} hidden={f==='image_id'} isKey={i === 0 ? true : false} key={f}>{f}</TableHeaderColumn>
                            ))
                        } */}
                <TableHeaderColumn dataField="id" hidden={true} isKey>
                  Product ID
                </TableHeaderColumn>
                <TableHeaderColumn dataField="address">
                  Address
                </TableHeaderColumn>
                <TableHeaderColumn dataField="city">City</TableHeaderColumn>
                <TableHeaderColumn dataField="state">State</TableHeaderColumn>
                <TableHeaderColumn dataField="building_name">
                  Building
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="price"
                  dataFormat={this.priceFormatter}
                >
                  Price
                </TableHeaderColumn>
                <TableHeaderColumn dataField="bedrooms">
                  BedRooms
                </TableHeaderColumn>
                <TableHeaderColumn dataField="bathrooms">
                  Bathrooms
                </TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Filter;
