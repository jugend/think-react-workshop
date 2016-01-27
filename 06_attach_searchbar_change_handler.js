// Step 06: Handle user search bar input change, input screen element
//          should display what user has typed.

var SearchBar = React.createClass({
  render: function() {
    var filterText = this.props.filterText,
        inStockOnly = this.props.inStockOnly;

    return (
      <form>
        {/* NEW: Add ref and onChange handler */}
        <input type="text"
          className="textInput"
          placeholder="Search..."
          value={filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />

        <p className="screen">{filterText ? filterText : '_'}</p>

        <p>
          {/* NEW: Add ref and onChange handler */}
          <input type="checkbox"
            checked={this.props.inStockOnly}
            id="inStockOnlyInput"
            ref="inStockOnlyInput"
            onChange={this.handleChange} />
          {' '}
          <label htmlFor="inStockOnlyInput">Only show products in stock.</label>
        </p>
      </form>
    );
  },

  // NEW: Handle input change
  handleChange: function() {
    // Call the action handler passed by AwesomeTable
    // so we could update the states owned by AwesomeTable
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    )
  }
});

var ProductTable = React.createClass({
  render: function() {
    var products = this.props.products,
        filterText = this.props.filterText,
        inStockOnly = this.props.inStockOnly;

    return (
      <div>
        Product Table
      </div>
    );
  }
});

var AwesomeTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    }
  },

  render: function() {
    var products = this.props.products,
        filterText = this.state.filterText,
        inStockOnly = this.state.inStockOnly;

    return (
      <div>
        {/* NEW: Pass onUserInput handler */}
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onUserInput={this.handleUserInput} />

        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  },

  // NEW: Handle search input changes & update the states.
  //      Changes in the states will cause the component to re-render
  //      and pass the updated states to the child components.
  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }
});

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <AwesomeTable products={PRODUCTS} />,
  document.getElementById('container')
);
