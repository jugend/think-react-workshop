// Step 04: Create SearchBar and ProductTable component placeholders

// NEW: Add SearchBar component placeholder
var SearchBar = React.createClass({
  render: function() {
    var filterText = this.props.filterText,
        inStockOnly = this.props.inStockOnly;

    return (
      <div>
        Search Bar
      </div>
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
