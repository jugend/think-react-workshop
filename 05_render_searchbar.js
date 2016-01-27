// Step 05: Render search bar elements

var SearchBar = React.createClass({
  render: function() {
    var filterText = this.props.filterText,
        inStockOnly = this.props.inStockOnly;

    return (
      // NEW: Render search bar elements
      <form>
        <input type="text"
          className="textInput"
          placeholder="Search..."
          value={filterText} />

        <p className="screen">{filterText ? filterText : '_'}</p>

        <p>
          <input type="checkbox"
            checked={this.props.inStockOnly} />
          {' '}
          <label htmlFor="inStockOnlyInput">Only show products in stock.</label>
        </p>
      </form>
    );
  }
});

// NEW: Add ProductTable component placeholder
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
        {/* NEW: Render SearchBar and ProductTable components */}
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly} />

        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
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
